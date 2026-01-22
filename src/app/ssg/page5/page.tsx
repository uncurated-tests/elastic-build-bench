// SSG Page 5
import '@/generated/styles/page5.css';
import SharedComponent35 from '@/generated/components/SharedComponent35';
import SharedComponent36 from '@/generated/components/SharedComponent36';
import SharedComponent37 from '@/generated/components/SharedComponent37';
import SharedComponent38 from '@/generated/components/SharedComponent38';
import SharedComponent39 from '@/generated/components/SharedComponent39';
import SharedComponent40 from '@/generated/components/SharedComponent40';
import SharedComponent41 from '@/generated/components/SharedComponent41';
import SharedComponent42 from '@/generated/components/SharedComponent42';
import SharedComponent43 from '@/generated/components/SharedComponent43';
import SharedComponent44 from '@/generated/components/SharedComponent44';

export default async function SSGPage5() {
  return (
    <div className="page-5 p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-5-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 5
      </h1>
      <div className="page-5-content grid grid-cols-2 md:grid-cols-4 gap-2">
        <SharedComponent35 id="5-0" value={500} label="Item" />
        <SharedComponent36 id="5-1" value={501} label="Item" />
        <SharedComponent37 id="5-2" value={502} label="Item" />
        <SharedComponent38 id="5-3" value={503} label="Item" />
        <SharedComponent39 id="5-4" value={504} label="Item" />
        <SharedComponent40 id="5-5" value={505} label="Item" />
        <SharedComponent41 id="5-6" value={506} label="Item" />
        <SharedComponent42 id="5-7" value={507} label="Item" />
        <SharedComponent43 id="5-8" value={508} label="Item" />
        <SharedComponent44 id="5-9" value={509} label="Item" />
      </div>
    </div>
  );
}
