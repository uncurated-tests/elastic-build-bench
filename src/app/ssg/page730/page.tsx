// SSG Page 730 - v15 (build-time CPU work)
import '@/generated/styles/p730.css';
import SharedComponent10 from '@/generated/components/SharedComponent10';
import SharedComponent11 from '@/generated/components/SharedComponent11';
import SharedComponent12 from '@/generated/components/SharedComponent12';

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
    title: `Page 730 | Build Bench`,
    description: `SSG page 730 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage730() {
  return (
    <div className="p730-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 730</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent10 id="730-0" value={73000} label="S" />
        <SharedComponent11 id="730-1" value={73001} label="S" />
        <SharedComponent12 id="730-2" value={73002} label="S" />
      </div>
    </div>
  );
}
