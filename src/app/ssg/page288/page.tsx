// SSG Page 288 - v15 (build-time CPU work)
import '@/generated/styles/p288.css';
import SharedComponent16 from '@/generated/components/SharedComponent16';
import SharedComponent17 from '@/generated/components/SharedComponent17';
import SharedComponent18 from '@/generated/components/SharedComponent18';

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
    title: `Page 288 | Build Bench`,
    description: `SSG page 288 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage288() {
  return (
    <div className="p288-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 288</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent16 id="288-0" value={28800} label="S" />
        <SharedComponent17 id="288-1" value={28801} label="S" />
        <SharedComponent18 id="288-2" value={28802} label="S" />
      </div>
    </div>
  );
}
