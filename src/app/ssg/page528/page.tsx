// SSG Page 528 - v15 (build-time CPU work)
import '@/generated/styles/p528.css';
import SharedComponent96 from '@/generated/components/SharedComponent96';
import SharedComponent97 from '@/generated/components/SharedComponent97';
import SharedComponent98 from '@/generated/components/SharedComponent98';

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
    title: `Page 528 | Build Bench`,
    description: `SSG page 528 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage528() {
  return (
    <div className="p528-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 528</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent96 id="528-0" value={52800} label="S" />
        <SharedComponent97 id="528-1" value={52801} label="S" />
        <SharedComponent98 id="528-2" value={52802} label="S" />
      </div>
    </div>
  );
}
