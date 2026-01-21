// SSG Page 1296 - v15 (build-time CPU work)
import '@/generated/styles/p1296.css';
import SharedComponent72 from '@/generated/components/SharedComponent72';
import SharedComponent73 from '@/generated/components/SharedComponent73';
import SharedComponent74 from '@/generated/components/SharedComponent74';

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
    title: `Page 1296 | Build Bench`,
    description: `SSG page 1296 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage1296() {
  return (
    <div className="p1296-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1296</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent72 id="1296-0" value={129600} label="S" />
        <SharedComponent73 id="1296-1" value={129601} label="S" />
        <SharedComponent74 id="1296-2" value={129602} label="S" />
      </div>
    </div>
  );
}
