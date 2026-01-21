// SSG Page 880 - v15 (build-time CPU work)
import '@/generated/styles/p880.css';
import SharedComponent60 from '@/generated/components/SharedComponent60';
import SharedComponent61 from '@/generated/components/SharedComponent61';
import SharedComponent62 from '@/generated/components/SharedComponent62';

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
    title: `Page 880 | Build Bench`,
    description: `SSG page 880 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage880() {
  return (
    <div className="p880-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 880</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent60 id="880-0" value={88000} label="S" />
        <SharedComponent61 id="880-1" value={88001} label="S" />
        <SharedComponent62 id="880-2" value={88002} label="S" />
      </div>
    </div>
  );
}
