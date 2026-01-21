// SSG Page 3
import '@/generated/styles/page3.css';
import SharedComponent21 from '@/generated/components/SharedComponent21';
import SharedComponent22 from '@/generated/components/SharedComponent22';
import SharedComponent23 from '@/generated/components/SharedComponent23';
import SharedComponent24 from '@/generated/components/SharedComponent24';
import SharedComponent25 from '@/generated/components/SharedComponent25';
import SharedComponent26 from '@/generated/components/SharedComponent26';
import SharedComponent27 from '@/generated/components/SharedComponent27';
import SharedComponent28 from '@/generated/components/SharedComponent28';
import SharedComponent29 from '@/generated/components/SharedComponent29';
import SharedComponent30 from '@/generated/components/SharedComponent30';

export default async function SSGPage3() {
  return (
    <div className="page-3 p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-3-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 3
      </h1>
      <div className="page-3-content grid grid-cols-2 md:grid-cols-4 gap-2">
        <SharedComponent21 id="3-0" value={300} label="Item" />
        <SharedComponent22 id="3-1" value={301} label="Item" />
        <SharedComponent23 id="3-2" value={302} label="Item" />
        <SharedComponent24 id="3-3" value={303} label="Item" />
        <SharedComponent25 id="3-4" value={304} label="Item" />
        <SharedComponent26 id="3-5" value={305} label="Item" />
        <SharedComponent27 id="3-6" value={306} label="Item" />
        <SharedComponent28 id="3-7" value={307} label="Item" />
        <SharedComponent29 id="3-8" value={308} label="Item" />
        <SharedComponent30 id="3-9" value={309} label="Item" />
      </div>
    </div>
  );
}
