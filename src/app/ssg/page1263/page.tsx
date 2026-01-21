// SSG Page 1263 - v15 (build-time CPU work)
import '@/generated/styles/p1263.css';
import SharedComponent41 from '@/generated/components/SharedComponent41';
import SharedComponent42 from '@/generated/components/SharedComponent42';
import SharedComponent43 from '@/generated/components/SharedComponent43';

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
    title: `Page 1263 | Build Bench`,
    description: `SSG page 1263 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage1263() {
  return (
    <div className="p1263-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1263</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent41 id="1263-0" value={126300} label="S" />
        <SharedComponent42 id="1263-1" value={126301} label="S" />
        <SharedComponent43 id="1263-2" value={126302} label="S" />
      </div>
    </div>
  );
}
