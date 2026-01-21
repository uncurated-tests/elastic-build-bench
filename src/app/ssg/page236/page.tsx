// SSG Page 236 - v15 (build-time CPU work)
import '@/generated/styles/p236.css';
import SharedComponent52 from '@/generated/components/SharedComponent52';
import SharedComponent53 from '@/generated/components/SharedComponent53';
import SharedComponent54 from '@/generated/components/SharedComponent54';

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
    title: `Page 236 | Build Bench`,
    description: `SSG page 236 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage236() {
  return (
    <div className="p236-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 236</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent52 id="236-0" value={23600} label="S" />
        <SharedComponent53 id="236-1" value={23601} label="S" />
        <SharedComponent54 id="236-2" value={23602} label="S" />
      </div>
    </div>
  );
}
