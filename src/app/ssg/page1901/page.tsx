// SSG Page 1901 - v15 (build-time CPU work)
import '@/generated/styles/p1901.css';
import SharedComponent7 from '@/generated/components/SharedComponent7';
import SharedComponent8 from '@/generated/components/SharedComponent8';
import SharedComponent9 from '@/generated/components/SharedComponent9';

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
    title: `Page 1901 | Build Bench`,
    description: `SSG page 1901 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage1901() {
  return (
    <div className="p1901-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1901</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent7 id="1901-0" value={190100} label="S" />
        <SharedComponent8 id="1901-1" value={190101} label="S" />
        <SharedComponent9 id="1901-2" value={190102} label="S" />
      </div>
    </div>
  );
}
