// SSG Page 0
import '@/generated/styles/page0.css';
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

export default async function SSGPage0() {
  return (
    <div className="page-0 p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-0-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 0
      </h1>
      <div className="page-0-content grid grid-cols-2 md:grid-cols-4 gap-2">
        <SharedComponent0 id="0-0" value={0} label="Item" />
        <SharedComponent1 id="0-1" value={1} label="Item" />
        <SharedComponent2 id="0-2" value={2} label="Item" />
        <SharedComponent3 id="0-3" value={3} label="Item" />
        <SharedComponent4 id="0-4" value={4} label="Item" />
        <SharedComponent5 id="0-5" value={5} label="Item" />
        <SharedComponent6 id="0-6" value={6} label="Item" />
        <SharedComponent7 id="0-7" value={7} label="Item" />
        <SharedComponent8 id="0-8" value={8} label="Item" />
        <SharedComponent9 id="0-9" value={9} label="Item" />
      </div>
    </div>
  );
}
