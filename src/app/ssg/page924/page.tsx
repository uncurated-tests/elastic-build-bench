// SSG Page 924 - v15 (build-time CPU work)
import '@/generated/styles/p924.css';
import SharedComponent68 from '@/generated/components/SharedComponent68';
import SharedComponent69 from '@/generated/components/SharedComponent69';
import SharedComponent70 from '@/generated/components/SharedComponent70';

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
    title: `Page 924 | Build Bench`,
    description: `SSG page 924 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage924() {
  return (
    <div className="p924-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 924</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent68 id="924-0" value={92400} label="S" />
        <SharedComponent69 id="924-1" value={92401} label="S" />
        <SharedComponent70 id="924-2" value={92402} label="S" />
      </div>
    </div>
  );
}
