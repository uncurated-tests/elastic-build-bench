// SSG Page 700 - v15 (build-time CPU work)
import '@/generated/styles/p700.css';
import SharedComponent0 from '@/generated/components/SharedComponent0';
import SharedComponent1 from '@/generated/components/SharedComponent1';
import SharedComponent2 from '@/generated/components/SharedComponent2';

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
    title: `Page 700 | Build Bench`,
    description: `SSG page 700 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage700() {
  return (
    <div className="p700-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 700</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent0 id="700-0" value={70000} label="S" />
        <SharedComponent1 id="700-1" value={70001} label="S" />
        <SharedComponent2 id="700-2" value={70002} label="S" />
      </div>
    </div>
  );
}
