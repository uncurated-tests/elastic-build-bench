// SSG Page 1162 - v15 (build-time CPU work)
import '@/generated/styles/p1162.css';
import SharedComponent34 from '@/generated/components/SharedComponent34';
import SharedComponent35 from '@/generated/components/SharedComponent35';
import SharedComponent36 from '@/generated/components/SharedComponent36';

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
    title: `Page 1162 | Build Bench`,
    description: `SSG page 1162 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage1162() {
  return (
    <div className="p1162-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1162</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent34 id="1162-0" value={116200} label="S" />
        <SharedComponent35 id="1162-1" value={116201} label="S" />
        <SharedComponent36 id="1162-2" value={116202} label="S" />
      </div>
    </div>
  );
}
