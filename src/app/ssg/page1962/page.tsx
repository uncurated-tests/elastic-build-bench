// SSG Page 1962 - v15 (build-time CPU work)
import '@/generated/styles/p1962.css';
import SharedComponent34 from '@/generated/components/SharedComponent34';
import SharedComponent35 from '@/generated/components/SharedComponent35';
import SharedComponent36 from '@/generated/components/SharedComponent36';

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
    title: `Page 1962 | Build Bench`,
    description: `SSG page 1962 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage1962() {
  return (
    <div className="p1962-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1962</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent34 id="1962-0" value={196200} label="S" />
        <SharedComponent35 id="1962-1" value={196201} label="S" />
        <SharedComponent36 id="1962-2" value={196202} label="S" />
      </div>
    </div>
  );
}
