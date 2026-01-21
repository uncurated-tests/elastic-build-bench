// SSG Page 1089 - v15 (build-time CPU work)
import '@/generated/styles/p1089.css';
import SharedComponent23 from '@/generated/components/SharedComponent23';
import SharedComponent24 from '@/generated/components/SharedComponent24';
import SharedComponent25 from '@/generated/components/SharedComponent25';

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
    title: `Page 1089 | Build Bench`,
    description: `SSG page 1089 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage1089() {
  return (
    <div className="p1089-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1089</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent23 id="1089-0" value={108900} label="S" />
        <SharedComponent24 id="1089-1" value={108901} label="S" />
        <SharedComponent25 id="1089-2" value={108902} label="S" />
      </div>
    </div>
  );
}
