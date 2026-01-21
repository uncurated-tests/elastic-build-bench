// SSG Page 926 - v15 (build-time CPU work)
import '@/generated/styles/p926.css';
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
    title: `Page 926 | Build Bench`,
    description: `SSG page 926 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage926() {
  return (
    <div className="p926-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 926</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent82 id="926-0" value={92600} label="S" />
        <SharedComponent83 id="926-1" value={92601} label="S" />
        <SharedComponent84 id="926-2" value={92602} label="S" />
      </div>
    </div>
  );
}
