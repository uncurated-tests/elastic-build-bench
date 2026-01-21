// SSG Page 250
import '@/generated/styles/page250.css';
import SharedComponent250 from '@/generated/components/SharedComponent250';
import SharedComponent251 from '@/generated/components/SharedComponent251';
import SharedComponent252 from '@/generated/components/SharedComponent252';
import SharedComponent253 from '@/generated/components/SharedComponent253';
import SharedComponent254 from '@/generated/components/SharedComponent254';
import SharedComponent255 from '@/generated/components/SharedComponent255';
import SharedComponent256 from '@/generated/components/SharedComponent256';
import SharedComponent257 from '@/generated/components/SharedComponent257';
import SharedComponent258 from '@/generated/components/SharedComponent258';
import SharedComponent259 from '@/generated/components/SharedComponent259';

export default async function SSGPage250() {
  return (
    <div className="page-250 p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-250-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 250
      </h1>
      <div className="page-250-content grid grid-cols-2 md:grid-cols-4 gap-2">
        <SharedComponent250 id="250-0" value={25000} label="Item" />
        <SharedComponent251 id="250-1" value={25001} label="Item" />
        <SharedComponent252 id="250-2" value={25002} label="Item" />
        <SharedComponent253 id="250-3" value={25003} label="Item" />
        <SharedComponent254 id="250-4" value={25004} label="Item" />
        <SharedComponent255 id="250-5" value={25005} label="Item" />
        <SharedComponent256 id="250-6" value={25006} label="Item" />
        <SharedComponent257 id="250-7" value={25007} label="Item" />
        <SharedComponent258 id="250-8" value={25008} label="Item" />
        <SharedComponent259 id="250-9" value={25009} label="Item" />
      </div>
    </div>
  );
}
