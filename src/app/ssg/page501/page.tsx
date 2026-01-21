// SSG Page 501
import '@/generated/styles/page501.css';
import SharedComponent7 from '@/generated/components/SharedComponent7';
import SharedComponent8 from '@/generated/components/SharedComponent8';
import SharedComponent9 from '@/generated/components/SharedComponent9';
import SharedComponent10 from '@/generated/components/SharedComponent10';
import SharedComponent11 from '@/generated/components/SharedComponent11';
import SharedComponent12 from '@/generated/components/SharedComponent12';
import SharedComponent13 from '@/generated/components/SharedComponent13';
import SharedComponent14 from '@/generated/components/SharedComponent14';
import SharedComponent15 from '@/generated/components/SharedComponent15';
import SharedComponent16 from '@/generated/components/SharedComponent16';

export default async function SSGPage501() {
  return (
    <div className="page-501 p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-501-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 501
      </h1>
      <div className="page-501-content grid grid-cols-2 md:grid-cols-4 gap-2">
        <SharedComponent7 id="501-0" value={50100} label="Item" />
        <SharedComponent8 id="501-1" value={50101} label="Item" />
        <SharedComponent9 id="501-2" value={50102} label="Item" />
        <SharedComponent10 id="501-3" value={50103} label="Item" />
        <SharedComponent11 id="501-4" value={50104} label="Item" />
        <SharedComponent12 id="501-5" value={50105} label="Item" />
        <SharedComponent13 id="501-6" value={50106} label="Item" />
        <SharedComponent14 id="501-7" value={50107} label="Item" />
        <SharedComponent15 id="501-8" value={50108} label="Item" />
        <SharedComponent16 id="501-9" value={50109} label="Item" />
      </div>
    </div>
  );
}
