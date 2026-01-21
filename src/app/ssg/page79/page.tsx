// SSG Page 79 - v15 (build-time CPU work)
import '@/generated/styles/p79.css';
import SharedComponent53 from '@/generated/components/SharedComponent53';
import SharedComponent54 from '@/generated/components/SharedComponent54';
import SharedComponent55 from '@/generated/components/SharedComponent55';

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
    title: `Page 79 | Build Bench`,
    description: `SSG page 79 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage79() {
  return (
    <div className="p79-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 79</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent53 id="79-0" value={7900} label="S" />
        <SharedComponent54 id="79-1" value={7901} label="S" />
        <SharedComponent55 id="79-2" value={7902} label="S" />
      </div>
    </div>
  );
}
