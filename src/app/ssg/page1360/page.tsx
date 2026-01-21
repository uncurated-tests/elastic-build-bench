// SSG Page 1360 - v15 (build-time CPU work)
import '@/generated/styles/p1360.css';
import SharedComponent20 from '@/generated/components/SharedComponent20';
import SharedComponent21 from '@/generated/components/SharedComponent21';
import SharedComponent22 from '@/generated/components/SharedComponent22';

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
    title: `Page 1360 | Build Bench`,
    description: `SSG page 1360 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage1360() {
  return (
    <div className="p1360-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1360</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent20 id="1360-0" value={136000} label="S" />
        <SharedComponent21 id="1360-1" value={136001} label="S" />
        <SharedComponent22 id="1360-2" value={136002} label="S" />
      </div>
    </div>
  );
}
