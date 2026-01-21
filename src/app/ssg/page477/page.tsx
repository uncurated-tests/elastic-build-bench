// SSG Page 477 - v15 (build-time CPU work)
import '@/generated/styles/p477.css';
import SharedComponent39 from '@/generated/components/SharedComponent39';
import SharedComponent40 from '@/generated/components/SharedComponent40';
import SharedComponent41 from '@/generated/components/SharedComponent41';

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
    title: `Page 477 | Build Bench`,
    description: `SSG page 477 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage477() {
  return (
    <div className="p477-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 477</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent39 id="477-0" value={47700} label="S" />
        <SharedComponent40 id="477-1" value={47701} label="S" />
        <SharedComponent41 id="477-2" value={47702} label="S" />
      </div>
    </div>
  );
}
