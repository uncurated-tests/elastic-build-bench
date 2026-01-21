// SSG Page 20 - v15 (build-time CPU work)
import '@/generated/styles/p20.css';
import SharedComponent40 from '@/generated/components/SharedComponent40';
import SharedComponent41 from '@/generated/components/SharedComponent41';
import SharedComponent42 from '@/generated/components/SharedComponent42';

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
    title: `Page 20 | Build Bench`,
    description: `SSG page 20 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage20() {
  return (
    <div className="p20-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 20</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent40 id="20-0" value={2000} label="S" />
        <SharedComponent41 id="20-1" value={2001} label="S" />
        <SharedComponent42 id="20-2" value={2002} label="S" />
      </div>
    </div>
  );
}
