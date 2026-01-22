// SSG Page 400
import '@/generated/styles/page400.css';
import SharedComponent300 from '@/generated/components/SharedComponent300';
import SharedComponent301 from '@/generated/components/SharedComponent301';
import SharedComponent302 from '@/generated/components/SharedComponent302';
import SharedComponent303 from '@/generated/components/SharedComponent303';
import SharedComponent304 from '@/generated/components/SharedComponent304';
import SharedComponent305 from '@/generated/components/SharedComponent305';
import SharedComponent306 from '@/generated/components/SharedComponent306';
import SharedComponent307 from '@/generated/components/SharedComponent307';
import SharedComponent308 from '@/generated/components/SharedComponent308';
import SharedComponent309 from '@/generated/components/SharedComponent309';

export default async function SSGPage400() {
  return (
    <div className="page-400 p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-400-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 400
      </h1>
      <div className="page-400-content grid grid-cols-2 md:grid-cols-4 gap-2">
        <SharedComponent300 id="400-0" value={40000} label="Item" />
        <SharedComponent301 id="400-1" value={40001} label="Item" />
        <SharedComponent302 id="400-2" value={40002} label="Item" />
        <SharedComponent303 id="400-3" value={40003} label="Item" />
        <SharedComponent304 id="400-4" value={40004} label="Item" />
        <SharedComponent305 id="400-5" value={40005} label="Item" />
        <SharedComponent306 id="400-6" value={40006} label="Item" />
        <SharedComponent307 id="400-7" value={40007} label="Item" />
        <SharedComponent308 id="400-8" value={40008} label="Item" />
        <SharedComponent309 id="400-9" value={40009} label="Item" />
      </div>
    </div>
  );
}
