// SSG Page 4
import '@/generated/styles/page4.css';
import SharedComponent28 from '@/generated/components/SharedComponent28';
import SharedComponent29 from '@/generated/components/SharedComponent29';
import SharedComponent30 from '@/generated/components/SharedComponent30';
import SharedComponent31 from '@/generated/components/SharedComponent31';
import SharedComponent32 from '@/generated/components/SharedComponent32';
import SharedComponent33 from '@/generated/components/SharedComponent33';
import SharedComponent34 from '@/generated/components/SharedComponent34';
import SharedComponent35 from '@/generated/components/SharedComponent35';
import SharedComponent36 from '@/generated/components/SharedComponent36';
import SharedComponent37 from '@/generated/components/SharedComponent37';

export default async function SSGPage4() {
  return (
    <div className="page-4 p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-4-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 4
      </h1>
      <div className="page-4-content grid grid-cols-2 md:grid-cols-4 gap-2">
        <SharedComponent28 id="4-0" value={400} label="Item" />
        <SharedComponent29 id="4-1" value={401} label="Item" />
        <SharedComponent30 id="4-2" value={402} label="Item" />
        <SharedComponent31 id="4-3" value={403} label="Item" />
        <SharedComponent32 id="4-4" value={404} label="Item" />
        <SharedComponent33 id="4-5" value={405} label="Item" />
        <SharedComponent34 id="4-6" value={406} label="Item" />
        <SharedComponent35 id="4-7" value={407} label="Item" />
        <SharedComponent36 id="4-8" value={408} label="Item" />
        <SharedComponent37 id="4-9" value={409} label="Item" />
      </div>
    </div>
  );
}
