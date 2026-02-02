// SSG Page 100
import '@/generated/styles/page100.css';
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

export default async function SSGPage100() {
  return (
    <div className="page-100 p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-100-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 100
      </h1>
      <div className="page-100-content grid grid-cols-2 md:grid-cols-4 gap-2">
        <SharedComponent200 id="100-0" value={10000} label="Item" />
        <SharedComponent201 id="100-1" value={10001} label="Item" />
        <SharedComponent202 id="100-2" value={10002} label="Item" />
        <SharedComponent203 id="100-3" value={10003} label="Item" />
        <SharedComponent204 id="100-4" value={10004} label="Item" />
        <SharedComponent205 id="100-5" value={10005} label="Item" />
        <SharedComponent206 id="100-6" value={10006} label="Item" />
        <SharedComponent207 id="100-7" value={10007} label="Item" />
        <SharedComponent208 id="100-8" value={10008} label="Item" />
        <SharedComponent209 id="100-9" value={10009} label="Item" />
      </div>
    </div>
  );
}
