// SSG Page 1700
import '@/generated/styles/page1700.css';
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

export default async function SSGPage1700() {
  return (
    <div className="page-1700 p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-1700-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 1700
      </h1>
      <div className="page-1700-content grid grid-cols-2 md:grid-cols-4 gap-2">
        <SharedComponent400 id="1700-0" value={170000} label="Item" />
        <SharedComponent401 id="1700-1" value={170001} label="Item" />
        <SharedComponent402 id="1700-2" value={170002} label="Item" />
        <SharedComponent403 id="1700-3" value={170003} label="Item" />
        <SharedComponent404 id="1700-4" value={170004} label="Item" />
        <SharedComponent405 id="1700-5" value={170005} label="Item" />
        <SharedComponent406 id="1700-6" value={170006} label="Item" />
        <SharedComponent407 id="1700-7" value={170007} label="Item" />
        <SharedComponent408 id="1700-8" value={170008} label="Item" />
        <SharedComponent409 id="1700-9" value={170009} label="Item" />
      </div>
    </div>
  );
}
