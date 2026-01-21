// SSG Page 1301
import '@/generated/styles/page1301.css';
import SharedComponent107 from '@/generated/components/SharedComponent107';
import SharedComponent108 from '@/generated/components/SharedComponent108';
import SharedComponent109 from '@/generated/components/SharedComponent109';
import SharedComponent110 from '@/generated/components/SharedComponent110';
import SharedComponent111 from '@/generated/components/SharedComponent111';
import SharedComponent112 from '@/generated/components/SharedComponent112';
import SharedComponent113 from '@/generated/components/SharedComponent113';
import SharedComponent114 from '@/generated/components/SharedComponent114';
import SharedComponent115 from '@/generated/components/SharedComponent115';
import SharedComponent116 from '@/generated/components/SharedComponent116';
import SharedComponent117 from '@/generated/components/SharedComponent117';
import SharedComponent118 from '@/generated/components/SharedComponent118';
import SharedComponent119 from '@/generated/components/SharedComponent119';
import SharedComponent120 from '@/generated/components/SharedComponent120';
import SharedComponent121 from '@/generated/components/SharedComponent121';
import SharedComponent122 from '@/generated/components/SharedComponent122';
import SharedComponent123 from '@/generated/components/SharedComponent123';
import SharedComponent124 from '@/generated/components/SharedComponent124';
import SharedComponent125 from '@/generated/components/SharedComponent125';
import SharedComponent126 from '@/generated/components/SharedComponent126';

export default async function SSGPage1301() {
  const data = {
    pageId: 1301,
    generatedAt: new Date().toISOString(),
  };
  
  const items = Array.from({ length: 20 }, (_, i) => ({
    id: `${1301}-${i}`,
    value: 1301 * 100 + i,
    label: `Page 1301 Item`,
  }));
  
  return (
    <div className="page-1301 p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-1301-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 1301 
      </h1>
      <p className="text-sm text-zinc-500 mb-4">
        Generated: {data.generatedAt}
      </p>
      <div className="page-1301-content grid grid-cols-2 md:grid-cols-4 gap-2">
        {[SharedComponent107, SharedComponent108, SharedComponent109, SharedComponent110, SharedComponent111, SharedComponent112, SharedComponent113, SharedComponent114, SharedComponent115, SharedComponent116, SharedComponent117, SharedComponent118, SharedComponent119, SharedComponent120, SharedComponent121, SharedComponent122, SharedComponent123, SharedComponent124, SharedComponent125, SharedComponent126].map((Component, idx) => (
          <Component key={idx} {...items[idx]} />
        ))}
      </div>
    </div>
  );
}
