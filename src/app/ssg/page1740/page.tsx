// SSG Page 1740 - v15 (build-time CPU work)
import '@/generated/styles/p1740.css';
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
    title: `Page 1740 | Build Bench`,
    description: `SSG page 1740 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage1740() {
  return (
    <div className="p1740-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1740</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent80 id="1740-0" value={174000} label="S" />
        <SharedComponent81 id="1740-1" value={174001} label="S" />
        <SharedComponent82 id="1740-2" value={174002} label="S" />
      </div>
    </div>
  );
}
