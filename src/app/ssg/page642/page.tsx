// SSG Page 642 - v15 (build-time CPU work)
import '@/generated/styles/p642.css';
import SharedComponent94 from '@/generated/components/SharedComponent94';
import SharedComponent95 from '@/generated/components/SharedComponent95';
import SharedComponent96 from '@/generated/components/SharedComponent96';

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
    title: `Page 642 | Build Bench`,
    description: `SSG page 642 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage642() {
  return (
    <div className="p642-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 642</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent94 id="642-0" value={64200} label="S" />
        <SharedComponent95 id="642-1" value={64201} label="S" />
        <SharedComponent96 id="642-2" value={64202} label="S" />
      </div>
    </div>
  );
}
