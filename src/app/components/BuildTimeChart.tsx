'use client';

import { useState } from 'react';

interface DataPoint {
  targetMin: number;
  actualSec: number;
  machine: 'Standard' | 'Enhanced' | 'Turbo';
  label?: string;
  compilationSec?: number;
}

interface NormalizedDataPoint {
  targetMin: number;
  percentage: number;
  machine: 'Standard' | 'Enhanced' | 'Turbo';
  label?: string;
  actualSec: number;
  compilationSec: number;
}

interface BuildTimeChartProps {
  data: DataPoint[];
}

const COLORS = {
  Standard: '#3b82f6',  // blue
  Enhanced: '#22c55e',  // green
  Turbo: '#eab308',     // yellow
};

// Format seconds to human readable time
const formatTime = (seconds: number): string => {
  if (seconds <= 0 || Number.isNaN(seconds)) return '-';
  if (seconds < 60) return `${seconds.toFixed(1)}s`;
  const mins = Math.floor(seconds / 60);
  const secs = Math.round(seconds % 60);
  return `${mins}m ${secs}s`;
};

export default function BuildTimeChart({ data }: BuildTimeChartProps) {
  const [hoveredLabel, setHoveredLabel] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null);

  if (data.length === 0) return null;

  // Group data by label (compilation target) to find Standard baseline
  const byLabel: Record<string, DataPoint[]> = {};
  for (const d of data) {
    const key = d.label || String(d.targetMin);
    if (!byLabel[key]) byLabel[key] = [];
    byLabel[key].push(d);
  }

  // Normalize: Standard = 100%, others as percentage of Standard
  const normalizedData: NormalizedDataPoint[] = [];
  for (const [label, points] of Object.entries(byLabel)) {
    const standardPoint = points.find(p => p.machine === 'Standard');
    if (!standardPoint) continue;

    for (const p of points) {
      normalizedData.push({
        targetMin: p.targetMin,
        percentage: (p.actualSec / standardPoint.actualSec) * 100,
        machine: p.machine,
        label: p.label,
        actualSec: p.actualSec,
        compilationSec: p.compilationSec || 0,
      });
    }
  }

  if (normalizedData.length === 0) return null;

  // Chart dimensions
  const width = 700;
  const height = 400;
  const padding = { top: 40, right: 40, bottom: 60, left: 70 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  // Calculate ranges
  const maxTargetMin = Math.max(...normalizedData.map(d => d.targetMin));
  const xMax = Math.ceil(maxTargetMin / 5) * 5 || 25;
  const yMax = 120; // 120% max to show Standard at 100%

  // Scale functions
  const scaleX = (targetMin: number) => padding.left + (targetMin / xMax) * chartWidth;
  const scaleY = (percentage: number) => padding.top + chartHeight - (percentage / yMax) * chartHeight;

  // Group normalized data by machine type and sort by targetMin
  const byMachine: Record<string, NormalizedDataPoint[]> = {};
  for (const d of normalizedData) {
    if (!byMachine[d.machine]) byMachine[d.machine] = [];
    byMachine[d.machine].push(d);
  }
  for (const machine of Object.keys(byMachine)) {
    byMachine[machine].sort((a, b) => a.targetMin - b.targetMin);
  }

  // Generate 100% baseline line
  const baselineY = scaleY(100);

  // Generate Y-axis ticks
  const yTicks = [0, 25, 50, 75, 100].map(value => ({
    value,
    y: scaleY(value),
    label: `${value}%`,
  }));

  // Generate X-axis ticks
  const xTicks = [];
  const xTickCount = 5;
  for (let i = 0; i <= xTickCount; i++) {
    const value = (i / xTickCount) * xMax;
    xTicks.push({ value, x: scaleX(value), label: `${Math.round(value)}m` });
  }

  // Generate intermediate X-axis ticks (between main ticks)
  const xTicksIntermediate = [];
  for (let i = 0; i < xTickCount; i++) {
    const value = ((i + 0.5) / xTickCount) * xMax;
    xTicksIntermediate.push({ value, x: scaleX(value) });
  }

  // Get unique labels sorted by targetMin
  const uniqueLabels = [...new Set(normalizedData.map(d => d.label))].filter(Boolean) as string[];

  // Get tooltip data for hovered label
  const getTooltipData = (label: string) => {
    const points = normalizedData.filter(d => d.label === label);
    const standard = points.find(p => p.machine === 'Standard');
    const enhanced = points.find(p => p.machine === 'Enhanced');
    const turbo = points.find(p => p.machine === 'Turbo');
    return { standard, enhanced, turbo, label };
  };

  // Render marker based on machine type
  const renderMarker = (machine: string, x: number, y: number, key: string, label?: string) => {
    const color = COLORS[machine as keyof typeof COLORS] || '#888';
    const size = 6;
    const isHovered = hoveredLabel === label;
    const actualSize = isHovered ? size * 1.5 : size;

    const handleMouseEnter = (e: React.MouseEvent) => {
      if (label) {
        setHoveredLabel(label);
        setTooltipPos({ x: e.clientX, y: e.clientY });
      }
    };

    const handleMouseLeave = () => {
      setHoveredLabel(null);
      setTooltipPos(null);
    };

    if (machine === 'Standard') {
      return (
        <circle
          key={key}
          cx={x}
          cy={y}
          r={actualSize}
          fill={color}
          className="cursor-pointer transition-all duration-150"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      );
    } else if (machine === 'Enhanced') {
      return (
        <rect
          key={key}
          x={x - actualSize}
          y={y - actualSize}
          width={actualSize * 2}
          height={actualSize * 2}
          fill={color}
          className="cursor-pointer transition-all duration-150"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      );
    } else {
      // Triangle for Turbo
      const points = `${x},${y - actualSize} ${x - actualSize},${y + actualSize} ${x + actualSize},${y + actualSize}`;
      return (
        <polygon
          key={key}
          points={points}
          fill={color}
          className="cursor-pointer transition-all duration-150"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      );
    }
  };

  const tooltipData = hoveredLabel ? getTooltipData(hoveredLabel) : null;

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 p-6 mb-8 relative">
      <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
        Trigger2Ready Time (Normalized to Standard = 100%)
      </h2>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
        Lower is faster. Enhanced and Turbo shown as % of Standard time for each target.
      </p>

      <div className="overflow-x-auto relative">
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
          {xTicksIntermediate.map((tick, i) => (
            <line
              key={`grid-x-mid-${i}`}
              x1={tick.x}
              y1={padding.top}
              x2={tick.x}
              y2={height - padding.bottom}
              stroke="currentColor"
              strokeOpacity={0.05}
              strokeDasharray="2,4"
              className="text-zinc-400 dark:text-zinc-600"
            />
          ))}

          {/* 100% baseline (Standard) */}
          <line
            x1={padding.left}
            y1={baselineY}
            x2={width - padding.right}
            y2={baselineY}
            stroke={COLORS.Standard}
            strokeWidth={2}
            strokeDasharray="4,4"
            strokeOpacity={0.5}
          />

          {/* Lines connecting points for each machine type */}
          {Object.entries(byMachine).map(([machine, points]) => {
            if (points.length < 2) return null;
            const linePoints = points
              .map(p => `${scaleX(p.targetMin)},${scaleY(p.percentage)}`)
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

          {/* Vertical hover line */}
          {hoveredLabel && tooltipData?.standard && (
            <line
              x1={scaleX(tooltipData.standard.targetMin)}
              y1={padding.top}
              x2={scaleX(tooltipData.standard.targetMin)}
              y2={height - padding.bottom}
              stroke="currentColor"
              strokeWidth={1}
              strokeOpacity={0.3}
              strokeDasharray="4,4"
              className="text-zinc-500"
            />
          )}

          {/* Data points */}
          {normalizedData.map((d, i) => renderMarker(d.machine, scaleX(d.targetMin), scaleY(d.percentage), `point-${i}`, d.label))}

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
            % of Standard Time
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
            Target Trigger2Ready (Compilation × FieldRatio)
          </text>
        </svg>

        {/* Tooltip */}
        {hoveredLabel && tooltipData && (
          <div
            className="absolute z-10 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-lg p-3 pointer-events-none"
            style={{
              left: tooltipData.standard ? scaleX(tooltipData.standard.targetMin) + 20 : 0,
              top: padding.top,
            }}
          >
            <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-2 border-b border-zinc-200 dark:border-zinc-700 pb-1">
              Actual times
            </div>
            <div className="space-y-1 text-xs">
              {tooltipData.standard && (
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS.Standard }}></span>
                  <span className="text-zinc-600 dark:text-zinc-400">Standard:</span>
                  <span className="text-zinc-500">T2R {formatTime(tooltipData.standard.actualSec)}</span>
                  <span className="text-zinc-500">Compile {formatTime(tooltipData.standard.compilationSec)}</span>
                </div>
              )}
              {tooltipData.enhanced && (
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3" style={{ backgroundColor: COLORS.Enhanced }}></span>
                  <span className="text-zinc-600 dark:text-zinc-400">Enhanced:</span>
                  <span className="text-zinc-500">T2R {formatTime(tooltipData.enhanced.actualSec)}</span>
                  <span className="text-zinc-500">Compile {formatTime(tooltipData.enhanced.compilationSec)}</span>
                </div>
              )}
              {tooltipData.turbo && (
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3" style={{ backgroundColor: COLORS.Turbo, clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></span>
                  <span className="text-zinc-600 dark:text-zinc-400">Turbo:</span>
                  <span className="text-zinc-500">T2R {formatTime(tooltipData.turbo.actualSec)}</span>
                  <span className="text-zinc-500">Compile {formatTime(tooltipData.turbo.compilationSec)}</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <svg width="16" height="16">
            <circle cx="8" cy="8" r="6" fill={COLORS.Standard} />
          </svg>
          <span className="text-sm text-zinc-600 dark:text-zinc-400">Standard (100%)</span>
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
      </div>
    </div>
  );
}
