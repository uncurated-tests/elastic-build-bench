// SSG Page 480 - v15 (build-time CPU work)
import '@/generated/styles/p480.css';
import SharedComponent60 from '@/generated/components/SharedComponent60';
import SharedComponent61 from '@/generated/components/SharedComponent61';
import SharedComponent62 from '@/generated/components/SharedComponent62';

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
    title: `Page 480 | Build Bench`,
    description: `SSG page 480 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage480() {
  return (
    <div className="p480-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 480</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent60 id="480-0" value={48000} label="S" />
        <SharedComponent61 id="480-1" value={48001} label="S" />
        <SharedComponent62 id="480-2" value={48002} label="S" />
      </div>
    </div>
  );
}
