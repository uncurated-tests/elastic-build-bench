// SSG Page 500
import '@/generated/styles/page500.css';
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

export default async function SSGPage500() {
  return (
    <div className="page-500 p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-500-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 500
      </h1>
      <div className="page-500-content grid grid-cols-2 md:grid-cols-4 gap-2">
        <SharedComponent0 id="500-0" value={50000} label="Item" />
        <SharedComponent1 id="500-1" value={50001} label="Item" />
        <SharedComponent2 id="500-2" value={50002} label="Item" />
        <SharedComponent3 id="500-3" value={50003} label="Item" />
        <SharedComponent4 id="500-4" value={50004} label="Item" />
        <SharedComponent5 id="500-5" value={50005} label="Item" />
        <SharedComponent6 id="500-6" value={50006} label="Item" />
        <SharedComponent7 id="500-7" value={50007} label="Item" />
        <SharedComponent8 id="500-8" value={50008} label="Item" />
        <SharedComponent9 id="500-9" value={50009} label="Item" />
      </div>
    </div>
  );
}
