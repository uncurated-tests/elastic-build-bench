// SSG Page 360
import '@/generated/styles/page360.css';
import SharedComponent20 from '@/generated/components/SharedComponent20';
import SharedComponent21 from '@/generated/components/SharedComponent21';
import SharedComponent22 from '@/generated/components/SharedComponent22';
import SharedComponent23 from '@/generated/components/SharedComponent23';
import SharedComponent24 from '@/generated/components/SharedComponent24';
import SharedComponent25 from '@/generated/components/SharedComponent25';
import SharedComponent26 from '@/generated/components/SharedComponent26';
import SharedComponent27 from '@/generated/components/SharedComponent27';
import SharedComponent28 from '@/generated/components/SharedComponent28';
import SharedComponent29 from '@/generated/components/SharedComponent29';

export default async function SSGPage360() {
  return (
    <div className="page-360 p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-360-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 360
      </h1>
      <div className="page-360-content grid grid-cols-2 md:grid-cols-4 gap-2">
        <SharedComponent20 id="360-0" value={36000} label="Item" />
        <SharedComponent21 id="360-1" value={36001} label="Item" />
        <SharedComponent22 id="360-2" value={36002} label="Item" />
        <SharedComponent23 id="360-3" value={36003} label="Item" />
        <SharedComponent24 id="360-4" value={36004} label="Item" />
        <SharedComponent25 id="360-5" value={36005} label="Item" />
        <SharedComponent26 id="360-6" value={36006} label="Item" />
        <SharedComponent27 id="360-7" value={36007} label="Item" />
        <SharedComponent28 id="360-8" value={36008} label="Item" />
        <SharedComponent29 id="360-9" value={36009} label="Item" />
      </div>
    </div>
  );
}
