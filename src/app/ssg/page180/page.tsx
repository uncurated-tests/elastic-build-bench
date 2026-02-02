// SSG Page 180
import '@/generated/styles/page180.css';
import SharedComponent260 from '@/generated/components/SharedComponent260';
import SharedComponent261 from '@/generated/components/SharedComponent261';
import SharedComponent262 from '@/generated/components/SharedComponent262';
import SharedComponent263 from '@/generated/components/SharedComponent263';
import SharedComponent264 from '@/generated/components/SharedComponent264';
import SharedComponent265 from '@/generated/components/SharedComponent265';
import SharedComponent266 from '@/generated/components/SharedComponent266';
import SharedComponent267 from '@/generated/components/SharedComponent267';
import SharedComponent268 from '@/generated/components/SharedComponent268';
import SharedComponent269 from '@/generated/components/SharedComponent269';

export default async function SSGPage180() {
  return (
    <div className="page-180 p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-180-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 180
      </h1>
      <div className="page-180-content grid grid-cols-2 md:grid-cols-4 gap-2">
        <SharedComponent260 id="180-0" value={18000} label="Item" />
        <SharedComponent261 id="180-1" value={18001} label="Item" />
        <SharedComponent262 id="180-2" value={18002} label="Item" />
        <SharedComponent263 id="180-3" value={18003} label="Item" />
        <SharedComponent264 id="180-4" value={18004} label="Item" />
        <SharedComponent265 id="180-5" value={18005} label="Item" />
        <SharedComponent266 id="180-6" value={18006} label="Item" />
        <SharedComponent267 id="180-7" value={18007} label="Item" />
        <SharedComponent268 id="180-8" value={18008} label="Item" />
        <SharedComponent269 id="180-9" value={18009} label="Item" />
      </div>
    </div>
  );
}
