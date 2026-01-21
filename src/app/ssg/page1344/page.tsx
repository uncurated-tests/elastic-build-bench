// SSG Page 1344 - v15 (build-time CPU work)
import '@/generated/styles/p1344.css';
import SharedComponent8 from '@/generated/components/SharedComponent8';
import SharedComponent9 from '@/generated/components/SharedComponent9';
import SharedComponent10 from '@/generated/components/SharedComponent10';

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
    title: `Page 1344 | Build Bench`,
    description: `SSG page 1344 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage1344() {
  return (
    <div className="p1344-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1344</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent8 id="1344-0" value={134400} label="S" />
        <SharedComponent9 id="1344-1" value={134401} label="S" />
        <SharedComponent10 id="1344-2" value={134402} label="S" />
      </div>
    </div>
  );
}
