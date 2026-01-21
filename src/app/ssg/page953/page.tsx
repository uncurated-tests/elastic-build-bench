// SSG Page 953 - v15 (build-time CPU work)
import '@/generated/styles/p953.css';
import SharedComponent71 from '@/generated/components/SharedComponent71';
import SharedComponent72 from '@/generated/components/SharedComponent72';
import SharedComponent73 from '@/generated/components/SharedComponent73';

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
    title: `Page 953 | Build Bench`,
    description: `SSG page 953 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage953() {
  return (
    <div className="p953-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 953</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent71 id="953-0" value={95300} label="S" />
        <SharedComponent72 id="953-1" value={95301} label="S" />
        <SharedComponent73 id="953-2" value={95302} label="S" />
      </div>
    </div>
  );
}
