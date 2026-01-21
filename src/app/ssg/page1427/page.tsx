// SSG Page 1427 - v15 (build-time CPU work)
import '@/generated/styles/p1427.css';
import SharedComponent89 from '@/generated/components/SharedComponent89';
import SharedComponent90 from '@/generated/components/SharedComponent90';
import SharedComponent91 from '@/generated/components/SharedComponent91';

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
    title: `Page 1427 | Build Bench`,
    description: `SSG page 1427 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage1427() {
  return (
    <div className="p1427-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1427</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent89 id="1427-0" value={142700} label="S" />
        <SharedComponent90 id="1427-1" value={142701} label="S" />
        <SharedComponent91 id="1427-2" value={142702} label="S" />
      </div>
    </div>
  );
}
