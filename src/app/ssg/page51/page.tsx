// SSG Page 51 - v15 (build-time CPU work)
import '@/generated/styles/p51.css';
import SharedComponent57 from '@/generated/components/SharedComponent57';
import SharedComponent58 from '@/generated/components/SharedComponent58';
import SharedComponent59 from '@/generated/components/SharedComponent59';

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
    title: `Page 51 | Build Bench`,
    description: `SSG page 51 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage51() {
  return (
    <div className="p51-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 51</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent57 id="51-0" value={5100} label="S" />
        <SharedComponent58 id="51-1" value={5101} label="S" />
        <SharedComponent59 id="51-2" value={5102} label="S" />
      </div>
    </div>
  );
}
