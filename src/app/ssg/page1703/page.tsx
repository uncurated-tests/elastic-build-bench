// SSG Page 1703 - v15 (build-time CPU work)
import '@/generated/styles/p1703.css';
import SharedComponent21 from '@/generated/components/SharedComponent21';
import SharedComponent22 from '@/generated/components/SharedComponent22';
import SharedComponent23 from '@/generated/components/SharedComponent23';

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
    title: `Page 1703 | Build Bench`,
    description: `SSG page 1703 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage1703() {
  return (
    <div className="p1703-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1703</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent21 id="1703-0" value={170300} label="S" />
        <SharedComponent22 id="1703-1" value={170301} label="S" />
        <SharedComponent23 id="1703-2" value={170302} label="S" />
      </div>
    </div>
  );
}
