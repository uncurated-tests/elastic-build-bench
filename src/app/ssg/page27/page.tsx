// SSG Page 27 - v15 (build-time CPU work)
import '@/generated/styles/p27.css';
import SharedComponent89 from '@/generated/components/SharedComponent89';
import SharedComponent90 from '@/generated/components/SharedComponent90';
import SharedComponent91 from '@/generated/components/SharedComponent91';

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
    title: `Page 27 | Build Bench`,
    description: `SSG page 27 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage27() {
  return (
    <div className="p27-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 27</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent89 id="27-0" value={2700} label="S" />
        <SharedComponent90 id="27-1" value={2701} label="S" />
        <SharedComponent91 id="27-2" value={2702} label="S" />
      </div>
    </div>
  );
}
