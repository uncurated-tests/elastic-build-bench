// SSG Page 1500
import '@/generated/styles/page1500.css';
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

export default async function SSGPage1500() {
  return (
    <div className="page-1500 p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-1500-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 1500
      </h1>
      <div className="page-1500-content grid grid-cols-2 md:grid-cols-4 gap-2">
        <SharedComponent0 id="1500-0" value={150000} label="Item" />
        <SharedComponent1 id="1500-1" value={150001} label="Item" />
        <SharedComponent2 id="1500-2" value={150002} label="Item" />
        <SharedComponent3 id="1500-3" value={150003} label="Item" />
        <SharedComponent4 id="1500-4" value={150004} label="Item" />
        <SharedComponent5 id="1500-5" value={150005} label="Item" />
        <SharedComponent6 id="1500-6" value={150006} label="Item" />
        <SharedComponent7 id="1500-7" value={150007} label="Item" />
        <SharedComponent8 id="1500-8" value={150008} label="Item" />
        <SharedComponent9 id="1500-9" value={150009} label="Item" />
      </div>
    </div>
  );
}
