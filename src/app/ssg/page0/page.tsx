// SSG Page 0
import '@/generated/styles/page0.css';
import { Home, Settings, Person, Search, Menu } from '@mui/icons-material';
import SharedComponent0 from '@/generated/components/SharedComponent0';
import SharedComponent1 from '@/generated/components/SharedComponent1';
import SharedComponent2 from '@/generated/components/SharedComponent2';
import SharedComponent3 from '@/generated/components/SharedComponent3';
import SharedComponent4 from '@/generated/components/SharedComponent4';
import SharedComponent5 from '@/generated/components/SharedComponent5';
import SharedComponent6 from '@/generated/components/SharedComponent6';
import SharedComponent7 from '@/generated/components/SharedComponent7';
import SharedComponent8 from '@/generated/components/SharedComponent8';
import SharedComponent9 from '@/generated/components/SharedComponent9';
import SharedComponent10 from '@/generated/components/SharedComponent10';
import SharedComponent11 from '@/generated/components/SharedComponent11';
import SharedComponent12 from '@/generated/components/SharedComponent12';
import SharedComponent13 from '@/generated/components/SharedComponent13';
import SharedComponent14 from '@/generated/components/SharedComponent14';
import SharedComponent15 from '@/generated/components/SharedComponent15';
import SharedComponent16 from '@/generated/components/SharedComponent16';
import SharedComponent17 from '@/generated/components/SharedComponent17';
import SharedComponent18 from '@/generated/components/SharedComponent18';
import SharedComponent19 from '@/generated/components/SharedComponent19';

export default async function SSGPage0() {
  const data = {
    pageId: 0,
    generatedAt: new Date().toISOString(),
  };
  
  const items = Array.from({ length: 20 }, (_, i) => ({
    id: `${0}-${i}`,
    value: 0 * 100 + i,
    label: `Page 0 Item`,
  }));
  
  return (
    <div className="page-0 p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-0-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 0 <Home className="w-4 h-4" />
      </h1>
      <p className="text-sm text-zinc-500 mb-4">
        Generated: {data.generatedAt}
      </p>
      <div className="page-0-content grid grid-cols-2 md:grid-cols-4 gap-2">
        {[SharedComponent0, SharedComponent1, SharedComponent2, SharedComponent3, SharedComponent4, SharedComponent5, SharedComponent6, SharedComponent7, SharedComponent8, SharedComponent9, SharedComponent10, SharedComponent11, SharedComponent12, SharedComponent13, SharedComponent14, SharedComponent15, SharedComponent16, SharedComponent17, SharedComponent18, SharedComponent19].map((Component, idx) => (
          <Component key={idx} {...items[idx]} />
        ))}
      </div>
    </div>
  );
}
