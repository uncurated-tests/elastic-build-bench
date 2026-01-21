// SSG Page 281 - v15 (build-time CPU work)
import '@/generated/styles/p281.css';
import SharedComponent67 from '@/generated/components/SharedComponent67';
import SharedComponent68 from '@/generated/components/SharedComponent68';
import SharedComponent69 from '@/generated/components/SharedComponent69';

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
    title: `Page 281 | Build Bench`,
    description: `SSG page 281 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage281() {
  return (
    <div className="p281-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 281</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent67 id="281-0" value={28100} label="S" />
        <SharedComponent68 id="281-1" value={28101} label="S" />
        <SharedComponent69 id="281-2" value={28102} label="S" />
      </div>
    </div>
  );
}
