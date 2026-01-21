// SSG Page 729 - v15 (build-time CPU work)
import '@/generated/styles/p729.css';
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
    title: `Page 729 | Build Bench`,
    description: `SSG page 729 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage729() {
  return (
    <div className="p729-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 729</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent3 id="729-0" value={72900} label="S" />
        <SharedComponent4 id="729-1" value={72901} label="S" />
        <SharedComponent5 id="729-2" value={72902} label="S" />
      </div>
    </div>
  );
}
