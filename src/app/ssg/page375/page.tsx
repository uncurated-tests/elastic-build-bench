// SSG Page 375 - v15 (build-time CPU work)
import '@/generated/styles/p375.css';
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
    title: `Page 375 | Build Bench`,
    description: `SSG page 375 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage375() {
  return (
    <div className="p375-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 375</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent25 id="375-0" value={37500} label="S" />
        <SharedComponent26 id="375-1" value={37501} label="S" />
        <SharedComponent27 id="375-2" value={37502} label="S" />
      </div>
    </div>
  );
}
