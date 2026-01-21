// SSG Page 6
import '@/generated/styles/page6.css';
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
import SharedComponent55 from '@/generated/components/SharedComponent55';
import SharedComponent56 from '@/generated/components/SharedComponent56';
import SharedComponent57 from '@/generated/components/SharedComponent57';
import SharedComponent58 from '@/generated/components/SharedComponent58';
import SharedComponent59 from '@/generated/components/SharedComponent59';
import SharedComponent60 from '@/generated/components/SharedComponent60';
import SharedComponent61 from '@/generated/components/SharedComponent61';

export default async function SSGPage6() {
  const data = {
    pageId: 6,
    generatedAt: new Date().toISOString(),
  };
  
  const items = Array.from({ length: 20 }, (_, i) => ({
    id: `${6}-${i}`,
    value: 6 * 100 + i,
    label: `Page 6 Item`,
  }));
  
  return (
    <div className="page-6 p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-6-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 6 
      </h1>
      <p className="text-sm text-zinc-500 mb-4">
        Generated: {data.generatedAt}
      </p>
      <div className="page-6-content grid grid-cols-2 md:grid-cols-4 gap-2">
        {[SharedComponent42, SharedComponent43, SharedComponent44, SharedComponent45, SharedComponent46, SharedComponent47, SharedComponent48, SharedComponent49, SharedComponent50, SharedComponent51, SharedComponent52, SharedComponent53, SharedComponent54, SharedComponent55, SharedComponent56, SharedComponent57, SharedComponent58, SharedComponent59, SharedComponent60, SharedComponent61].map((Component, idx) => (
          <Component key={idx} {...items[idx]} />
        ))}
      </div>
    </div>
  );
}
