// SSG Page 800
import '@/generated/styles/page800.css';
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

export default async function SSGPage800() {
  return (
    <div className="page-800 p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-800-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 800
      </h1>
      <div className="page-800-content grid grid-cols-2 md:grid-cols-4 gap-2">
        <SharedComponent100 id="800-0" value={80000} label="Item" />
        <SharedComponent101 id="800-1" value={80001} label="Item" />
        <SharedComponent102 id="800-2" value={80002} label="Item" />
        <SharedComponent103 id="800-3" value={80003} label="Item" />
        <SharedComponent104 id="800-4" value={80004} label="Item" />
        <SharedComponent105 id="800-5" value={80005} label="Item" />
        <SharedComponent106 id="800-6" value={80006} label="Item" />
        <SharedComponent107 id="800-7" value={80007} label="Item" />
        <SharedComponent108 id="800-8" value={80008} label="Item" />
        <SharedComponent109 id="800-9" value={80009} label="Item" />
      </div>
    </div>
  );
}
