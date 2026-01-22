// SSG Page 1400
import '@/generated/styles/page1400.css';
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

export default async function SSGPage1400() {
  return (
    <div className="page-1400 p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-1400-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 1400
      </h1>
      <div className="page-1400-content grid grid-cols-2 md:grid-cols-4 gap-2">
        <SharedComponent300 id="1400-0" value={140000} label="Item" />
        <SharedComponent301 id="1400-1" value={140001} label="Item" />
        <SharedComponent302 id="1400-2" value={140002} label="Item" />
        <SharedComponent303 id="1400-3" value={140003} label="Item" />
        <SharedComponent304 id="1400-4" value={140004} label="Item" />
        <SharedComponent305 id="1400-5" value={140005} label="Item" />
        <SharedComponent306 id="1400-6" value={140006} label="Item" />
        <SharedComponent307 id="1400-7" value={140007} label="Item" />
        <SharedComponent308 id="1400-8" value={140008} label="Item" />
        <SharedComponent309 id="1400-9" value={140009} label="Item" />
      </div>
    </div>
  );
}
