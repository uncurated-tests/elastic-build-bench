// SSG Page 1018 - v15 (build-time CPU work)
import '@/generated/styles/p1018.css';
import SharedComponent26 from '@/generated/components/SharedComponent26';
import SharedComponent27 from '@/generated/components/SharedComponent27';
import SharedComponent28 from '@/generated/components/SharedComponent28';

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
    title: `Page 1018 | Build Bench`,
    description: `SSG page 1018 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage1018() {
  return (
    <div className="p1018-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1018</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent26 id="1018-0" value={101800} label="S" />
        <SharedComponent27 id="1018-1" value={101801} label="S" />
        <SharedComponent28 id="1018-2" value={101802} label="S" />
      </div>
    </div>
  );
}
