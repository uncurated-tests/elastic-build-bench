// SSG Page 1177 - v15 (build-time CPU work)
import '@/generated/styles/p1177.css';
import SharedComponent39 from '@/generated/components/SharedComponent39';
import SharedComponent40 from '@/generated/components/SharedComponent40';
import SharedComponent41 from '@/generated/components/SharedComponent41';

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
    title: `Page 1177 | Build Bench`,
    description: `SSG page 1177 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage1177() {
  return (
    <div className="p1177-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1177</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent39 id="1177-0" value={117700} label="S" />
        <SharedComponent40 id="1177-1" value={117701} label="S" />
        <SharedComponent41 id="1177-2" value={117702} label="S" />
      </div>
    </div>
  );
}
