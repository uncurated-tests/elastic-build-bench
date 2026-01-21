// SSG Page 92 - v15 (build-time CPU work)
import '@/generated/styles/p92.css';
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
    title: `Page 92 | Build Bench`,
    description: `SSG page 92 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage92() {
  return (
    <div className="p92-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 92</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent44 id="92-0" value={9200} label="S" />
        <SharedComponent45 id="92-1" value={9201} label="S" />
        <SharedComponent46 id="92-2" value={9202} label="S" />
      </div>
    </div>
  );
}
