// SSG Page 39 - v15 (build-time CPU work)
import '@/generated/styles/p39.css';
import SharedComponent73 from '@/generated/components/SharedComponent73';
import SharedComponent74 from '@/generated/components/SharedComponent74';
import SharedComponent75 from '@/generated/components/SharedComponent75';

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
    title: `Page 39 | Build Bench`,
    description: `SSG page 39 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage39() {
  return (
    <div className="p39-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 39</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent73 id="39-0" value={3900} label="S" />
        <SharedComponent74 id="39-1" value={3901} label="S" />
        <SharedComponent75 id="39-2" value={3902} label="S" />
      </div>
    </div>
  );
}
