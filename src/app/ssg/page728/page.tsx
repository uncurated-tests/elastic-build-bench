// SSG Page 728 - v15 (build-time CPU work)
import '@/generated/styles/p728.css';
import SharedComponent96 from '@/generated/components/SharedComponent96';
import SharedComponent97 from '@/generated/components/SharedComponent97';
import SharedComponent98 from '@/generated/components/SharedComponent98';

// Build-time CPU work - runs synchronously during static generation
// This adds real CPU time to the build without hanging
function buildTimeWork(iterations: number): number {
  let result = 0;
  for (let i = 0; i < iterations; i++) {
    // Mix of operations to prevent optimization
    result += Math.sin(i * 0.001) * Math.cos(i * 0.002);
    result += Math.sqrt(Math.abs(result + i)) * 0.0001;
    result = result % 1000000; // Prevent overflow
  }
  return result;
}

// generateMetadata runs at build time for SSG pages
export async function generateMetadata() {
  const workResult = buildTimeWork(187500);
  
  return {
    title: `Page 728 | Build Bench`,
    description: `SSG page 728 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage728() {
  return (
    <div className="p728-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 728</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent96 id="728-0" value={72800} label="S" />
        <SharedComponent97 id="728-1" value={72801} label="S" />
        <SharedComponent98 id="728-2" value={72802} label="S" />
      </div>
    </div>
  );
}
