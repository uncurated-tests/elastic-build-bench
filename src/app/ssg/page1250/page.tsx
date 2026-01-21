// SSG Page 1250
import '@/generated/styles/page1250.css';
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

export default async function SSGPage1250() {
  return (
    <div className="page-1250 p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-1250-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 1250
      </h1>
      <div className="page-1250-content grid grid-cols-2 md:grid-cols-4 gap-2">
        <SharedComponent250 id="1250-0" value={125000} label="Item" />
        <SharedComponent251 id="1250-1" value={125001} label="Item" />
        <SharedComponent252 id="1250-2" value={125002} label="Item" />
        <SharedComponent253 id="1250-3" value={125003} label="Item" />
        <SharedComponent254 id="1250-4" value={125004} label="Item" />
        <SharedComponent255 id="1250-5" value={125005} label="Item" />
        <SharedComponent256 id="1250-6" value={125006} label="Item" />
        <SharedComponent257 id="1250-7" value={125007} label="Item" />
        <SharedComponent258 id="1250-8" value={125008} label="Item" />
        <SharedComponent259 id="1250-9" value={125009} label="Item" />
      </div>
    </div>
  );
}
