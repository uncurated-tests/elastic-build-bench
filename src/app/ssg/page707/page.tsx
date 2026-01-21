// SSG Page 707 - v15 (build-time CPU work)
import '@/generated/styles/p707.css';
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
    title: `Page 707 | Build Bench`,
    description: `SSG page 707 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage707() {
  return (
    <div className="p707-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 707</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent49 id="707-0" value={70700} label="S" />
        <SharedComponent50 id="707-1" value={70701} label="S" />
        <SharedComponent51 id="707-2" value={70702} label="S" />
      </div>
    </div>
  );
}
