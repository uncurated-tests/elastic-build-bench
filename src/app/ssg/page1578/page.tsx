// SSG Page 1578 - v15 (build-time CPU work)
import '@/generated/styles/p1578.css';
import SharedComponent46 from '@/generated/components/SharedComponent46';
import SharedComponent47 from '@/generated/components/SharedComponent47';
import SharedComponent48 from '@/generated/components/SharedComponent48';

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
    title: `Page 1578 | Build Bench`,
    description: `SSG page 1578 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage1578() {
  return (
    <div className="p1578-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1578</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent46 id="1578-0" value={157800} label="S" />
        <SharedComponent47 id="1578-1" value={157801} label="S" />
        <SharedComponent48 id="1578-2" value={157802} label="S" />
      </div>
    </div>
  );
}
