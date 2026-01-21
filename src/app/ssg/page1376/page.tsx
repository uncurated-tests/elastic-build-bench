// SSG Page 1376 - v15 (build-time CPU work)
import '@/generated/styles/p1376.css';
import SharedComponent32 from '@/generated/components/SharedComponent32';
import SharedComponent33 from '@/generated/components/SharedComponent33';
import SharedComponent34 from '@/generated/components/SharedComponent34';

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
    title: `Page 1376 | Build Bench`,
    description: `SSG page 1376 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage1376() {
  return (
    <div className="p1376-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1376</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent32 id="1376-0" value={137600} label="S" />
        <SharedComponent33 id="1376-1" value={137601} label="S" />
        <SharedComponent34 id="1376-2" value={137602} label="S" />
      </div>
    </div>
  );
}
