// SSG Page 425 - v15 (build-time CPU work)
import '@/generated/styles/p425.css';
import SharedComponent75 from '@/generated/components/SharedComponent75';
import SharedComponent76 from '@/generated/components/SharedComponent76';
import SharedComponent77 from '@/generated/components/SharedComponent77';

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
    title: `Page 425 | Build Bench`,
    description: `SSG page 425 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage425() {
  return (
    <div className="p425-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 425</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent75 id="425-0" value={42500} label="S" />
        <SharedComponent76 id="425-1" value={42501} label="S" />
        <SharedComponent77 id="425-2" value={42502} label="S" />
      </div>
    </div>
  );
}
