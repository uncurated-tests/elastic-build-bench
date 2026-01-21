// SSG Page 1010 - v15 (build-time CPU work)
import '@/generated/styles/p1010.css';
import SharedComponent70 from '@/generated/components/SharedComponent70';
import SharedComponent71 from '@/generated/components/SharedComponent71';
import SharedComponent72 from '@/generated/components/SharedComponent72';

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
    title: `Page 1010 | Build Bench`,
    description: `SSG page 1010 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage1010() {
  return (
    <div className="p1010-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1010</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent70 id="1010-0" value={101000} label="S" />
        <SharedComponent71 id="1010-1" value={101001} label="S" />
        <SharedComponent72 id="1010-2" value={101002} label="S" />
      </div>
    </div>
  );
}
