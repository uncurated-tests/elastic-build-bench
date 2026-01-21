// SSG Page 1844 - v15 (build-time CPU work)
import '@/generated/styles/p1844.css';
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
    title: `Page 1844 | Build Bench`,
    description: `SSG page 1844 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage1844() {
  return (
    <div className="p1844-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1844</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent8 id="1844-0" value={184400} label="S" />
        <SharedComponent9 id="1844-1" value={184401} label="S" />
        <SharedComponent10 id="1844-2" value={184402} label="S" />
      </div>
    </div>
  );
}
