// SSG Page 714 - v15 (build-time CPU work)
import '@/generated/styles/p714.css';
import SharedComponent98 from '@/generated/components/SharedComponent98';
import SharedComponent99 from '@/generated/components/SharedComponent99';
import SharedComponent0 from '@/generated/components/SharedComponent0';

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
    title: `Page 714 | Build Bench`,
    description: `SSG page 714 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage714() {
  return (
    <div className="p714-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 714</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent98 id="714-0" value={71400} label="S" />
        <SharedComponent99 id="714-1" value={71401} label="S" />
        <SharedComponent0 id="714-2" value={71402} label="S" />
      </div>
    </div>
  );
}
