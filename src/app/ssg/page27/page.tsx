// SSG Page 27 - Pre-rendered at build time
import SharedComponent189 from '@/generated/components/SharedComponent189';
import SharedComponent190 from '@/generated/components/SharedComponent190';
import SharedComponent191 from '@/generated/components/SharedComponent191';
import SharedComponent192 from '@/generated/components/SharedComponent192';
import SharedComponent193 from '@/generated/components/SharedComponent193';
import SharedComponent194 from '@/generated/components/SharedComponent194';
import SharedComponent195 from '@/generated/components/SharedComponent195';
import SharedComponent196 from '@/generated/components/SharedComponent196';
import SharedComponent197 from '@/generated/components/SharedComponent197';
import SharedComponent198 from '@/generated/components/SharedComponent198';
import SharedComponent199 from '@/generated/components/SharedComponent199';
import SharedComponent200 from '@/generated/components/SharedComponent200';
import SharedComponent201 from '@/generated/components/SharedComponent201';
import SharedComponent202 from '@/generated/components/SharedComponent202';
import SharedComponent203 from '@/generated/components/SharedComponent203';
import SharedComponent204 from '@/generated/components/SharedComponent204';
import SharedComponent205 from '@/generated/components/SharedComponent205';
import SharedComponent206 from '@/generated/components/SharedComponent206';
import SharedComponent207 from '@/generated/components/SharedComponent207';
import SharedComponent208 from '@/generated/components/SharedComponent208';

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

export default async function SSGPage27() {
  const data = computePageData(27);
  
  const items = Array.from({ length: 20 }, (_, i) => ({
    id: `${27}-${i}`,
    value: 27 * 100 + i,
    label: `Page 27 Item`,
  }));
  
  return (
    <div className="p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 27
      </h1>
      <p className="text-sm text-zinc-500 mb-4">
        Generated: {data.generatedAt} | Checksum: {data.checksum.toFixed(4)}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {[SharedComponent189, SharedComponent190, SharedComponent191, SharedComponent192, SharedComponent193, SharedComponent194, SharedComponent195, SharedComponent196, SharedComponent197, SharedComponent198, SharedComponent199, SharedComponent200, SharedComponent201, SharedComponent202, SharedComponent203, SharedComponent204, SharedComponent205, SharedComponent206, SharedComponent207, SharedComponent208].map((Component, idx) => (
          <Component key={idx} {...items[idx]} />
        ))}
      </div>
    </div>
  );
}
