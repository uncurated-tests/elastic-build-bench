// SSG Page 125
import '@/generated/styles/page125.css';
import SharedComponent375 from '@/generated/components/SharedComponent375';
import SharedComponent376 from '@/generated/components/SharedComponent376';
import SharedComponent377 from '@/generated/components/SharedComponent377';
import SharedComponent378 from '@/generated/components/SharedComponent378';
import SharedComponent379 from '@/generated/components/SharedComponent379';
import SharedComponent380 from '@/generated/components/SharedComponent380';
import SharedComponent381 from '@/generated/components/SharedComponent381';
import SharedComponent382 from '@/generated/components/SharedComponent382';
import SharedComponent383 from '@/generated/components/SharedComponent383';
import SharedComponent384 from '@/generated/components/SharedComponent384';

export default async function SSGPage125() {
  return (
    <div className="page-125 p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-125-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 125
      </h1>
      <div className="page-125-content grid grid-cols-2 md:grid-cols-4 gap-2">
        <SharedComponent375 id="125-0" value={12500} label="Item" />
        <SharedComponent376 id="125-1" value={12501} label="Item" />
        <SharedComponent377 id="125-2" value={12502} label="Item" />
        <SharedComponent378 id="125-3" value={12503} label="Item" />
        <SharedComponent379 id="125-4" value={12504} label="Item" />
        <SharedComponent380 id="125-5" value={12505} label="Item" />
        <SharedComponent381 id="125-6" value={12506} label="Item" />
        <SharedComponent382 id="125-7" value={12507} label="Item" />
        <SharedComponent383 id="125-8" value={12508} label="Item" />
        <SharedComponent384 id="125-9" value={12509} label="Item" />
      </div>
    </div>
  );
}
