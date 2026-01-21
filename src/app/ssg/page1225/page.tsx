// SSG Page 1225 - v15 (build-time CPU work)
import '@/generated/styles/p1225.css';
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
    title: `Page 1225 | Build Bench`,
    description: `SSG page 1225 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage1225() {
  return (
    <div className="p1225-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1225</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent75 id="1225-0" value={122500} label="S" />
        <SharedComponent76 id="1225-1" value={122501} label="S" />
        <SharedComponent77 id="1225-2" value={122502} label="S" />
      </div>
    </div>
  );
}
