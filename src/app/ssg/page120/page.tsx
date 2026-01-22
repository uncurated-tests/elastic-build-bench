// SSG Page 120
import '@/generated/styles/page120.css';
import SharedComponent340 from '@/generated/components/SharedComponent340';
import SharedComponent341 from '@/generated/components/SharedComponent341';
import SharedComponent342 from '@/generated/components/SharedComponent342';
import SharedComponent343 from '@/generated/components/SharedComponent343';
import SharedComponent344 from '@/generated/components/SharedComponent344';
import SharedComponent345 from '@/generated/components/SharedComponent345';
import SharedComponent346 from '@/generated/components/SharedComponent346';
import SharedComponent347 from '@/generated/components/SharedComponent347';
import SharedComponent348 from '@/generated/components/SharedComponent348';
import SharedComponent349 from '@/generated/components/SharedComponent349';

export default async function SSGPage120() {
  return (
    <div className="page-120 p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-120-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 120
      </h1>
      <div className="page-120-content grid grid-cols-2 md:grid-cols-4 gap-2">
        <SharedComponent340 id="120-0" value={12000} label="Item" />
        <SharedComponent341 id="120-1" value={12001} label="Item" />
        <SharedComponent342 id="120-2" value={12002} label="Item" />
        <SharedComponent343 id="120-3" value={12003} label="Item" />
        <SharedComponent344 id="120-4" value={12004} label="Item" />
        <SharedComponent345 id="120-5" value={12005} label="Item" />
        <SharedComponent346 id="120-6" value={12006} label="Item" />
        <SharedComponent347 id="120-7" value={12007} label="Item" />
        <SharedComponent348 id="120-8" value={12008} label="Item" />
        <SharedComponent349 id="120-9" value={12009} label="Item" />
      </div>
    </div>
  );
}
