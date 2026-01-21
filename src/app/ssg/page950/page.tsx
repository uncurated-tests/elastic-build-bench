// SSG Page 950 - v15 (build-time CPU work)
import '@/generated/styles/p950.css';
import SharedComponent50 from '@/generated/components/SharedComponent50';
import SharedComponent51 from '@/generated/components/SharedComponent51';
import SharedComponent52 from '@/generated/components/SharedComponent52';

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
    title: `Page 950 | Build Bench`,
    description: `SSG page 950 - CPU work result: ${workResult.toFixed(2)}`,
  };
}

export default function SSGPage950() {
  return (
    <div className="p950-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 950</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent50 id="950-0" value={95000} label="S" />
        <SharedComponent51 id="950-1" value={95001} label="S" />
        <SharedComponent52 id="950-2" value={95002} label="S" />
      </div>
    </div>
  );
}
