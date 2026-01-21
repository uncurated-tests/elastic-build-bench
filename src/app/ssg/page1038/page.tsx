// SSG Page 1038 - v15 (build-time CPU work)
import '@/generated/styles/p1038.css';
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
    title: `Page 1038 | Build Bench`,
    description: `SSG page 1038 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage1038() {
  return (
    <div className="p1038-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1038</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent66 id="1038-0" value={103800} label="S" />
        <SharedComponent67 id="1038-1" value={103801} label="S" />
        <SharedComponent68 id="1038-2" value={103802} label="S" />
      </div>
    </div>
  );
}
