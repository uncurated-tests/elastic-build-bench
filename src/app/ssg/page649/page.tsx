// SSG Page 649 - v15 (build-time CPU work)
import '@/generated/styles/p649.css';
import SharedComponent43 from '@/generated/components/SharedComponent43';
import SharedComponent44 from '@/generated/components/SharedComponent44';
import SharedComponent45 from '@/generated/components/SharedComponent45';

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
    title: `Page 649 | Build Bench`,
    description: `SSG page 649 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage649() {
  return (
    <div className="p649-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 649</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent43 id="649-0" value={64900} label="S" />
        <SharedComponent44 id="649-1" value={64901} label="S" />
        <SharedComponent45 id="649-2" value={64902} label="S" />
      </div>
    </div>
  );
}
