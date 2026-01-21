// SSG Page 599 - v15 (build-time CPU work)
import '@/generated/styles/p599.css';
import SharedComponent93 from '@/generated/components/SharedComponent93';
import SharedComponent94 from '@/generated/components/SharedComponent94';
import SharedComponent95 from '@/generated/components/SharedComponent95';

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
    title: `Page 599 | Build Bench`,
    description: `SSG page 599 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage599() {
  return (
    <div className="p599-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 599</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent93 id="599-0" value={59900} label="S" />
        <SharedComponent94 id="599-1" value={59901} label="S" />
        <SharedComponent95 id="599-2" value={59902} label="S" />
      </div>
    </div>
  );
}
