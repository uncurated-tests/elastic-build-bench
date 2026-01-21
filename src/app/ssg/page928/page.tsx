// SSG Page 928 - v15 (build-time CPU work)
import '@/generated/styles/p928.css';
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
    title: `Page 928 | Build Bench`,
    description: `SSG page 928 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage928() {
  return (
    <div className="p928-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 928</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent96 id="928-0" value={92800} label="S" />
        <SharedComponent97 id="928-1" value={92801} label="S" />
        <SharedComponent98 id="928-2" value={92802} label="S" />
      </div>
    </div>
  );
}
