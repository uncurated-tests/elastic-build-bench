// SSG Page 1990 - v15 (build-time CPU work)
import '@/generated/styles/p1990.css';
import SharedComponent30 from '@/generated/components/SharedComponent30';
import SharedComponent31 from '@/generated/components/SharedComponent31';
import SharedComponent32 from '@/generated/components/SharedComponent32';

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
    title: `Page 1990 | Build Bench`,
    description: `SSG page 1990 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage1990() {
  return (
    <div className="p1990-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1990</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent30 id="1990-0" value={199000} label="S" />
        <SharedComponent31 id="1990-1" value={199001} label="S" />
        <SharedComponent32 id="1990-2" value={199002} label="S" />
      </div>
    </div>
  );
}
