// SSG Page 875 - v12
import '@/generated/styles/p875_m0.css';
import SharedComponent125 from '@/generated/components/SharedComponent125';
import SharedComponent126 from '@/generated/components/SharedComponent126';
import SharedComponent127 from '@/generated/components/SharedComponent127';
import SharedComponent128 from '@/generated/components/SharedComponent128';
import SharedComponent129 from '@/generated/components/SharedComponent129';
import HeavyComponent250 from '@/generated/heavy/HeavyComponent250';
import HeavyComponent251 from '@/generated/heavy/HeavyComponent251';

export default function SSGPage875() {
  return (
    <div className="p875-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 875</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent125 id="875-0" value={87500} label="S" />
        <SharedComponent126 id="875-1" value={87501} label="S" />
        <SharedComponent127 id="875-2" value={87502} label="S" />
        <SharedComponent128 id="875-3" value={87503} label="S" />
        <SharedComponent129 id="875-4" value={87504} label="S" />
        <HeavyComponent250 config={{ level1: { level2: { level3: { value: "p875", count: 875, enabled: true, items: [] }}}}} />
        <HeavyComponent251 config={{ level1: { level2: { level3: { value: "p875", count: 875, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
