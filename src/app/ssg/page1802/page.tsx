// SSG Page 1802 - v15 (build-time CPU work)
import '@/generated/styles/p1802.css';
import SharedComponent14 from '@/generated/components/SharedComponent14';
import SharedComponent15 from '@/generated/components/SharedComponent15';
import SharedComponent16 from '@/generated/components/SharedComponent16';

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
    title: `Page 1802 | Build Bench`,
    description: `SSG page 1802 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage1802() {
  return (
    <div className="p1802-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1802</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent14 id="1802-0" value={180200} label="S" />
        <SharedComponent15 id="1802-1" value={180201} label="S" />
        <SharedComponent16 id="1802-2" value={180202} label="S" />
      </div>
    </div>
  );
}
