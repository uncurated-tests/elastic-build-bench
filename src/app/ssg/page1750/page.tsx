// SSG Page 1750 - v12
import '@/generated/styles/p1750_m0.css';
import SharedComponent250 from '@/generated/components/SharedComponent250';
import SharedComponent251 from '@/generated/components/SharedComponent251';
import SharedComponent252 from '@/generated/components/SharedComponent252';
import SharedComponent253 from '@/generated/components/SharedComponent253';
import SharedComponent254 from '@/generated/components/SharedComponent254';
import HeavyComponent500 from '@/generated/heavy/HeavyComponent500';
import HeavyComponent501 from '@/generated/heavy/HeavyComponent501';

export default function SSGPage1750() {
  return (
    <div className="p1750-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1750</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent250 id="1750-0" value={175000} label="S" />
        <SharedComponent251 id="1750-1" value={175001} label="S" />
        <SharedComponent252 id="1750-2" value={175002} label="S" />
        <SharedComponent253 id="1750-3" value={175003} label="S" />
        <SharedComponent254 id="1750-4" value={175004} label="S" />
        <HeavyComponent500 config={{ level1: { level2: { level3: { value: "p1750", count: 1750, enabled: true, items: [] }}}}} />
        <HeavyComponent501 config={{ level1: { level2: { level3: { value: "p1750", count: 1750, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
