// SSG Page 1629 - v15 (build-time CPU work)
import '@/generated/styles/p1629.css';
import SharedComponent3 from '@/generated/components/SharedComponent3';
import SharedComponent4 from '@/generated/components/SharedComponent4';
import SharedComponent5 from '@/generated/components/SharedComponent5';

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
    title: `Page 1629 | Build Bench`,
    description: `SSG page 1629 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage1629() {
  return (
    <div className="p1629-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1629</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent3 id="1629-0" value={162900} label="S" />
        <SharedComponent4 id="1629-1" value={162901} label="S" />
        <SharedComponent5 id="1629-2" value={162902} label="S" />
      </div>
    </div>
  );
}
