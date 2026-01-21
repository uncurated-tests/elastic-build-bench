// SSG Page 106 - v15 (build-time CPU work)
import '@/generated/styles/p106.css';
import SharedComponent42 from '@/generated/components/SharedComponent42';
import SharedComponent43 from '@/generated/components/SharedComponent43';
import SharedComponent44 from '@/generated/components/SharedComponent44';

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
    title: `Page 106 | Build Bench`,
    description: `SSG page 106 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage106() {
  return (
    <div className="p106-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 106</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent42 id="106-0" value={10600} label="S" />
        <SharedComponent43 id="106-1" value={10601} label="S" />
        <SharedComponent44 id="106-2" value={10602} label="S" />
      </div>
    </div>
  );
}
