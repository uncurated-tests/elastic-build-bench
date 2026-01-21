// SSG Page 1143 - v15 (build-time CPU work)
import '@/generated/styles/p1143.css';
import SharedComponent1 from '@/generated/components/SharedComponent1';
import SharedComponent2 from '@/generated/components/SharedComponent2';
import SharedComponent3 from '@/generated/components/SharedComponent3';

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
    title: `Page 1143 | Build Bench`,
    description: `SSG page 1143 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage1143() {
  return (
    <div className="p1143-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1143</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent1 id="1143-0" value={114300} label="S" />
        <SharedComponent2 id="1143-1" value={114301} label="S" />
        <SharedComponent3 id="1143-2" value={114302} label="S" />
      </div>
    </div>
  );
}
