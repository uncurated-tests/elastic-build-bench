// SSG Page 27
import '@/generated/styles/page27.css';
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

export default async function SSGPage27() {
  const data = {
    pageId: 27,
    generatedAt: new Date().toISOString(),
  };
  
  const items = Array.from({ length: 20 }, (_, i) => ({
    id: `${27}-${i}`,
    value: 27 * 100 + i,
    label: `Page 27 Item`,
  }));
  
  return (
    <div className="page-27 p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-27-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 27 
      </h1>
      <p className="text-sm text-zinc-500 mb-4">
        Generated: {data.generatedAt}
      </p>
      <div className="page-27-content grid grid-cols-2 md:grid-cols-4 gap-2">
        {[SharedComponent189, SharedComponent190, SharedComponent191, SharedComponent192, SharedComponent193, SharedComponent194, SharedComponent195, SharedComponent196, SharedComponent197, SharedComponent198, SharedComponent199, SharedComponent200, SharedComponent201, SharedComponent202, SharedComponent203, SharedComponent204, SharedComponent205, SharedComponent206, SharedComponent207, SharedComponent208].map((Component, idx) => (
          <Component key={idx} {...items[idx]} />
        ))}
      </div>
    </div>
  );
}
