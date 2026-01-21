// SSG Page 5
import '@/generated/styles/page5.css';
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
import SharedComponent48 from '@/generated/components/SharedComponent48';
import SharedComponent49 from '@/generated/components/SharedComponent49';
import SharedComponent50 from '@/generated/components/SharedComponent50';
import SharedComponent51 from '@/generated/components/SharedComponent51';
import SharedComponent52 from '@/generated/components/SharedComponent52';
import SharedComponent53 from '@/generated/components/SharedComponent53';
import SharedComponent54 from '@/generated/components/SharedComponent54';

export default async function SSGPage5() {
  const data = {
    pageId: 5,
    generatedAt: new Date().toISOString(),
  };
  
  const items = Array.from({ length: 20 }, (_, i) => ({
    id: `${5}-${i}`,
    value: 5 * 100 + i,
    label: `Page 5 Item`,
  }));
  
  return (
    <div className="page-5 p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-5-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 5 
      </h1>
      <p className="text-sm text-zinc-500 mb-4">
        Generated: {data.generatedAt}
      </p>
      <div className="page-5-content grid grid-cols-2 md:grid-cols-4 gap-2">
        {[SharedComponent35, SharedComponent36, SharedComponent37, SharedComponent38, SharedComponent39, SharedComponent40, SharedComponent41, SharedComponent42, SharedComponent43, SharedComponent44, SharedComponent45, SharedComponent46, SharedComponent47, SharedComponent48, SharedComponent49, SharedComponent50, SharedComponent51, SharedComponent52, SharedComponent53, SharedComponent54].map((Component, idx) => (
          <Component key={idx} {...items[idx]} />
        ))}
      </div>
    </div>
  );
}
