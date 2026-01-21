// SSG Page 627 - v15 (build-time CPU work)
import '@/generated/styles/p627.css';
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
    title: `Page 627 | Build Bench`,
    description: `SSG page 627 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage627() {
  return (
    <div className="p627-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 627</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent89 id="627-0" value={62700} label="S" />
        <SharedComponent90 id="627-1" value={62701} label="S" />
        <SharedComponent91 id="627-2" value={62702} label="S" />
      </div>
    </div>
  );
}
