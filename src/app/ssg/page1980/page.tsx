// SSG Page 1980 - v15 (build-time CPU work)
import '@/generated/styles/p1980.css';
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
    title: `Page 1980 | Build Bench`,
    description: `SSG page 1980 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage1980() {
  return (
    <div className="p1980-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1980</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent60 id="1980-0" value={198000} label="S" />
        <SharedComponent61 id="1980-1" value={198001} label="S" />
        <SharedComponent62 id="1980-2" value={198002} label="S" />
      </div>
    </div>
  );
}
