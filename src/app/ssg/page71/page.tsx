// SSG Page 71 - v15 (build-time CPU work)
import '@/generated/styles/p71.css';
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
    title: `Page 71 | Build Bench`,
    description: `SSG page 71 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage71() {
  return (
    <div className="p71-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 71</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent97 id="71-0" value={7100} label="S" />
        <SharedComponent98 id="71-1" value={7101} label="S" />
        <SharedComponent99 id="71-2" value={7102} label="S" />
      </div>
    </div>
  );
}
