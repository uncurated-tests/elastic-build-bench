// SSG Page 1300
import '@/generated/styles/page1300.css';
import { Home, Settings, Person, Search, Menu } from '@mui/icons-material';
import SharedComponent100 from '@/generated/components/SharedComponent100';
import SharedComponent101 from '@/generated/components/SharedComponent101';
import SharedComponent102 from '@/generated/components/SharedComponent102';
import SharedComponent103 from '@/generated/components/SharedComponent103';
import SharedComponent104 from '@/generated/components/SharedComponent104';
import SharedComponent105 from '@/generated/components/SharedComponent105';
import SharedComponent106 from '@/generated/components/SharedComponent106';
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

export default async function SSGPage1300() {
  const data = {
    pageId: 1300,
    generatedAt: new Date().toISOString(),
  };
  
  const items = Array.from({ length: 20 }, (_, i) => ({
    id: `${1300}-${i}`,
    value: 1300 * 100 + i,
    label: `Page 1300 Item`,
  }));
  
  return (
    <div className="page-1300 p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-1300-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 1300 <Home className="w-4 h-4" />
      </h1>
      <p className="text-sm text-zinc-500 mb-4">
        Generated: {data.generatedAt}
      </p>
      <div className="page-1300-content grid grid-cols-2 md:grid-cols-4 gap-2">
        {[SharedComponent100, SharedComponent101, SharedComponent102, SharedComponent103, SharedComponent104, SharedComponent105, SharedComponent106, SharedComponent107, SharedComponent108, SharedComponent109, SharedComponent110, SharedComponent111, SharedComponent112, SharedComponent113, SharedComponent114, SharedComponent115, SharedComponent116, SharedComponent117, SharedComponent118, SharedComponent119].map((Component, idx) => (
          <Component key={idx} {...items[idx]} />
        ))}
      </div>
    </div>
  );
}
