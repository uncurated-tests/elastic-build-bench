// SSG Page 1361 - v15 (build-time CPU work)
import '@/generated/styles/p1361.css';
import SharedComponent27 from '@/generated/components/SharedComponent27';
import SharedComponent28 from '@/generated/components/SharedComponent28';
import SharedComponent29 from '@/generated/components/SharedComponent29';

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
    title: `Page 1361 | Build Bench`,
    description: `SSG page 1361 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage1361() {
  return (
    <div className="p1361-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1361</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent27 id="1361-0" value={136100} label="S" />
        <SharedComponent28 id="1361-1" value={136101} label="S" />
        <SharedComponent29 id="1361-2" value={136102} label="S" />
      </div>
    </div>
  );
}
