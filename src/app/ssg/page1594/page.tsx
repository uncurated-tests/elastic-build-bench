// SSG Page 1594 - v15 (build-time CPU work)
import '@/generated/styles/p1594.css';
import SharedComponent58 from '@/generated/components/SharedComponent58';
import SharedComponent59 from '@/generated/components/SharedComponent59';
import SharedComponent60 from '@/generated/components/SharedComponent60';

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
    title: `Page 1594 | Build Bench`,
    description: `SSG page 1594 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage1594() {
  return (
    <div className="p1594-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1594</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent58 id="1594-0" value={159400} label="S" />
        <SharedComponent59 id="1594-1" value={159401} label="S" />
        <SharedComponent60 id="1594-2" value={159402} label="S" />
      </div>
    </div>
  );
}
