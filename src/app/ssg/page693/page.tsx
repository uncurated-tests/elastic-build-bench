// SSG Page 693 - v15 (build-time CPU work)
import '@/generated/styles/p693.css';
import SharedComponent51 from '@/generated/components/SharedComponent51';
import SharedComponent52 from '@/generated/components/SharedComponent52';
import SharedComponent53 from '@/generated/components/SharedComponent53';

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
    title: `Page 693 | Build Bench`,
    description: `SSG page 693 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage693() {
  return (
    <div className="p693-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 693</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent51 id="693-0" value={69300} label="S" />
        <SharedComponent52 id="693-1" value={69301} label="S" />
        <SharedComponent53 id="693-2" value={69302} label="S" />
      </div>
    </div>
  );
}
