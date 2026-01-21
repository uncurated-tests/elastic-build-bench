// SSG Page 323 - v15 (build-time CPU work)
import '@/generated/styles/p323.css';
import SharedComponent61 from '@/generated/components/SharedComponent61';
import SharedComponent62 from '@/generated/components/SharedComponent62';
import SharedComponent63 from '@/generated/components/SharedComponent63';

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
    title: `Page 323 | Build Bench`,
    description: `SSG page 323 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage323() {
  return (
    <div className="p323-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 323</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent61 id="323-0" value={32300} label="S" />
        <SharedComponent62 id="323-1" value={32301} label="S" />
        <SharedComponent63 id="323-2" value={32302} label="S" />
      </div>
    </div>
  );
}
