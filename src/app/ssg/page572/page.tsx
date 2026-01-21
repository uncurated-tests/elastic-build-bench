// SSG Page 572 - v15 (build-time CPU work)
import '@/generated/styles/p572.css';
import SharedComponent4 from '@/generated/components/SharedComponent4';
import SharedComponent5 from '@/generated/components/SharedComponent5';
import SharedComponent6 from '@/generated/components/SharedComponent6';

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
    title: `Page 572 | Build Bench`,
    description: `SSG page 572 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage572() {
  return (
    <div className="p572-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 572</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent4 id="572-0" value={57200} label="S" />
        <SharedComponent5 id="572-1" value={57201} label="S" />
        <SharedComponent6 id="572-2" value={57202} label="S" />
      </div>
    </div>
  );
}
