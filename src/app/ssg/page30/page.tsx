// SSG Page 30 - Pre-rendered at build time
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
import SharedComponent224 from '@/generated/components/SharedComponent224';
import SharedComponent225 from '@/generated/components/SharedComponent225';
import SharedComponent226 from '@/generated/components/SharedComponent226';
import SharedComponent227 from '@/generated/components/SharedComponent227';
import SharedComponent228 from '@/generated/components/SharedComponent228';
import SharedComponent229 from '@/generated/components/SharedComponent229';

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

export default async function SSGPage30() {
  const data = computePageData(30);
  
  const items = Array.from({ length: 20 }, (_, i) => ({
    id: `${30}-${i}`,
    value: 30 * 100 + i,
    label: `Page 30 Item`,
  }));
  
  return (
    <div className="p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 30
      </h1>
      <p className="text-sm text-zinc-500 mb-4">
        Generated: {data.generatedAt} | Checksum: {data.checksum.toFixed(4)}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {[SharedComponent210, SharedComponent211, SharedComponent212, SharedComponent213, SharedComponent214, SharedComponent215, SharedComponent216, SharedComponent217, SharedComponent218, SharedComponent219, SharedComponent220, SharedComponent221, SharedComponent222, SharedComponent223, SharedComponent224, SharedComponent225, SharedComponent226, SharedComponent227, SharedComponent228, SharedComponent229].map((Component, idx) => (
          <Component key={idx} {...items[idx]} />
        ))}
      </div>
    </div>
  );
}
