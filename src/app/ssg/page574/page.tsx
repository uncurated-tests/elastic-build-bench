// SSG Page 574 - v15 (build-time CPU work)
import '@/generated/styles/p574.css';
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
    title: `Page 574 | Build Bench`,
    description: `SSG page 574 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage574() {
  return (
    <div className="p574-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 574</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent18 id="574-0" value={57400} label="S" />
        <SharedComponent19 id="574-1" value={57401} label="S" />
        <SharedComponent20 id="574-2" value={57402} label="S" />
      </div>
    </div>
  );
}
