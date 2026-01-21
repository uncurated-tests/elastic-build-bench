// SSG Page 59 - v15 (build-time CPU work)
import '@/generated/styles/p59.css';
import SharedComponent13 from '@/generated/components/SharedComponent13';
import SharedComponent14 from '@/generated/components/SharedComponent14';
import SharedComponent15 from '@/generated/components/SharedComponent15';

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
    title: `Page 59 | Build Bench`,
    description: `SSG page 59 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage59() {
  return (
    <div className="p59-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 59</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent13 id="59-0" value={5900} label="S" />
        <SharedComponent14 id="59-1" value={5901} label="S" />
        <SharedComponent15 id="59-2" value={5902} label="S" />
      </div>
    </div>
  );
}
