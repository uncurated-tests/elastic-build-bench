// SSG Page 1337 - v15 (build-time CPU work)
import '@/generated/styles/p1337.css';
import SharedComponent59 from '@/generated/components/SharedComponent59';
import SharedComponent60 from '@/generated/components/SharedComponent60';
import SharedComponent61 from '@/generated/components/SharedComponent61';

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
    title: `Page 1337 | Build Bench`,
    description: `SSG page 1337 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage1337() {
  return (
    <div className="p1337-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1337</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent59 id="1337-0" value={133700} label="S" />
        <SharedComponent60 id="1337-1" value={133701} label="S" />
        <SharedComponent61 id="1337-2" value={133702} label="S" />
      </div>
    </div>
  );
}
