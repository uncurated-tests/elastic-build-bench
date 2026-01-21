// SSG Page 1307 - v15 (build-time CPU work)
import '@/generated/styles/p1307.css';
import SharedComponent49 from '@/generated/components/SharedComponent49';
import SharedComponent50 from '@/generated/components/SharedComponent50';
import SharedComponent51 from '@/generated/components/SharedComponent51';

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
    title: `Page 1307 | Build Bench`,
    description: `SSG page 1307 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage1307() {
  return (
    <div className="p1307-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1307</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent49 id="1307-0" value={130700} label="S" />
        <SharedComponent50 id="1307-1" value={130701} label="S" />
        <SharedComponent51 id="1307-2" value={130702} label="S" />
      </div>
    </div>
  );
}
