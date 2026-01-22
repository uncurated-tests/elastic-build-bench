// SSG Page 6
import '@/generated/styles/page6.css';
import SharedComponent42 from '@/generated/components/SharedComponent42';
import SharedComponent43 from '@/generated/components/SharedComponent43';
import SharedComponent44 from '@/generated/components/SharedComponent44';
import SharedComponent45 from '@/generated/components/SharedComponent45';
import SharedComponent46 from '@/generated/components/SharedComponent46';
import SharedComponent47 from '@/generated/components/SharedComponent47';
import SharedComponent48 from '@/generated/components/SharedComponent48';
import SharedComponent49 from '@/generated/components/SharedComponent49';
import SharedComponent50 from '@/generated/components/SharedComponent50';
import SharedComponent51 from '@/generated/components/SharedComponent51';

export default async function SSGPage6() {
  return (
    <div className="page-6 p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-6-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 6
      </h1>
      <div className="page-6-content grid grid-cols-2 md:grid-cols-4 gap-2">
        <SharedComponent42 id="6-0" value={600} label="Item" />
        <SharedComponent43 id="6-1" value={601} label="Item" />
        <SharedComponent44 id="6-2" value={602} label="Item" />
        <SharedComponent45 id="6-3" value={603} label="Item" />
        <SharedComponent46 id="6-4" value={604} label="Item" />
        <SharedComponent47 id="6-5" value={605} label="Item" />
        <SharedComponent48 id="6-6" value={606} label="Item" />
        <SharedComponent49 id="6-7" value={607} label="Item" />
        <SharedComponent50 id="6-8" value={608} label="Item" />
        <SharedComponent51 id="6-9" value={609} label="Item" />
      </div>
    </div>
  );
}
