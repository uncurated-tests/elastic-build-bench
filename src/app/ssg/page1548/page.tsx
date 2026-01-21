// SSG Page 1548 - v15 (build-time CPU work)
import '@/generated/styles/p1548.css';
import SharedComponent36 from '@/generated/components/SharedComponent36';
import SharedComponent37 from '@/generated/components/SharedComponent37';
import SharedComponent38 from '@/generated/components/SharedComponent38';

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
    title: `Page 1548 | Build Bench`,
    description: `SSG page 1548 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage1548() {
  return (
    <div className="p1548-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1548</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent36 id="1548-0" value={154800} label="S" />
        <SharedComponent37 id="1548-1" value={154801} label="S" />
        <SharedComponent38 id="1548-2" value={154802} label="S" />
      </div>
    </div>
  );
}
