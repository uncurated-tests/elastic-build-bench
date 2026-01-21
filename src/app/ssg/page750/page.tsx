// SSG Page 750 - v12
import '@/generated/styles/p750_m0.css';
import SharedComponent250 from '@/generated/components/SharedComponent250';
import SharedComponent251 from '@/generated/components/SharedComponent251';
import SharedComponent252 from '@/generated/components/SharedComponent252';
import SharedComponent253 from '@/generated/components/SharedComponent253';
import SharedComponent254 from '@/generated/components/SharedComponent254';
import HeavyComponent8250 from '@/generated/heavy/HeavyComponent8250';
import HeavyComponent8251 from '@/generated/heavy/HeavyComponent8251';

export default function SSGPage750() {
  return (
    <div className="p750-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 750</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent250 id="750-0" value={75000} label="S" />
        <SharedComponent251 id="750-1" value={75001} label="S" />
        <SharedComponent252 id="750-2" value={75002} label="S" />
        <SharedComponent253 id="750-3" value={75003} label="S" />
        <SharedComponent254 id="750-4" value={75004} label="S" />
        <HeavyComponent8250 config={{ level1: { level2: { level3: { value: "p750", count: 750, enabled: true, items: [] }}}}} />
        <HeavyComponent8251 config={{ level1: { level2: { level3: { value: "p750", count: 750, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
