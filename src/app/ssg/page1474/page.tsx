// SSG Page 1474 - v15 (build-time CPU work)
import '@/generated/styles/p1474.css';
import SharedComponent18 from '@/generated/components/SharedComponent18';
import SharedComponent19 from '@/generated/components/SharedComponent19';
import SharedComponent20 from '@/generated/components/SharedComponent20';

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
    title: `Page 1474 | Build Bench`,
    description: `SSG page 1474 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage1474() {
  return (
    <div className="p1474-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1474</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent18 id="1474-0" value={147400} label="S" />
        <SharedComponent19 id="1474-1" value={147401} label="S" />
        <SharedComponent20 id="1474-2" value={147402} label="S" />
      </div>
    </div>
  );
}
