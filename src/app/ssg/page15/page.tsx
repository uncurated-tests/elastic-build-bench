// SSG Page 15
import '@/generated/styles/page15.css';
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
import MuiIconComponent15 from '@/generated/barrel-components/MuiIconComponent15';

export default async function SSGPage15() {
  return (
    <div className="page-15 p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-15-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 15
      </h1>
      <div className="page-15-content grid grid-cols-2 md:grid-cols-4 gap-2">
        <SharedComponent105 id="15-0" value={1500} label="Item" />
        <SharedComponent106 id="15-1" value={1501} label="Item" />
        <SharedComponent107 id="15-2" value={1502} label="Item" />
        <SharedComponent108 id="15-3" value={1503} label="Item" />
        <SharedComponent109 id="15-4" value={1504} label="Item" />
        <SharedComponent110 id="15-5" value={1505} label="Item" />
        <SharedComponent111 id="15-6" value={1506} label="Item" />
        <SharedComponent112 id="15-7" value={1507} label="Item" />
        <SharedComponent113 id="15-8" value={1508} label="Item" />
        <SharedComponent114 id="15-9" value={1509} label="Item" />
        <MuiIconComponent15 size={20} color="#1976d2" />
      </div>
    </div>
  );
}
