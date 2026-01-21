// SSG Page 1991 - v15 (build-time CPU work)
import '@/generated/styles/p1991.css';
import SharedComponent37 from '@/generated/components/SharedComponent37';
import SharedComponent38 from '@/generated/components/SharedComponent38';
import SharedComponent39 from '@/generated/components/SharedComponent39';

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
    title: `Page 1991 | Build Bench`,
    description: `SSG page 1991 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage1991() {
  return (
    <div className="p1991-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1991</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent37 id="1991-0" value={199100} label="S" />
        <SharedComponent38 id="1991-1" value={199101} label="S" />
        <SharedComponent39 id="1991-2" value={199102} label="S" />
      </div>
    </div>
  );
}
