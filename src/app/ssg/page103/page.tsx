// SSG Page 103 - Pre-rendered at build time
import SharedComponent221 from '@/generated/components/SharedComponent221';
import SharedComponent222 from '@/generated/components/SharedComponent222';
import SharedComponent223 from '@/generated/components/SharedComponent223';
import SharedComponent224 from '@/generated/components/SharedComponent224';
import SharedComponent225 from '@/generated/components/SharedComponent225';
import SharedComponent226 from '@/generated/components/SharedComponent226';
import SharedComponent227 from '@/generated/components/SharedComponent227';
import SharedComponent228 from '@/generated/components/SharedComponent228';
import SharedComponent229 from '@/generated/components/SharedComponent229';
import SharedComponent230 from '@/generated/components/SharedComponent230';
import SharedComponent231 from '@/generated/components/SharedComponent231';
import SharedComponent232 from '@/generated/components/SharedComponent232';
import SharedComponent233 from '@/generated/components/SharedComponent233';
import SharedComponent234 from '@/generated/components/SharedComponent234';
import SharedComponent235 from '@/generated/components/SharedComponent235';
import SharedComponent236 from '@/generated/components/SharedComponent236';
import SharedComponent237 from '@/generated/components/SharedComponent237';
import SharedComponent238 from '@/generated/components/SharedComponent238';
import SharedComponent239 from '@/generated/components/SharedComponent239';
import SharedComponent240 from '@/generated/components/SharedComponent240';

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

export default async function SSGPage103() {
  const data = computePageData(103);
  
  const items = Array.from({ length: 20 }, (_, i) => ({
    id: `${103}-${i}`,
    value: 103 * 100 + i,
    label: `Page 103 Item`,
  }));
  
  return (
    <div className="p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 103
      </h1>
      <p className="text-sm text-zinc-500 mb-4">
        Generated: {data.generatedAt} | Checksum: {data.checksum.toFixed(4)}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {[SharedComponent221, SharedComponent222, SharedComponent223, SharedComponent224, SharedComponent225, SharedComponent226, SharedComponent227, SharedComponent228, SharedComponent229, SharedComponent230, SharedComponent231, SharedComponent232, SharedComponent233, SharedComponent234, SharedComponent235, SharedComponent236, SharedComponent237, SharedComponent238, SharedComponent239, SharedComponent240].map((Component, idx) => (
          <Component key={idx} {...items[idx]} />
        ))}
      </div>
    </div>
  );
}
