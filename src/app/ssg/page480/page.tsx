// SSG Page 480
import '@/generated/styles/page480.css';
import SharedComponent360 from '@/generated/components/SharedComponent360';
import SharedComponent361 from '@/generated/components/SharedComponent361';
import SharedComponent362 from '@/generated/components/SharedComponent362';
import SharedComponent363 from '@/generated/components/SharedComponent363';
import SharedComponent364 from '@/generated/components/SharedComponent364';
import SharedComponent365 from '@/generated/components/SharedComponent365';
import SharedComponent366 from '@/generated/components/SharedComponent366';
import SharedComponent367 from '@/generated/components/SharedComponent367';
import SharedComponent368 from '@/generated/components/SharedComponent368';
import SharedComponent369 from '@/generated/components/SharedComponent369';

export default async function SSGPage480() {
  return (
    <div className="page-480 p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-480-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 480
      </h1>
      <div className="page-480-content grid grid-cols-2 md:grid-cols-4 gap-2">
        <SharedComponent360 id="480-0" value={48000} label="Item" />
        <SharedComponent361 id="480-1" value={48001} label="Item" />
        <SharedComponent362 id="480-2" value={48002} label="Item" />
        <SharedComponent363 id="480-3" value={48003} label="Item" />
        <SharedComponent364 id="480-4" value={48004} label="Item" />
        <SharedComponent365 id="480-5" value={48005} label="Item" />
        <SharedComponent366 id="480-6" value={48006} label="Item" />
        <SharedComponent367 id="480-7" value={48007} label="Item" />
        <SharedComponent368 id="480-8" value={48008} label="Item" />
        <SharedComponent369 id="480-9" value={48009} label="Item" />
      </div>
    </div>
  );
}
