// SSG Page 600
import '@/generated/styles/page600.css';
import SharedComponent200 from '@/generated/components/SharedComponent200';
import SharedComponent201 from '@/generated/components/SharedComponent201';
import SharedComponent202 from '@/generated/components/SharedComponent202';
import SharedComponent203 from '@/generated/components/SharedComponent203';
import SharedComponent204 from '@/generated/components/SharedComponent204';
import SharedComponent205 from '@/generated/components/SharedComponent205';
import SharedComponent206 from '@/generated/components/SharedComponent206';
import SharedComponent207 from '@/generated/components/SharedComponent207';
import SharedComponent208 from '@/generated/components/SharedComponent208';
import SharedComponent209 from '@/generated/components/SharedComponent209';

export default async function SSGPage600() {
  return (
    <div className="page-600 p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-600-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 600
      </h1>
      <div className="page-600-content grid grid-cols-2 md:grid-cols-4 gap-2">
        <SharedComponent200 id="600-0" value={60000} label="Item" />
        <SharedComponent201 id="600-1" value={60001} label="Item" />
        <SharedComponent202 id="600-2" value={60002} label="Item" />
        <SharedComponent203 id="600-3" value={60003} label="Item" />
        <SharedComponent204 id="600-4" value={60004} label="Item" />
        <SharedComponent205 id="600-5" value={60005} label="Item" />
        <SharedComponent206 id="600-6" value={60006} label="Item" />
        <SharedComponent207 id="600-7" value={60007} label="Item" />
        <SharedComponent208 id="600-8" value={60008} label="Item" />
        <SharedComponent209 id="600-9" value={60009} label="Item" />
      </div>
    </div>
  );
}
