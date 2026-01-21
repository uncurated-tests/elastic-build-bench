// SSG Page 810 - v15 (build-time CPU work)
import '@/generated/styles/p810.css';
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
    title: `Page 810 | Build Bench`,
    description: `SSG page 810 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage810() {
  return (
    <div className="p810-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 810</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent70 id="810-0" value={81000} label="S" />
        <SharedComponent71 id="810-1" value={81001} label="S" />
        <SharedComponent72 id="810-2" value={81002} label="S" />
      </div>
    </div>
  );
}
