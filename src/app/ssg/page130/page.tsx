// SSG Page 130
import '@/generated/styles/page130.css';
import SharedComponent410 from '@/generated/components/SharedComponent410';
import SharedComponent411 from '@/generated/components/SharedComponent411';
import SharedComponent412 from '@/generated/components/SharedComponent412';
import SharedComponent413 from '@/generated/components/SharedComponent413';
import SharedComponent414 from '@/generated/components/SharedComponent414';
import SharedComponent415 from '@/generated/components/SharedComponent415';
import SharedComponent416 from '@/generated/components/SharedComponent416';
import SharedComponent417 from '@/generated/components/SharedComponent417';
import SharedComponent418 from '@/generated/components/SharedComponent418';
import SharedComponent419 from '@/generated/components/SharedComponent419';

export default async function SSGPage130() {
  return (
    <div className="page-130 p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-130-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 130
      </h1>
      <div className="page-130-content grid grid-cols-2 md:grid-cols-4 gap-2">
        <SharedComponent410 id="130-0" value={13000} label="Item" />
        <SharedComponent411 id="130-1" value={13001} label="Item" />
        <SharedComponent412 id="130-2" value={13002} label="Item" />
        <SharedComponent413 id="130-3" value={13003} label="Item" />
        <SharedComponent414 id="130-4" value={13004} label="Item" />
        <SharedComponent415 id="130-5" value={13005} label="Item" />
        <SharedComponent416 id="130-6" value={13006} label="Item" />
        <SharedComponent417 id="130-7" value={13007} label="Item" />
        <SharedComponent418 id="130-8" value={13008} label="Item" />
        <SharedComponent419 id="130-9" value={13009} label="Item" />
      </div>
    </div>
  );
}
