// SSG Page 1775 - v15 (build-time CPU work)
import '@/generated/styles/p1775.css';
import SharedComponent25 from '@/generated/components/SharedComponent25';
import SharedComponent26 from '@/generated/components/SharedComponent26';
import SharedComponent27 from '@/generated/components/SharedComponent27';

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
    title: `Page 1775 | Build Bench`,
    description: `SSG page 1775 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage1775() {
  return (
    <div className="p1775-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1775</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent25 id="1775-0" value={177500} label="S" />
        <SharedComponent26 id="1775-1" value={177501} label="S" />
        <SharedComponent27 id="1775-2" value={177502} label="S" />
      </div>
    </div>
  );
}
