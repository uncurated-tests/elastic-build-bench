// SSG Page 690 - v15 (build-time CPU work)
import '@/generated/styles/p690.css';
import SharedComponent30 from '@/generated/components/SharedComponent30';
import SharedComponent31 from '@/generated/components/SharedComponent31';
import SharedComponent32 from '@/generated/components/SharedComponent32';

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
    title: `Page 690 | Build Bench`,
    description: `SSG page 690 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage690() {
  return (
    <div className="p690-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 690</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent30 id="690-0" value={69000} label="S" />
        <SharedComponent31 id="690-1" value={69001} label="S" />
        <SharedComponent32 id="690-2" value={69002} label="S" />
      </div>
    </div>
  );
}
