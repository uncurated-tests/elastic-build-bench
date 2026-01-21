// SSG Page 346 - v15 (build-time CPU work)
import '@/generated/styles/p346.css';
import SharedComponent22 from '@/generated/components/SharedComponent22';
import SharedComponent23 from '@/generated/components/SharedComponent23';
import SharedComponent24 from '@/generated/components/SharedComponent24';

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
    title: `Page 346 | Build Bench`,
    description: `SSG page 346 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage346() {
  return (
    <div className="p346-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 346</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent22 id="346-0" value={34600} label="S" />
        <SharedComponent23 id="346-1" value={34601} label="S" />
        <SharedComponent24 id="346-2" value={34602} label="S" />
      </div>
    </div>
  );
}
