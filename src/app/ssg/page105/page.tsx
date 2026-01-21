// SSG Page 105
import '@/generated/styles/page105.css';
import SharedComponent235 from '@/generated/components/SharedComponent235';
import SharedComponent236 from '@/generated/components/SharedComponent236';
import SharedComponent237 from '@/generated/components/SharedComponent237';
import SharedComponent238 from '@/generated/components/SharedComponent238';
import SharedComponent239 from '@/generated/components/SharedComponent239';
import SharedComponent240 from '@/generated/components/SharedComponent240';
import SharedComponent241 from '@/generated/components/SharedComponent241';
import SharedComponent242 from '@/generated/components/SharedComponent242';
import SharedComponent243 from '@/generated/components/SharedComponent243';
import SharedComponent244 from '@/generated/components/SharedComponent244';
import SharedComponent245 from '@/generated/components/SharedComponent245';
import SharedComponent246 from '@/generated/components/SharedComponent246';
import SharedComponent247 from '@/generated/components/SharedComponent247';
import SharedComponent248 from '@/generated/components/SharedComponent248';
import SharedComponent249 from '@/generated/components/SharedComponent249';
import SharedComponent250 from '@/generated/components/SharedComponent250';
import SharedComponent251 from '@/generated/components/SharedComponent251';
import SharedComponent252 from '@/generated/components/SharedComponent252';
import SharedComponent253 from '@/generated/components/SharedComponent253';
import SharedComponent254 from '@/generated/components/SharedComponent254';

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

export default async function SSGPage105() {
  const data = computePageData(105);
  
  const items = Array.from({ length: 20 }, (_, i) => ({
    id: `${105}-${i}`,
    value: 105 * 100 + i,
    label: `Page 105 Item`,
  }));
  
  return (
    <div className="page-105 p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-105-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 105
      </h1>
      <p className="text-sm text-zinc-500 mb-4">
        Generated: {data.generatedAt} | Checksum: {data.checksum.toFixed(4)}
      </p>
      <div className="page-105-content grid grid-cols-2 md:grid-cols-4 gap-2">
        {[SharedComponent235, SharedComponent236, SharedComponent237, SharedComponent238, SharedComponent239, SharedComponent240, SharedComponent241, SharedComponent242, SharedComponent243, SharedComponent244, SharedComponent245, SharedComponent246, SharedComponent247, SharedComponent248, SharedComponent249, SharedComponent250, SharedComponent251, SharedComponent252, SharedComponent253, SharedComponent254].map((Component, idx) => (
          <Component key={idx} {...items[idx]} />
        ))}
      </div>
    </div>
  );
}
