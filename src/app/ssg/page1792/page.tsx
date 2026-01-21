// SSG Page 1792 - v15 (build-time CPU work)
import '@/generated/styles/p1792.css';
import SharedComponent44 from '@/generated/components/SharedComponent44';
import SharedComponent45 from '@/generated/components/SharedComponent45';
import SharedComponent46 from '@/generated/components/SharedComponent46';

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
    title: `Page 1792 | Build Bench`,
    description: `SSG page 1792 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage1792() {
  return (
    <div className="p1792-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1792</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent44 id="1792-0" value={179200} label="S" />
        <SharedComponent45 id="1792-1" value={179201} label="S" />
        <SharedComponent46 id="1792-2" value={179202} label="S" />
      </div>
    </div>
  );
}
