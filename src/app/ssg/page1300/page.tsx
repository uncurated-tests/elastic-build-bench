// SSG Page 1300
import '@/generated/styles/page1300.css';
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

export default async function SSGPage1300() {
  return (
    <div className="page-1300 p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-1300-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 1300
      </h1>
      <div className="page-1300-content grid grid-cols-2 md:grid-cols-4 gap-2">
        <SharedComponent100 id="1300-0" value={130000} label="Item" />
        <SharedComponent101 id="1300-1" value={130001} label="Item" />
        <SharedComponent102 id="1300-2" value={130002} label="Item" />
        <SharedComponent103 id="1300-3" value={130003} label="Item" />
        <SharedComponent104 id="1300-4" value={130004} label="Item" />
        <SharedComponent105 id="1300-5" value={130005} label="Item" />
        <SharedComponent106 id="1300-6" value={130006} label="Item" />
        <SharedComponent107 id="1300-7" value={130007} label="Item" />
        <SharedComponent108 id="1300-8" value={130008} label="Item" />
        <SharedComponent109 id="1300-9" value={130009} label="Item" />
      </div>
    </div>
  );
}
