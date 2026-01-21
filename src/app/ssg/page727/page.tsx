// SSG Page 727 - v15 (build-time CPU work)
import '@/generated/styles/p727.css';
import SharedComponent89 from '@/generated/components/SharedComponent89';
import SharedComponent90 from '@/generated/components/SharedComponent90';
import SharedComponent91 from '@/generated/components/SharedComponent91';

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
    title: `Page 727 | Build Bench`,
    description: `SSG page 727 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage727() {
  return (
    <div className="p727-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 727</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent89 id="727-0" value={72700} label="S" />
        <SharedComponent90 id="727-1" value={72701} label="S" />
        <SharedComponent91 id="727-2" value={72702} label="S" />
      </div>
    </div>
  );
}
