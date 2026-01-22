// SSG Page 80
import '@/generated/styles/page80.css';
import SharedComponent60 from '@/generated/components/SharedComponent60';
import SharedComponent61 from '@/generated/components/SharedComponent61';
import SharedComponent62 from '@/generated/components/SharedComponent62';
import SharedComponent63 from '@/generated/components/SharedComponent63';
import SharedComponent64 from '@/generated/components/SharedComponent64';
import SharedComponent65 from '@/generated/components/SharedComponent65';
import SharedComponent66 from '@/generated/components/SharedComponent66';
import SharedComponent67 from '@/generated/components/SharedComponent67';
import SharedComponent68 from '@/generated/components/SharedComponent68';
import SharedComponent69 from '@/generated/components/SharedComponent69';

export default async function SSGPage80() {
  return (
    <div className="page-80 p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-80-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 80
      </h1>
      <div className="page-80-content grid grid-cols-2 md:grid-cols-4 gap-2">
        <SharedComponent60 id="80-0" value={8000} label="Item" />
        <SharedComponent61 id="80-1" value={8001} label="Item" />
        <SharedComponent62 id="80-2" value={8002} label="Item" />
        <SharedComponent63 id="80-3" value={8003} label="Item" />
        <SharedComponent64 id="80-4" value={8004} label="Item" />
        <SharedComponent65 id="80-5" value={8005} label="Item" />
        <SharedComponent66 id="80-6" value={8006} label="Item" />
        <SharedComponent67 id="80-7" value={8007} label="Item" />
        <SharedComponent68 id="80-8" value={8008} label="Item" />
        <SharedComponent69 id="80-9" value={8009} label="Item" />
      </div>
    </div>
  );
}
