// SSG Page 777 - v15 (build-time CPU work)
import '@/generated/styles/p777.css';
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
    title: `Page 777 | Build Bench`,
    description: `SSG page 777 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage777() {
  return (
    <div className="p777-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 777</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent39 id="777-0" value={77700} label="S" />
        <SharedComponent40 id="777-1" value={77701} label="S" />
        <SharedComponent41 id="777-2" value={77702} label="S" />
      </div>
    </div>
  );
}
