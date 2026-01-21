// SSG Page 783 - v15 (build-time CPU work)
import '@/generated/styles/p783.css';
import SharedComponent81 from '@/generated/components/SharedComponent81';
import SharedComponent82 from '@/generated/components/SharedComponent82';
import SharedComponent83 from '@/generated/components/SharedComponent83';

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
    title: `Page 783 | Build Bench`,
    description: `SSG page 783 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage783() {
  return (
    <div className="p783-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 783</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent81 id="783-0" value={78300} label="S" />
        <SharedComponent82 id="783-1" value={78301} label="S" />
        <SharedComponent83 id="783-2" value={78302} label="S" />
      </div>
    </div>
  );
}
