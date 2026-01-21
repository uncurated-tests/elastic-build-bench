// SSG Page 812 - v15 (build-time CPU work)
import '@/generated/styles/p812.css';
import SharedComponent84 from '@/generated/components/SharedComponent84';
import SharedComponent85 from '@/generated/components/SharedComponent85';
import SharedComponent86 from '@/generated/components/SharedComponent86';

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
    title: `Page 812 | Build Bench`,
    description: `SSG page 812 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage812() {
  return (
    <div className="p812-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 812</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent84 id="812-0" value={81200} label="S" />
        <SharedComponent85 id="812-1" value={81201} label="S" />
        <SharedComponent86 id="812-2" value={81202} label="S" />
      </div>
    </div>
  );
}
