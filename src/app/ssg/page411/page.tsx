// SSG Page 411 - v15 (build-time CPU work)
import '@/generated/styles/p411.css';
import SharedComponent77 from '@/generated/components/SharedComponent77';
import SharedComponent78 from '@/generated/components/SharedComponent78';
import SharedComponent79 from '@/generated/components/SharedComponent79';

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
    title: `Page 411 | Build Bench`,
    description: `SSG page 411 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage411() {
  return (
    <div className="p411-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 411</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent77 id="411-0" value={41100} label="S" />
        <SharedComponent78 id="411-1" value={41101} label="S" />
        <SharedComponent79 id="411-2" value={41102} label="S" />
      </div>
    </div>
  );
}
