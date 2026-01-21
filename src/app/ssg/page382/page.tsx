// SSG Page 382 - v15 (build-time CPU work)
import '@/generated/styles/p382.css';
import SharedComponent74 from '@/generated/components/SharedComponent74';
import SharedComponent75 from '@/generated/components/SharedComponent75';
import SharedComponent76 from '@/generated/components/SharedComponent76';

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
    title: `Page 382 | Build Bench`,
    description: `SSG page 382 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage382() {
  return (
    <div className="p382-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 382</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent74 id="382-0" value={38200} label="S" />
        <SharedComponent75 id="382-1" value={38201} label="S" />
        <SharedComponent76 id="382-2" value={38202} label="S" />
      </div>
    </div>
  );
}
