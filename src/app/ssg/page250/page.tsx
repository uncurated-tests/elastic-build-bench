// SSG Page 250 - v12
import '@/generated/styles/p250_m0.css';
import SharedComponent250 from '@/generated/components/SharedComponent250';
import SharedComponent251 from '@/generated/components/SharedComponent251';
import SharedComponent252 from '@/generated/components/SharedComponent252';
import SharedComponent253 from '@/generated/components/SharedComponent253';
import SharedComponent254 from '@/generated/components/SharedComponent254';
import HeavyComponent2750 from '@/generated/heavy/HeavyComponent2750';
import HeavyComponent2751 from '@/generated/heavy/HeavyComponent2751';

export default function SSGPage250() {
  return (
    <div className="p250-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 250</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent250 id="250-0" value={25000} label="S" />
        <SharedComponent251 id="250-1" value={25001} label="S" />
        <SharedComponent252 id="250-2" value={25002} label="S" />
        <SharedComponent253 id="250-3" value={25003} label="S" />
        <SharedComponent254 id="250-4" value={25004} label="S" />
        <HeavyComponent2750 config={{ level1: { level2: { level3: { value: "p250", count: 250, enabled: true, items: [] }}}}} />
        <HeavyComponent2751 config={{ level1: { level2: { level3: { value: "p250", count: 250, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
