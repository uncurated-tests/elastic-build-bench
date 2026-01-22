// SSG Page 72
import '@/generated/styles/page72.css';
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

export default async function SSGPage72() {
  return (
    <div className="page-72 p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-72-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 72
      </h1>
      <div className="page-72-content grid grid-cols-2 md:grid-cols-4 gap-2">
        <SharedComponent4 id="72-0" value={7200} label="Item" />
        <SharedComponent5 id="72-1" value={7201} label="Item" />
        <SharedComponent6 id="72-2" value={7202} label="Item" />
        <SharedComponent7 id="72-3" value={7203} label="Item" />
        <SharedComponent8 id="72-4" value={7204} label="Item" />
        <SharedComponent9 id="72-5" value={7205} label="Item" />
        <SharedComponent10 id="72-6" value={7206} label="Item" />
        <SharedComponent11 id="72-7" value={7207} label="Item" />
        <SharedComponent12 id="72-8" value={7208} label="Item" />
        <SharedComponent13 id="72-9" value={7209} label="Item" />
      </div>
    </div>
  );
}
