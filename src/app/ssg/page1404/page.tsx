// SSG Page 1404 - v15 (build-time CPU work)
import '@/generated/styles/p1404.css';
import SharedComponent28 from '@/generated/components/SharedComponent28';
import SharedComponent29 from '@/generated/components/SharedComponent29';
import SharedComponent30 from '@/generated/components/SharedComponent30';

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
    title: `Page 1404 | Build Bench`,
    description: `SSG page 1404 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage1404() {
  return (
    <div className="p1404-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1404</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent28 id="1404-0" value={140400} label="S" />
        <SharedComponent29 id="1404-1" value={140401} label="S" />
        <SharedComponent30 id="1404-2" value={140402} label="S" />
      </div>
    </div>
  );
}
