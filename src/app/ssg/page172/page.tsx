// SSG Page 172 - Pre-rendered at build time
import SharedComponent204 from '@/generated/components/SharedComponent204';
import SharedComponent205 from '@/generated/components/SharedComponent205';
import SharedComponent206 from '@/generated/components/SharedComponent206';
import SharedComponent207 from '@/generated/components/SharedComponent207';
import SharedComponent208 from '@/generated/components/SharedComponent208';
import SharedComponent209 from '@/generated/components/SharedComponent209';
import SharedComponent210 from '@/generated/components/SharedComponent210';
import SharedComponent211 from '@/generated/components/SharedComponent211';
import SharedComponent212 from '@/generated/components/SharedComponent212';
import SharedComponent213 from '@/generated/components/SharedComponent213';
import SharedComponent214 from '@/generated/components/SharedComponent214';
import SharedComponent215 from '@/generated/components/SharedComponent215';
import SharedComponent216 from '@/generated/components/SharedComponent216';
import SharedComponent217 from '@/generated/components/SharedComponent217';
import SharedComponent218 from '@/generated/components/SharedComponent218';
import SharedComponent219 from '@/generated/components/SharedComponent219';
import SharedComponent220 from '@/generated/components/SharedComponent220';
import SharedComponent221 from '@/generated/components/SharedComponent221';
import SharedComponent222 from '@/generated/components/SharedComponent222';
import SharedComponent223 from '@/generated/components/SharedComponent223';

// Server-side computation during SSG
function computePageData(pageId: number) {
  let result = pageId;
  // Intentionally expensive computation during build
  for (let i = 0; i < 10000; i++) {
    result = Math.sin(result + i * 0.001) * Math.cos(result) + Math.sqrt(Math.abs(result) + 1);
  }
  return {
    pageId,
    checksum: result,
    generatedAt: new Date().toISOString(),
    componentCount: 20,
  };
}

export default async function SSGPage172() {
  const data = computePageData(172);
  
  const items = Array.from({ length: 20 }, (_, i) => ({
    id: `${172}-${i}`,
    value: 172 * 100 + i,
    label: `Page 172 Item`,
  }));
  
  return (
    <div className="p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 172
      </h1>
      <p className="text-sm text-zinc-500 mb-4">
        Generated: {data.generatedAt} | Checksum: {data.checksum.toFixed(4)}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {[SharedComponent204, SharedComponent205, SharedComponent206, SharedComponent207, SharedComponent208, SharedComponent209, SharedComponent210, SharedComponent211, SharedComponent212, SharedComponent213, SharedComponent214, SharedComponent215, SharedComponent216, SharedComponent217, SharedComponent218, SharedComponent219, SharedComponent220, SharedComponent221, SharedComponent222, SharedComponent223].map((Component, idx) => (
          <Component key={idx} {...items[idx]} />
        ))}
      </div>
    </div>
  );
}
