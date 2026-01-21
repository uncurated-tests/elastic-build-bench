// SSG Page 4 - Pre-rendered at build time
import SharedComponent28 from '@/generated/components/SharedComponent28';
import SharedComponent29 from '@/generated/components/SharedComponent29';
import SharedComponent30 from '@/generated/components/SharedComponent30';
import SharedComponent31 from '@/generated/components/SharedComponent31';
import SharedComponent32 from '@/generated/components/SharedComponent32';
import SharedComponent33 from '@/generated/components/SharedComponent33';
import SharedComponent34 from '@/generated/components/SharedComponent34';
import SharedComponent35 from '@/generated/components/SharedComponent35';
import SharedComponent36 from '@/generated/components/SharedComponent36';
import SharedComponent37 from '@/generated/components/SharedComponent37';
import SharedComponent38 from '@/generated/components/SharedComponent38';
import SharedComponent39 from '@/generated/components/SharedComponent39';
import SharedComponent40 from '@/generated/components/SharedComponent40';
import SharedComponent41 from '@/generated/components/SharedComponent41';
import SharedComponent42 from '@/generated/components/SharedComponent42';
import SharedComponent43 from '@/generated/components/SharedComponent43';
import SharedComponent44 from '@/generated/components/SharedComponent44';
import SharedComponent45 from '@/generated/components/SharedComponent45';
import SharedComponent46 from '@/generated/components/SharedComponent46';
import SharedComponent47 from '@/generated/components/SharedComponent47';

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

export default async function SSGPage4() {
  const data = computePageData(4);
  
  const items = Array.from({ length: 20 }, (_, i) => ({
    id: `${4}-${i}`,
    value: 4 * 100 + i,
    label: `Page 4 Item`,
  }));
  
  return (
    <div className="p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 4
      </h1>
      <p className="text-sm text-zinc-500 mb-4">
        Generated: {data.generatedAt} | Checksum: {data.checksum.toFixed(4)}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {[SharedComponent28, SharedComponent29, SharedComponent30, SharedComponent31, SharedComponent32, SharedComponent33, SharedComponent34, SharedComponent35, SharedComponent36, SharedComponent37, SharedComponent38, SharedComponent39, SharedComponent40, SharedComponent41, SharedComponent42, SharedComponent43, SharedComponent44, SharedComponent45, SharedComponent46, SharedComponent47].map((Component, idx) => (
          <Component key={idx} {...items[idx]} />
        ))}
      </div>
    </div>
  );
}
