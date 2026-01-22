// SSG Page 1
import '@/generated/styles/page1.css';
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

export default async function SSGPage1() {
  return (
    <div className="page-1 p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-1-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 1
      </h1>
      <div className="page-1-content grid grid-cols-2 md:grid-cols-4 gap-2">
        <SharedComponent7 id="1-0" value={100} label="Item" />
        <SharedComponent8 id="1-1" value={101} label="Item" />
        <SharedComponent9 id="1-2" value={102} label="Item" />
        <SharedComponent10 id="1-3" value={103} label="Item" />
        <SharedComponent11 id="1-4" value={104} label="Item" />
        <SharedComponent12 id="1-5" value={105} label="Item" />
        <SharedComponent13 id="1-6" value={106} label="Item" />
        <SharedComponent14 id="1-7" value={107} label="Item" />
        <SharedComponent15 id="1-8" value={108} label="Item" />
        <SharedComponent16 id="1-9" value={109} label="Item" />
      </div>
    </div>
  );
}
