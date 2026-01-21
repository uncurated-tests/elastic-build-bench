// SSG Page 156 - v15 (build-time CPU work)
import '@/generated/styles/p156.css';
import SharedComponent92 from '@/generated/components/SharedComponent92';
import SharedComponent93 from '@/generated/components/SharedComponent93';
import SharedComponent94 from '@/generated/components/SharedComponent94';

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
    title: `Page 156 | Build Bench`,
    description: `SSG page 156 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage156() {
  return (
    <div className="p156-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 156</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent92 id="156-0" value={15600} label="S" />
        <SharedComponent93 id="156-1" value={15601} label="S" />
        <SharedComponent94 id="156-2" value={15602} label="S" />
      </div>
    </div>
  );
}
