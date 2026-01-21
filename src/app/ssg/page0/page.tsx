// SSG Page 0 - v15 (build-time CPU work)
import '@/generated/styles/p0.css';
import SharedComponent0 from '@/generated/components/SharedComponent0';
import SharedComponent1 from '@/generated/components/SharedComponent1';
import SharedComponent2 from '@/generated/components/SharedComponent2';

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
    title: `Page 0 | Build Bench`,
    description: `SSG page 0 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage0() {
  return (
    <div className="p0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 0</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent0 id="0-0" value={0} label="S" />
        <SharedComponent1 id="0-1" value={1} label="S" />
        <SharedComponent2 id="0-2" value={2} label="S" />
      </div>
    </div>
  );
}
