// SSG Page 1000
import '@/generated/styles/page1000.css';
import SharedComponent0 from '@/generated/components/SharedComponent0';
import SharedComponent1 from '@/generated/components/SharedComponent1';
import SharedComponent2 from '@/generated/components/SharedComponent2';
import SharedComponent3 from '@/generated/components/SharedComponent3';
import SharedComponent4 from '@/generated/components/SharedComponent4';
import SharedComponent5 from '@/generated/components/SharedComponent5';
import SharedComponent6 from '@/generated/components/SharedComponent6';
import SharedComponent7 from '@/generated/components/SharedComponent7';
import SharedComponent8 from '@/generated/components/SharedComponent8';
import SharedComponent9 from '@/generated/components/SharedComponent9';

export default async function SSGPage1000() {
  return (
    <div className="page-1000 p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-1000-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 1000
      </h1>
      <div className="page-1000-content grid grid-cols-2 md:grid-cols-4 gap-2">
        <SharedComponent0 id="1000-0" value={100000} label="Item" />
        <SharedComponent1 id="1000-1" value={100001} label="Item" />
        <SharedComponent2 id="1000-2" value={100002} label="Item" />
        <SharedComponent3 id="1000-3" value={100003} label="Item" />
        <SharedComponent4 id="1000-4" value={100004} label="Item" />
        <SharedComponent5 id="1000-5" value={100005} label="Item" />
        <SharedComponent6 id="1000-6" value={100006} label="Item" />
        <SharedComponent7 id="1000-7" value={100007} label="Item" />
        <SharedComponent8 id="1000-8" value={100008} label="Item" />
        <SharedComponent9 id="1000-9" value={100009} label="Item" />
      </div>
    </div>
  );
}
