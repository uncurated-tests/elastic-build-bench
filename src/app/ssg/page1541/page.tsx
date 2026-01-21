// SSG Page 1541 - v15 (build-time CPU work)
import '@/generated/styles/p1541.css';
import SharedComponent87 from '@/generated/components/SharedComponent87';
import SharedComponent88 from '@/generated/components/SharedComponent88';
import SharedComponent89 from '@/generated/components/SharedComponent89';

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
    title: `Page 1541 | Build Bench`,
    description: `SSG page 1541 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage1541() {
  return (
    <div className="p1541-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1541</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent87 id="1541-0" value={154100} label="S" />
        <SharedComponent88 id="1541-1" value={154101} label="S" />
        <SharedComponent89 id="1541-2" value={154102} label="S" />
      </div>
    </div>
  );
}
