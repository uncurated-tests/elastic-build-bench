// SSG Page 473 - v15 (build-time CPU work)
import '@/generated/styles/p473.css';
import SharedComponent11 from '@/generated/components/SharedComponent11';
import SharedComponent12 from '@/generated/components/SharedComponent12';
import SharedComponent13 from '@/generated/components/SharedComponent13';

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
    title: `Page 473 | Build Bench`,
    description: `SSG page 473 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage473() {
  return (
    <div className="p473-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 473</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent11 id="473-0" value={47300} label="S" />
        <SharedComponent12 id="473-1" value={47301} label="S" />
        <SharedComponent13 id="473-2" value={47302} label="S" />
      </div>
    </div>
  );
}
