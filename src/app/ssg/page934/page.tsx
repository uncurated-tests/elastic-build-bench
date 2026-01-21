// SSG Page 934 - v15 (build-time CPU work)
import '@/generated/styles/p934.css';
import SharedComponent38 from '@/generated/components/SharedComponent38';
import SharedComponent39 from '@/generated/components/SharedComponent39';
import SharedComponent40 from '@/generated/components/SharedComponent40';

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
    title: `Page 934 | Build Bench`,
    description: `SSG page 934 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage934() {
  return (
    <div className="p934-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 934</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent38 id="934-0" value={93400} label="S" />
        <SharedComponent39 id="934-1" value={93401} label="S" />
        <SharedComponent40 id="934-2" value={93402} label="S" />
      </div>
    </div>
  );
}
