// SSG Page 409 - v15 (build-time CPU work)
import '@/generated/styles/p409.css';
import SharedComponent63 from '@/generated/components/SharedComponent63';
import SharedComponent64 from '@/generated/components/SharedComponent64';
import SharedComponent65 from '@/generated/components/SharedComponent65';

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
    title: `Page 409 | Build Bench`,
    description: `SSG page 409 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage409() {
  return (
    <div className="p409-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 409</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent63 id="409-0" value={40900} label="S" />
        <SharedComponent64 id="409-1" value={40901} label="S" />
        <SharedComponent65 id="409-2" value={40902} label="S" />
      </div>
    </div>
  );
}
