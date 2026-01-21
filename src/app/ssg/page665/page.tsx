// SSG Page 665 - v15 (build-time CPU work)
import '@/generated/styles/p665.css';
import SharedComponent55 from '@/generated/components/SharedComponent55';
import SharedComponent56 from '@/generated/components/SharedComponent56';
import SharedComponent57 from '@/generated/components/SharedComponent57';

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
    title: `Page 665 | Build Bench`,
    description: `SSG page 665 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage665() {
  return (
    <div className="p665-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 665</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent55 id="665-0" value={66500} label="S" />
        <SharedComponent56 id="665-1" value={66501} label="S" />
        <SharedComponent57 id="665-2" value={66502} label="S" />
      </div>
    </div>
  );
}
