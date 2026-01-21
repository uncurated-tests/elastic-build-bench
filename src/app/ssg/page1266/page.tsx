// SSG Page 1266 - v15 (build-time CPU work)
import '@/generated/styles/p1266.css';
import SharedComponent62 from '@/generated/components/SharedComponent62';
import SharedComponent63 from '@/generated/components/SharedComponent63';
import SharedComponent64 from '@/generated/components/SharedComponent64';

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
    title: `Page 1266 | Build Bench`,
    description: `SSG page 1266 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage1266() {
  return (
    <div className="p1266-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1266</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent62 id="1266-0" value={126600} label="S" />
        <SharedComponent63 id="1266-1" value={126601} label="S" />
        <SharedComponent64 id="1266-2" value={126602} label="S" />
      </div>
    </div>
  );
}
