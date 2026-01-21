// SSG Page 593 - v15 (build-time CPU work)
import '@/generated/styles/p593.css';
import SharedComponent51 from '@/generated/components/SharedComponent51';
import SharedComponent52 from '@/generated/components/SharedComponent52';
import SharedComponent53 from '@/generated/components/SharedComponent53';

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
    title: `Page 593 | Build Bench`,
    description: `SSG page 593 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage593() {
  return (
    <div className="p593-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 593</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent51 id="593-0" value={59300} label="S" />
        <SharedComponent52 id="593-1" value={59301} label="S" />
        <SharedComponent53 id="593-2" value={59302} label="S" />
      </div>
    </div>
  );
}
