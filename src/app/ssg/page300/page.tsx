// SSG Page 300
import '@/generated/styles/page300.css';
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

export default async function SSGPage300() {
  return (
    <div className="page-300 p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-300-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 300
      </h1>
      <div className="page-300-content grid grid-cols-2 md:grid-cols-4 gap-2">
        <SharedComponent100 id="300-0" value={30000} label="Item" />
        <SharedComponent101 id="300-1" value={30001} label="Item" />
        <SharedComponent102 id="300-2" value={30002} label="Item" />
        <SharedComponent103 id="300-3" value={30003} label="Item" />
        <SharedComponent104 id="300-4" value={30004} label="Item" />
        <SharedComponent105 id="300-5" value={30005} label="Item" />
        <SharedComponent106 id="300-6" value={30006} label="Item" />
        <SharedComponent107 id="300-7" value={30007} label="Item" />
        <SharedComponent108 id="300-8" value={30008} label="Item" />
        <SharedComponent109 id="300-9" value={30009} label="Item" />
      </div>
    </div>
  );
}
