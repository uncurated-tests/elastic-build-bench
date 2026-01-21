// SSG Page 275 - v15 (build-time CPU work)
import '@/generated/styles/p275.css';
import SharedComponent25 from '@/generated/components/SharedComponent25';
import SharedComponent26 from '@/generated/components/SharedComponent26';
import SharedComponent27 from '@/generated/components/SharedComponent27';

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
    title: `Page 275 | Build Bench`,
    description: `SSG page 275 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage275() {
  return (
    <div className="p275-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 275</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent25 id="275-0" value={27500} label="S" />
        <SharedComponent26 id="275-1" value={27501} label="S" />
        <SharedComponent27 id="275-2" value={27502} label="S" />
      </div>
    </div>
  );
}
