// SSG Page 952 - v15 (build-time CPU work)
import '@/generated/styles/p952.css';
import SharedComponent64 from '@/generated/components/SharedComponent64';
import SharedComponent65 from '@/generated/components/SharedComponent65';
import SharedComponent66 from '@/generated/components/SharedComponent66';

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
    title: `Page 952 | Build Bench`,
    description: `SSG page 952 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage952() {
  return (
    <div className="p952-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 952</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent64 id="952-0" value={95200} label="S" />
        <SharedComponent65 id="952-1" value={95201} label="S" />
        <SharedComponent66 id="952-2" value={95202} label="S" />
      </div>
    </div>
  );
}
