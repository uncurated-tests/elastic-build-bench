// SSG Page 1826 - v15 (build-time CPU work)
import '@/generated/styles/p1826.css';
import SharedComponent82 from '@/generated/components/SharedComponent82';
import SharedComponent83 from '@/generated/components/SharedComponent83';
import SharedComponent84 from '@/generated/components/SharedComponent84';

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
    title: `Page 1826 | Build Bench`,
    description: `SSG page 1826 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage1826() {
  return (
    <div className="p1826-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1826</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent82 id="1826-0" value={182600} label="S" />
        <SharedComponent83 id="1826-1" value={182601} label="S" />
        <SharedComponent84 id="1826-2" value={182602} label="S" />
      </div>
    </div>
  );
}
