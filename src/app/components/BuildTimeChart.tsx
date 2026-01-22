'use client';

interface DataPoint {
  targetMin: number;
  actualSec: number;
  machine: 'Standard' | 'Enhanced' | 'Turbo';
}

interface BuildTimeChartProps {
  data: DataPoint[];
}

const COLORS = {
  Standard: '#3b82f6',  // blue
  Enhanced: '#22c55e',  // green
  Turbo: '#eab308',     // yellow
};

const MARKERS = {
  Standard: 'circle',
  Enhanced: 'rect',
  Turbo: 'triangle',
};

export default function BuildTimeChart({ data }: BuildTimeChartProps) {
  if (data.length === 0) return null;

  // Chart dimensions
  const width = 700;
  const height = 400;
  const padding = { top: 40, right: 40, bottom: 60, left: 70 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  // Calculate ranges
  const maxTargetMin = Math.max(...data.map(d => d.targetMin));
  const maxActualSec = Math.max(...data.map(d => d.actualSec));

  const xMax = Math.ceil(maxTargetMin / 5) * 5 || 20;
  const yMax = Math.ceil(maxActualSec / 60) * 60 || 1200;

  // Scale functions
  const scaleX = (targetMin: number) => padding.left + (targetMin / xMax) * chartWidth;
  const scaleY = (actualSec: number) => padding.top + chartHeight - (actualSec / yMax) * chartHeight;

  // Group data by machine type and sort by targetMin
  const byMachine: Record<string, DataPoint[]> = {};
  for (const d of data) {
    if (!byMachine[d.machine]) byMachine[d.machine] = [];
    byMachine[d.machine].push(d);
  }
  for (const machine of Object.keys(byMachine)) {
    byMachine[machine].sort((a, b) => a.targetMin - b.targetMin);
  }

  // Generate ideal line points (y = x * 60)
  const idealLinePoints: string[] = [];
  for (let x = 0; x <= xMax; x += xMax / 20) {
    const idealSec = x * 60;
    if (idealSec <= yMax) {
      idealLinePoints.push(`${scaleX(x)},${scaleY(idealSec)}`);
    }
  }

  // Generate Y-axis ticks
  const yTicks = [];
  const yTickCount = 5;
  for (let i = 0; i <= yTickCount; i++) {
    const value = (i / yTickCount) * yMax;
    yTicks.push({ value, y: scaleY(value), label: `${Math.round(value / 60)}m` });
  }

  // Generate X-axis ticks
  const xTicks = [];
  const xTickCount = 5;
  for (let i = 0; i <= xTickCount; i++) {
    const value = (i / xTickCount) * xMax;
    xTicks.push({ value, x: scaleX(value), label: `${Math.round(value)}m` });
  }

  // Render marker based on machine type
  const renderMarker = (machine: string, x: number, y: number, key: string) => {
    const color = COLORS[machine as keyof typeof COLORS] || '#888';
    const size = 6;

    if (machine === 'Standard') {
      return <circle key={key} cx={x} cy={y} r={size} fill={color} />;
    } else if (machine === 'Enhanced') {
      return <rect key={key} x={x - size} y={y - size} width={size * 2} height={size * 2} fill={color} />;
    } else {
      // Triangle for Turbo
      const points = `${x},${y - size} ${x - size},${y + size} ${x + size},${y + size}`;
      return <polygon key={key} points={points} fill={color} />;
    }
  };

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 p-6 mb-8">
      <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
        Actual vs Target Build Time
      </h2>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
        Points below the diagonal line indicate faster builds than target
      </p>

      <div className="overflow-x-auto">
        <svg width={width} height={height} className="mx-auto">
          {/* Grid lines */}
          {yTicks.map((tick, i) => (
            <line
              key={`grid-y-${i}`}
              x1={padding.left}
              y1={tick.y}
              x2={width - padding.right}
              y2={tick.y}
              stroke="currentColor"
              strokeOpacity={0.1}
              className="text-zinc-400 dark:text-zinc-600"
            />
          ))}
          {xTicks.map((tick, i) => (
            <line
              key={`grid-x-${i}`}
              x1={tick.x}
              y1={padding.top}
              x2={tick.x}
              y2={height - padding.bottom}
              stroke="currentColor"
              strokeOpacity={0.1}
              className="text-zinc-400 dark:text-zinc-600"
            />
          ))}

          {/* Ideal line (y = x) */}
          <polyline
            points={idealLinePoints.join(' ')}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeDasharray="4,4"
            strokeOpacity={0.3}
            className="text-zinc-500 dark:text-zinc-400"
          />

          {/* Lines connecting points for each machine type */}
          {Object.entries(byMachine).map(([machine, points]) => {
            if (points.length < 2) return null;
            const linePoints = points
              .map(p => `${scaleX(p.targetMin)},${scaleY(p.actualSec)}`)
              .join(' ');
            return (
              <polyline
                key={`line-${machine}`}
                points={linePoints}
                fill="none"
                stroke={COLORS[machine as keyof typeof COLORS]}
                strokeWidth={2}
                strokeOpacity={0.6}
              />
            );
          })}

          {/* Data points */}
          {data.map((d, i) => renderMarker(d.machine, scaleX(d.targetMin), scaleY(d.actualSec), `point-${i}`))}

          {/* Y-axis */}
          <line
            x1={padding.left}
            y1={padding.top}
            x2={padding.left}
            y2={height - padding.bottom}
            stroke="currentColor"
            className="text-zinc-300 dark:text-zinc-600"
          />
          {yTicks.map((tick, i) => (
            <g key={`y-tick-${i}`}>
              <line
                x1={padding.left - 5}
                y1={tick.y}
                x2={padding.left}
                y2={tick.y}
                stroke="currentColor"
                className="text-zinc-400 dark:text-zinc-500"
              />
              <text
                x={padding.left - 10}
                y={tick.y}
                textAnchor="end"
                dominantBaseline="middle"
                className="text-xs fill-zinc-500 dark:fill-zinc-400"
              >
                {tick.label}
              </text>
            </g>
          ))}
          <text
            x={padding.left - 50}
            y={height / 2}
            textAnchor="middle"
            transform={`rotate(-90, ${padding.left - 50}, ${height / 2})`}
            className="text-sm fill-zinc-600 dark:fill-zinc-400"
          >
            Actual Build Time
          </text>

          {/* X-axis */}
          <line
            x1={padding.left}
            y1={height - padding.bottom}
            x2={width - padding.right}
            y2={height - padding.bottom}
            stroke="currentColor"
            className="text-zinc-300 dark:text-zinc-600"
          />
          {xTicks.map((tick, i) => (
            <g key={`x-tick-${i}`}>
              <line
                x1={tick.x}
                y1={height - padding.bottom}
                x2={tick.x}
                y2={height - padding.bottom + 5}
                stroke="currentColor"
                className="text-zinc-400 dark:text-zinc-500"
              />
              <text
                x={tick.x}
                y={height - padding.bottom + 20}
                textAnchor="middle"
                className="text-xs fill-zinc-500 dark:fill-zinc-400"
              >
                {tick.label}
              </text>
            </g>
          ))}
          <text
            x={width / 2}
            y={height - 10}
            textAnchor="middle"
            className="text-sm fill-zinc-600 dark:fill-zinc-400"
          >
            Target Build Time
          </text>
        </svg>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <svg width="16" height="16">
            <circle cx="8" cy="8" r="6" fill={COLORS.Standard} />
          </svg>
          <span className="text-sm text-zinc-600 dark:text-zinc-400">Standard</span>
        </div>
        <div className="flex items-center gap-2">
          <svg width="16" height="16">
            <rect x="2" y="2" width="12" height="12" fill={COLORS.Enhanced} />
          </svg>
          <span className="text-sm text-zinc-600 dark:text-zinc-400">Enhanced</span>
        </div>
        <div className="flex items-center gap-2">
          <svg width="16" height="16">
            <polygon points="8,2 2,14 14,14" fill={COLORS.Turbo} />
          </svg>
          <span className="text-sm text-zinc-600 dark:text-zinc-400">Turbo</span>
        </div>
        <div className="flex items-center gap-2">
          <svg width="24" height="16">
            <line x1="0" y1="8" x2="24" y2="8" stroke="currentColor" strokeWidth="2" strokeDasharray="4,4" className="text-zinc-400" />
          </svg>
          <span className="text-sm text-zinc-600 dark:text-zinc-400">Ideal (actual = target)</span>
        </div>
      </div>
    </div>
  );
}
