// SSG Page 1122 - v15 (build-time CPU work)
import '@/generated/styles/p1122.css';
import SharedComponent54 from '@/generated/components/SharedComponent54';
import SharedComponent55 from '@/generated/components/SharedComponent55';
import SharedComponent56 from '@/generated/components/SharedComponent56';

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
    title: `Page 1122 | Build Bench`,
    description: `SSG page 1122 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage1122() {
  return (
    <div className="p1122-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1122</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent54 id="1122-0" value={112200} label="S" />
        <SharedComponent55 id="1122-1" value={112201} label="S" />
        <SharedComponent56 id="1122-2" value={112202} label="S" />
      </div>
    </div>
  );
}
