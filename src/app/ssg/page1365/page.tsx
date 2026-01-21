// SSG Page 1365 - v15 (build-time CPU work)
import '@/generated/styles/p1365.css';
import SharedComponent55 from '@/generated/components/SharedComponent55';
import SharedComponent56 from '@/generated/components/SharedComponent56';
import SharedComponent57 from '@/generated/components/SharedComponent57';

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
    title: `Page 1365 | Build Bench`,
    description: `SSG page 1365 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage1365() {
  return (
    <div className="p1365-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1365</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent55 id="1365-0" value={136500} label="S" />
        <SharedComponent56 id="1365-1" value={136501} label="S" />
        <SharedComponent57 id="1365-2" value={136502} label="S" />
      </div>
    </div>
  );
}
