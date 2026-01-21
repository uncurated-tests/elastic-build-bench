// SSG Page 1932 - v15 (build-time CPU work)
import '@/generated/styles/p1932.css';
import SharedComponent24 from '@/generated/components/SharedComponent24';
import SharedComponent25 from '@/generated/components/SharedComponent25';
import SharedComponent26 from '@/generated/components/SharedComponent26';

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
    title: `Page 1932 | Build Bench`,
    description: `SSG page 1932 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage1932() {
  return (
    <div className="p1932-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1932</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent24 id="1932-0" value={193200} label="S" />
        <SharedComponent25 id="1932-1" value={193201} label="S" />
        <SharedComponent26 id="1932-2" value={193202} label="S" />
      </div>
    </div>
  );
}
