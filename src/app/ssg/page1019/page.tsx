// SSG Page 1019 - v15 (build-time CPU work)
import '@/generated/styles/p1019.css';
import SharedComponent33 from '@/generated/components/SharedComponent33';
import SharedComponent34 from '@/generated/components/SharedComponent34';
import SharedComponent35 from '@/generated/components/SharedComponent35';

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
    title: `Page 1019 | Build Bench`,
    description: `SSG page 1019 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage1019() {
  return (
    <div className="p1019-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1019</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent33 id="1019-0" value={101900} label="S" />
        <SharedComponent34 id="1019-1" value={101901} label="S" />
        <SharedComponent35 id="1019-2" value={101902} label="S" />
      </div>
    </div>
  );
}
