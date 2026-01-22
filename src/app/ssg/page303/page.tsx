// SSG Page 303
import '@/generated/styles/page303.css';
import SharedComponent121 from '@/generated/components/SharedComponent121';
import SharedComponent122 from '@/generated/components/SharedComponent122';
import SharedComponent123 from '@/generated/components/SharedComponent123';
import SharedComponent124 from '@/generated/components/SharedComponent124';
import SharedComponent125 from '@/generated/components/SharedComponent125';
import SharedComponent126 from '@/generated/components/SharedComponent126';
import SharedComponent127 from '@/generated/components/SharedComponent127';
import SharedComponent128 from '@/generated/components/SharedComponent128';
import SharedComponent129 from '@/generated/components/SharedComponent129';
import SharedComponent130 from '@/generated/components/SharedComponent130';

export default async function SSGPage303() {
  return (
    <div className="page-303 p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-303-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 303
      </h1>
      <div className="page-303-content grid grid-cols-2 md:grid-cols-4 gap-2">
        <SharedComponent121 id="303-0" value={30300} label="Item" />
        <SharedComponent122 id="303-1" value={30301} label="Item" />
        <SharedComponent123 id="303-2" value={30302} label="Item" />
        <SharedComponent124 id="303-3" value={30303} label="Item" />
        <SharedComponent125 id="303-4" value={30304} label="Item" />
        <SharedComponent126 id="303-5" value={30305} label="Item" />
        <SharedComponent127 id="303-6" value={30306} label="Item" />
        <SharedComponent128 id="303-7" value={30307} label="Item" />
        <SharedComponent129 id="303-8" value={30308} label="Item" />
        <SharedComponent130 id="303-9" value={30309} label="Item" />
      </div>
    </div>
  );
}
