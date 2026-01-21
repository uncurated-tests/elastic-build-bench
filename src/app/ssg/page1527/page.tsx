// SSG Page 1527 - v15 (build-time CPU work)
import '@/generated/styles/p1527.css';
import SharedComponent89 from '@/generated/components/SharedComponent89';
import SharedComponent90 from '@/generated/components/SharedComponent90';
import SharedComponent91 from '@/generated/components/SharedComponent91';

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
    title: `Page 1527 | Build Bench`,
    description: `SSG page 1527 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage1527() {
  return (
    <div className="p1527-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1527</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent89 id="1527-0" value={152700} label="S" />
        <SharedComponent90 id="1527-1" value={152701} label="S" />
        <SharedComponent91 id="1527-2" value={152702} label="S" />
      </div>
    </div>
  );
}
