// SSG Page 700
import '@/generated/styles/page700.css';
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

export default async function SSGPage700() {
  return (
    <div className="page-700 p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-700-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 700
      </h1>
      <div className="page-700-content grid grid-cols-2 md:grid-cols-4 gap-2">
        <SharedComponent400 id="700-0" value={70000} label="Item" />
        <SharedComponent401 id="700-1" value={70001} label="Item" />
        <SharedComponent402 id="700-2" value={70002} label="Item" />
        <SharedComponent403 id="700-3" value={70003} label="Item" />
        <SharedComponent404 id="700-4" value={70004} label="Item" />
        <SharedComponent405 id="700-5" value={70005} label="Item" />
        <SharedComponent406 id="700-6" value={70006} label="Item" />
        <SharedComponent407 id="700-7" value={70007} label="Item" />
        <SharedComponent408 id="700-8" value={70008} label="Item" />
        <SharedComponent409 id="700-9" value={70009} label="Item" />
      </div>
    </div>
  );
}
