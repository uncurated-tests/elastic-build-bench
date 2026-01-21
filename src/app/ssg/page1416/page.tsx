// SSG Page 1416 - v15 (build-time CPU work)
import '@/generated/styles/p1416.css';
import SharedComponent12 from '@/generated/components/SharedComponent12';
import SharedComponent13 from '@/generated/components/SharedComponent13';
import SharedComponent14 from '@/generated/components/SharedComponent14';

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
    title: `Page 1416 | Build Bench`,
    description: `SSG page 1416 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage1416() {
  return (
    <div className="p1416-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1416</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent12 id="1416-0" value={141600} label="S" />
        <SharedComponent13 id="1416-1" value={141601} label="S" />
        <SharedComponent14 id="1416-2" value={141602} label="S" />
      </div>
    </div>
  );
}
