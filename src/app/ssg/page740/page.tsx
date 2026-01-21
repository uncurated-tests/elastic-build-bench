// SSG Page 740 - v15 (build-time CPU work)
import '@/generated/styles/p740.css';
import SharedComponent80 from '@/generated/components/SharedComponent80';
import SharedComponent81 from '@/generated/components/SharedComponent81';
import SharedComponent82 from '@/generated/components/SharedComponent82';

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
    title: `Page 740 | Build Bench`,
    description: `SSG page 740 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage740() {
  return (
    <div className="p740-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 740</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent80 id="740-0" value={74000} label="S" />
        <SharedComponent81 id="740-1" value={74001} label="S" />
        <SharedComponent82 id="740-2" value={74002} label="S" />
      </div>
    </div>
  );
}
