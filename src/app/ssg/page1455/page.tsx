// SSG Page 1455 - v15 (build-time CPU work)
import '@/generated/styles/p1455.css';
import SharedComponent85 from '@/generated/components/SharedComponent85';
import SharedComponent86 from '@/generated/components/SharedComponent86';
import SharedComponent87 from '@/generated/components/SharedComponent87';

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
    title: `Page 1455 | Build Bench`,
    description: `SSG page 1455 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage1455() {
  return (
    <div className="p1455-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1455</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent85 id="1455-0" value={145500} label="S" />
        <SharedComponent86 id="1455-1" value={145501} label="S" />
        <SharedComponent87 id="1455-2" value={145502} label="S" />
      </div>
    </div>
  );
}
