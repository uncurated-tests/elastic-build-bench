// SSG Page 191 - v15 (build-time CPU work)
import '@/generated/styles/p191.css';
import SharedComponent37 from '@/generated/components/SharedComponent37';
import SharedComponent38 from '@/generated/components/SharedComponent38';
import SharedComponent39 from '@/generated/components/SharedComponent39';

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
    title: `Page 191 | Build Bench`,
    description: `SSG page 191 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage191() {
  return (
    <div className="p191-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 191</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent37 id="191-0" value={19100} label="S" />
        <SharedComponent38 id="191-1" value={19101} label="S" />
        <SharedComponent39 id="191-2" value={19102} label="S" />
      </div>
    </div>
  );
}
