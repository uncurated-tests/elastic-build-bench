// SSG Page 180
import '@/generated/styles/page180.css';
import SharedComponent260 from '@/generated/components/SharedComponent260';
import SharedComponent261 from '@/generated/components/SharedComponent261';
import SharedComponent262 from '@/generated/components/SharedComponent262';
import SharedComponent263 from '@/generated/components/SharedComponent263';
import SharedComponent264 from '@/generated/components/SharedComponent264';
import SharedComponent265 from '@/generated/components/SharedComponent265';
import SharedComponent266 from '@/generated/components/SharedComponent266';
import SharedComponent267 from '@/generated/components/SharedComponent267';
import SharedComponent268 from '@/generated/components/SharedComponent268';
import SharedComponent269 from '@/generated/components/SharedComponent269';
import SharedComponent270 from '@/generated/components/SharedComponent270';
import SharedComponent271 from '@/generated/components/SharedComponent271';
import SharedComponent272 from '@/generated/components/SharedComponent272';
import SharedComponent273 from '@/generated/components/SharedComponent273';
import SharedComponent274 from '@/generated/components/SharedComponent274';
import SharedComponent275 from '@/generated/components/SharedComponent275';
import SharedComponent276 from '@/generated/components/SharedComponent276';
import SharedComponent277 from '@/generated/components/SharedComponent277';
import SharedComponent278 from '@/generated/components/SharedComponent278';
import SharedComponent279 from '@/generated/components/SharedComponent279';

function computePageData(pageId: number) {
  let result = pageId;
  for (let i = 0; i < 1000; i++) {
    result = Math.sin(result + i * 0.001) * Math.cos(result) + Math.sqrt(Math.abs(result) + 1);
  }
  return {
    pageId,
    checksum: result,
    generatedAt: new Date().toISOString(),
  };
}

export default async function SSGPage180() {
  const data = computePageData(180);
  
  const items = Array.from({ length: 20 }, (_, i) => ({
    id: `${180}-${i}`,
    value: 180 * 100 + i,
    label: `Page 180 Item`,
  }));
  
  return (
    <div className="page-180 p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-180-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 180
      </h1>
      <p className="text-sm text-zinc-500 mb-4">
        Generated: {data.generatedAt} | Checksum: {data.checksum.toFixed(4)}
      </p>
      <div className="page-180-content grid grid-cols-2 md:grid-cols-4 gap-2">
        {[SharedComponent260, SharedComponent261, SharedComponent262, SharedComponent263, SharedComponent264, SharedComponent265, SharedComponent266, SharedComponent267, SharedComponent268, SharedComponent269, SharedComponent270, SharedComponent271, SharedComponent272, SharedComponent273, SharedComponent274, SharedComponent275, SharedComponent276, SharedComponent277, SharedComponent278, SharedComponent279].map((Component, idx) => (
          <Component key={idx} {...items[idx]} />
        ))}
      </div>
    </div>
  );
}
