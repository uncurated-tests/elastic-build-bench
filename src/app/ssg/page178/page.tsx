// SSG Page 178 - v15 (build-time CPU work)
import '@/generated/styles/p178.css';
import SharedComponent46 from '@/generated/components/SharedComponent46';
import SharedComponent47 from '@/generated/components/SharedComponent47';
import SharedComponent48 from '@/generated/components/SharedComponent48';

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
    title: `Page 178 | Build Bench`,
    description: `SSG page 178 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage178() {
  return (
    <div className="p178-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 178</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent46 id="178-0" value={17800} label="S" />
        <SharedComponent47 id="178-1" value={17801} label="S" />
        <SharedComponent48 id="178-2" value={17802} label="S" />
      </div>
    </div>
  );
}
