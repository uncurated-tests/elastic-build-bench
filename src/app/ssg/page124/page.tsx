// SSG Page 124 - Pre-rendered at build time
import SharedComponent368 from '@/generated/components/SharedComponent368';
import SharedComponent369 from '@/generated/components/SharedComponent369';
import SharedComponent370 from '@/generated/components/SharedComponent370';
import SharedComponent371 from '@/generated/components/SharedComponent371';
import SharedComponent372 from '@/generated/components/SharedComponent372';
import SharedComponent373 from '@/generated/components/SharedComponent373';
import SharedComponent374 from '@/generated/components/SharedComponent374';
import SharedComponent375 from '@/generated/components/SharedComponent375';
import SharedComponent376 from '@/generated/components/SharedComponent376';
import SharedComponent377 from '@/generated/components/SharedComponent377';
import SharedComponent378 from '@/generated/components/SharedComponent378';
import SharedComponent379 from '@/generated/components/SharedComponent379';
import SharedComponent380 from '@/generated/components/SharedComponent380';
import SharedComponent381 from '@/generated/components/SharedComponent381';
import SharedComponent382 from '@/generated/components/SharedComponent382';
import SharedComponent383 from '@/generated/components/SharedComponent383';
import SharedComponent384 from '@/generated/components/SharedComponent384';
import SharedComponent385 from '@/generated/components/SharedComponent385';
import SharedComponent386 from '@/generated/components/SharedComponent386';
import SharedComponent387 from '@/generated/components/SharedComponent387';

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

export default async function SSGPage124() {
  const data = computePageData(124);
  
  const items = Array.from({ length: 20 }, (_, i) => ({
    id: `${124}-${i}`,
    value: 124 * 100 + i,
    label: `Page 124 Item`,
  }));
  
  return (
    <div className="p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 124
      </h1>
      <p className="text-sm text-zinc-500 mb-4">
        Generated: {data.generatedAt} | Checksum: {data.checksum.toFixed(4)}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {[SharedComponent368, SharedComponent369, SharedComponent370, SharedComponent371, SharedComponent372, SharedComponent373, SharedComponent374, SharedComponent375, SharedComponent376, SharedComponent377, SharedComponent378, SharedComponent379, SharedComponent380, SharedComponent381, SharedComponent382, SharedComponent383, SharedComponent384, SharedComponent385, SharedComponent386, SharedComponent387].map((Component, idx) => (
          <Component key={idx} {...items[idx]} />
        ))}
      </div>
    </div>
  );
}
