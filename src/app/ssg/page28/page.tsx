// SSG Page 28
import '@/generated/styles/page28.css';
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
import SharedComponent209 from '@/generated/components/SharedComponent209';
import SharedComponent210 from '@/generated/components/SharedComponent210';
import SharedComponent211 from '@/generated/components/SharedComponent211';
import SharedComponent212 from '@/generated/components/SharedComponent212';
import SharedComponent213 from '@/generated/components/SharedComponent213';
import SharedComponent214 from '@/generated/components/SharedComponent214';
import SharedComponent215 from '@/generated/components/SharedComponent215';

export default async function SSGPage28() {
  const data = {
    pageId: 28,
    generatedAt: new Date().toISOString(),
  };
  
  const items = Array.from({ length: 20 }, (_, i) => ({
    id: `${28}-${i}`,
    value: 28 * 100 + i,
    label: `Page 28 Item`,
  }));
  
  return (
    <div className="page-28 p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-28-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 28 
      </h1>
      <p className="text-sm text-zinc-500 mb-4">
        Generated: {data.generatedAt}
      </p>
      <div className="page-28-content grid grid-cols-2 md:grid-cols-4 gap-2">
        {[SharedComponent196, SharedComponent197, SharedComponent198, SharedComponent199, SharedComponent200, SharedComponent201, SharedComponent202, SharedComponent203, SharedComponent204, SharedComponent205, SharedComponent206, SharedComponent207, SharedComponent208, SharedComponent209, SharedComponent210, SharedComponent211, SharedComponent212, SharedComponent213, SharedComponent214, SharedComponent215].map((Component, idx) => (
          <Component key={idx} {...items[idx]} />
        ))}
      </div>
    </div>
  );
}
