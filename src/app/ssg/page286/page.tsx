// SSG Page 286 - v15 (build-time CPU work)
import '@/generated/styles/p286.css';
import SharedComponent2 from '@/generated/components/SharedComponent2';
import SharedComponent3 from '@/generated/components/SharedComponent3';
import SharedComponent4 from '@/generated/components/SharedComponent4';

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
    title: `Page 286 | Build Bench`,
    description: `SSG page 286 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage286() {
  return (
    <div className="p286-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 286</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent2 id="286-0" value={28600} label="S" />
        <SharedComponent3 id="286-1" value={28601} label="S" />
        <SharedComponent4 id="286-2" value={28602} label="S" />
      </div>
    </div>
  );
}
