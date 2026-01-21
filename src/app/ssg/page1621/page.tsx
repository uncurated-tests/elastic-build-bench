// SSG Page 1621 - v15 (build-time CPU work)
import '@/generated/styles/p1621.css';
import SharedComponent47 from '@/generated/components/SharedComponent47';
import SharedComponent48 from '@/generated/components/SharedComponent48';
import SharedComponent49 from '@/generated/components/SharedComponent49';

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
    title: `Page 1621 | Build Bench`,
    description: `SSG page 1621 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage1621() {
  return (
    <div className="p1621-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1621</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent47 id="1621-0" value={162100} label="S" />
        <SharedComponent48 id="1621-1" value={162101} label="S" />
        <SharedComponent49 id="1621-2" value={162102} label="S" />
      </div>
    </div>
  );
}
