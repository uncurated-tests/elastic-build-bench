// SSG Page 750
import '@/generated/styles/page750.css';
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

export default async function SSGPage750() {
  return (
    <div className="page-750 p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-750-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 750
      </h1>
      <div className="page-750-content grid grid-cols-2 md:grid-cols-4 gap-2">
        <SharedComponent250 id="750-0" value={75000} label="Item" />
        <SharedComponent251 id="750-1" value={75001} label="Item" />
        <SharedComponent252 id="750-2" value={75002} label="Item" />
        <SharedComponent253 id="750-3" value={75003} label="Item" />
        <SharedComponent254 id="750-4" value={75004} label="Item" />
        <SharedComponent255 id="750-5" value={75005} label="Item" />
        <SharedComponent256 id="750-6" value={75006} label="Item" />
        <SharedComponent257 id="750-7" value={75007} label="Item" />
        <SharedComponent258 id="750-8" value={75008} label="Item" />
        <SharedComponent259 id="750-9" value={75009} label="Item" />
      </div>
    </div>
  );
}
