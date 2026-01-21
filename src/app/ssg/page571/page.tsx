// SSG Page 571 - v15 (build-time CPU work)
import '@/generated/styles/p571.css';
import SharedComponent97 from '@/generated/components/SharedComponent97';
import SharedComponent98 from '@/generated/components/SharedComponent98';
import SharedComponent99 from '@/generated/components/SharedComponent99';

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
    title: `Page 571 | Build Bench`,
    description: `SSG page 571 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage571() {
  return (
    <div className="p571-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 571</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent97 id="571-0" value={57100} label="S" />
        <SharedComponent98 id="571-1" value={57101} label="S" />
        <SharedComponent99 id="571-2" value={57102} label="S" />
      </div>
    </div>
  );
}
