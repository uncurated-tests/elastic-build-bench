// SSG Page 762 - v15 (build-time CPU work)
import '@/generated/styles/p762.css';
import SharedComponent34 from '@/generated/components/SharedComponent34';
import SharedComponent35 from '@/generated/components/SharedComponent35';
import SharedComponent36 from '@/generated/components/SharedComponent36';

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
    title: `Page 762 | Build Bench`,
    description: `SSG page 762 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage762() {
  return (
    <div className="p762-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 762</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent34 id="762-0" value={76200} label="S" />
        <SharedComponent35 id="762-1" value={76201} label="S" />
        <SharedComponent36 id="762-2" value={76202} label="S" />
      </div>
    </div>
  );
}
