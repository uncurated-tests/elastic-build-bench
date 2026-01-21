// SSG Page 1200
import '@/generated/styles/page1200.css';
import SharedComponent400 from '@/generated/components/SharedComponent400';
import SharedComponent401 from '@/generated/components/SharedComponent401';
import SharedComponent402 from '@/generated/components/SharedComponent402';
import SharedComponent403 from '@/generated/components/SharedComponent403';
import SharedComponent404 from '@/generated/components/SharedComponent404';
import SharedComponent405 from '@/generated/components/SharedComponent405';
import SharedComponent406 from '@/generated/components/SharedComponent406';
import SharedComponent407 from '@/generated/components/SharedComponent407';
import SharedComponent408 from '@/generated/components/SharedComponent408';
import SharedComponent409 from '@/generated/components/SharedComponent409';

export default async function SSGPage1200() {
  return (
    <div className="page-1200 p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-1200-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 1200
      </h1>
      <div className="page-1200-content grid grid-cols-2 md:grid-cols-4 gap-2">
        <SharedComponent400 id="1200-0" value={120000} label="Item" />
        <SharedComponent401 id="1200-1" value={120001} label="Item" />
        <SharedComponent402 id="1200-2" value={120002} label="Item" />
        <SharedComponent403 id="1200-3" value={120003} label="Item" />
        <SharedComponent404 id="1200-4" value={120004} label="Item" />
        <SharedComponent405 id="1200-5" value={120005} label="Item" />
        <SharedComponent406 id="1200-6" value={120006} label="Item" />
        <SharedComponent407 id="1200-7" value={120007} label="Item" />
        <SharedComponent408 id="1200-8" value={120008} label="Item" />
        <SharedComponent409 id="1200-9" value={120009} label="Item" />
      </div>
    </div>
  );
}
