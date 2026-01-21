// SSG Page 1622 - v15 (build-time CPU work)
import '@/generated/styles/p1622.css';
import SharedComponent54 from '@/generated/components/SharedComponent54';
import SharedComponent55 from '@/generated/components/SharedComponent55';
import SharedComponent56 from '@/generated/components/SharedComponent56';

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
    title: `Page 1622 | Build Bench`,
    description: `SSG page 1622 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage1622() {
  return (
    <div className="p1622-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1622</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent54 id="1622-0" value={162200} label="S" />
        <SharedComponent55 id="1622-1" value={162201} label="S" />
        <SharedComponent56 id="1622-2" value={162202} label="S" />
      </div>
    </div>
  );
}
