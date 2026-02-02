// SSG Page 286
import '@/generated/styles/page286.css';
import SharedComponent2 from '@/generated/components/SharedComponent2';
import SharedComponent3 from '@/generated/components/SharedComponent3';
import SharedComponent4 from '@/generated/components/SharedComponent4';
import SharedComponent5 from '@/generated/components/SharedComponent5';
import SharedComponent6 from '@/generated/components/SharedComponent6';
import SharedComponent7 from '@/generated/components/SharedComponent7';
import SharedComponent8 from '@/generated/components/SharedComponent8';
import SharedComponent9 from '@/generated/components/SharedComponent9';
import SharedComponent10 from '@/generated/components/SharedComponent10';
import SharedComponent11 from '@/generated/components/SharedComponent11';

export default async function SSGPage286() {
  return (
    <div className="page-286 p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-286-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 286
      </h1>
      <div className="page-286-content grid grid-cols-2 md:grid-cols-4 gap-2">
        <SharedComponent2 id="286-0" value={28600} label="Item" />
        <SharedComponent3 id="286-1" value={28601} label="Item" />
        <SharedComponent4 id="286-2" value={28602} label="Item" />
        <SharedComponent5 id="286-3" value={28603} label="Item" />
        <SharedComponent6 id="286-4" value={28604} label="Item" />
        <SharedComponent7 id="286-5" value={28605} label="Item" />
        <SharedComponent8 id="286-6" value={28606} label="Item" />
        <SharedComponent9 id="286-7" value={28607} label="Item" />
        <SharedComponent10 id="286-8" value={28608} label="Item" />
        <SharedComponent11 id="286-9" value={28609} label="Item" />
      </div>
    </div>
  );
}
