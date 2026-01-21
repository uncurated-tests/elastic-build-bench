// SSG Page 685 - v15 (build-time CPU work)
import '@/generated/styles/p685.css';
import SharedComponent95 from '@/generated/components/SharedComponent95';
import SharedComponent96 from '@/generated/components/SharedComponent96';
import SharedComponent97 from '@/generated/components/SharedComponent97';

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
    title: `Page 685 | Build Bench`,
    description: `SSG page 685 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage685() {
  return (
    <div className="p685-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 685</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent95 id="685-0" value={68500} label="S" />
        <SharedComponent96 id="685-1" value={68501} label="S" />
        <SharedComponent97 id="685-2" value={68502} label="S" />
      </div>
    </div>
  );
}
