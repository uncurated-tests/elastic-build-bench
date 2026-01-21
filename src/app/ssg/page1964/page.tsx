// SSG Page 1964 - v15 (build-time CPU work)
import '@/generated/styles/p1964.css';
import SharedComponent48 from '@/generated/components/SharedComponent48';
import SharedComponent49 from '@/generated/components/SharedComponent49';
import SharedComponent50 from '@/generated/components/SharedComponent50';

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
    title: `Page 1964 | Build Bench`,
    description: `SSG page 1964 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage1964() {
  return (
    <div className="p1964-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1964</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent48 id="1964-0" value={196400} label="S" />
        <SharedComponent49 id="1964-1" value={196401} label="S" />
        <SharedComponent50 id="1964-2" value={196402} label="S" />
      </div>
    </div>
  );
}
