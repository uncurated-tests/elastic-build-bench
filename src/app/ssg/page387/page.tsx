// SSG Page 387 - v15 (build-time CPU work)
import '@/generated/styles/p387.css';
import SharedComponent9 from '@/generated/components/SharedComponent9';
import SharedComponent10 from '@/generated/components/SharedComponent10';
import SharedComponent11 from '@/generated/components/SharedComponent11';

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
    title: `Page 387 | Build Bench`,
    description: `SSG page 387 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage387() {
  return (
    <div className="p387-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 387</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent9 id="387-0" value={38700} label="S" />
        <SharedComponent10 id="387-1" value={38701} label="S" />
        <SharedComponent11 id="387-2" value={38702} label="S" />
      </div>
    </div>
  );
}
