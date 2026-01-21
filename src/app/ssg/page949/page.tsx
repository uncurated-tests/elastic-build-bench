// SSG Page 949 - v15 (build-time CPU work)
import '@/generated/styles/p949.css';
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
    title: `Page 949 | Build Bench`,
    description: `SSG page 949 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage949() {
  return (
    <div className="p949-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 949</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent43 id="949-0" value={94900} label="S" />
        <SharedComponent44 id="949-1" value={94901} label="S" />
        <SharedComponent45 id="949-2" value={94902} label="S" />
      </div>
    </div>
  );
}
