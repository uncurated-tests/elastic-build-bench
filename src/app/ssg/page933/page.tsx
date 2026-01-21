// SSG Page 933 - v15 (build-time CPU work)
import '@/generated/styles/p933.css';
import SharedComponent31 from '@/generated/components/SharedComponent31';
import SharedComponent32 from '@/generated/components/SharedComponent32';
import SharedComponent33 from '@/generated/components/SharedComponent33';

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
    title: `Page 933 | Build Bench`,
    description: `SSG page 933 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage933() {
  return (
    <div className="p933-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 933</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent31 id="933-0" value={93300} label="S" />
        <SharedComponent32 id="933-1" value={93301} label="S" />
        <SharedComponent33 id="933-2" value={93302} label="S" />
      </div>
    </div>
  );
}
