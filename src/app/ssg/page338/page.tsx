// SSG Page 338 - v15 (build-time CPU work)
import '@/generated/styles/p338.css';
import SharedComponent66 from '@/generated/components/SharedComponent66';
import SharedComponent67 from '@/generated/components/SharedComponent67';
import SharedComponent68 from '@/generated/components/SharedComponent68';

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
    title: `Page 338 | Build Bench`,
    description: `SSG page 338 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage338() {
  return (
    <div className="p338-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 338</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent66 id="338-0" value={33800} label="S" />
        <SharedComponent67 id="338-1" value={33801} label="S" />
        <SharedComponent68 id="338-2" value={33802} label="S" />
      </div>
    </div>
  );
}
