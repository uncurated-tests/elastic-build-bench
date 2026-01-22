// SSG Page 2
import '@/generated/styles/page2.css';
import SharedComponent14 from '@/generated/components/SharedComponent14';
import SharedComponent15 from '@/generated/components/SharedComponent15';
import SharedComponent16 from '@/generated/components/SharedComponent16';
import SharedComponent17 from '@/generated/components/SharedComponent17';
import SharedComponent18 from '@/generated/components/SharedComponent18';
import SharedComponent19 from '@/generated/components/SharedComponent19';
import SharedComponent20 from '@/generated/components/SharedComponent20';
import SharedComponent21 from '@/generated/components/SharedComponent21';
import SharedComponent22 from '@/generated/components/SharedComponent22';
import SharedComponent23 from '@/generated/components/SharedComponent23';

export default async function SSGPage2() {
  return (
    <div className="page-2 p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-2-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 2
      </h1>
      <div className="page-2-content grid grid-cols-2 md:grid-cols-4 gap-2">
        <SharedComponent14 id="2-0" value={200} label="Item" />
        <SharedComponent15 id="2-1" value={201} label="Item" />
        <SharedComponent16 id="2-2" value={202} label="Item" />
        <SharedComponent17 id="2-3" value={203} label="Item" />
        <SharedComponent18 id="2-4" value={204} label="Item" />
        <SharedComponent19 id="2-5" value={205} label="Item" />
        <SharedComponent20 id="2-6" value={206} label="Item" />
        <SharedComponent21 id="2-7" value={207} label="Item" />
        <SharedComponent22 id="2-8" value={208} label="Item" />
        <SharedComponent23 id="2-9" value={209} label="Item" />
      </div>
    </div>
  );
}
