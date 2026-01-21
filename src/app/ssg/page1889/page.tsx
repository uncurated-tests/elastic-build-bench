// SSG Page 1889 - v15 (build-time CPU work)
import '@/generated/styles/p1889.css';
import SharedComponent23 from '@/generated/components/SharedComponent23';
import SharedComponent24 from '@/generated/components/SharedComponent24';
import SharedComponent25 from '@/generated/components/SharedComponent25';

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
    title: `Page 1889 | Build Bench`,
    description: `SSG page 1889 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage1889() {
  return (
    <div className="p1889-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1889</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent23 id="1889-0" value={188900} label="S" />
        <SharedComponent24 id="1889-1" value={188901} label="S" />
        <SharedComponent25 id="1889-2" value={188902} label="S" />
      </div>
    </div>
  );
}
