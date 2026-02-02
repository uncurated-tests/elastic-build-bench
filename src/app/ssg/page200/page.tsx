// SSG Page 200
import '@/generated/styles/page200.css';
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

export default async function SSGPage200() {
  return (
    <div className="page-200 p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-200-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 200
      </h1>
      <div className="page-200-content grid grid-cols-2 md:grid-cols-4 gap-2">
        <SharedComponent400 id="200-0" value={20000} label="Item" />
        <SharedComponent401 id="200-1" value={20001} label="Item" />
        <SharedComponent402 id="200-2" value={20002} label="Item" />
        <SharedComponent403 id="200-3" value={20003} label="Item" />
        <SharedComponent404 id="200-4" value={20004} label="Item" />
        <SharedComponent405 id="200-5" value={20005} label="Item" />
        <SharedComponent406 id="200-6" value={20006} label="Item" />
        <SharedComponent407 id="200-7" value={20007} label="Item" />
        <SharedComponent408 id="200-8" value={20008} label="Item" />
        <SharedComponent409 id="200-9" value={20009} label="Item" />
      </div>
    </div>
  );
}
