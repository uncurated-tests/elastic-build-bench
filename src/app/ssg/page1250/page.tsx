// SSG Page 1250 - v12
import '@/generated/styles/p1250_m0.css';
import SharedComponent250 from '@/generated/components/SharedComponent250';
import SharedComponent251 from '@/generated/components/SharedComponent251';
import SharedComponent252 from '@/generated/components/SharedComponent252';
import SharedComponent253 from '@/generated/components/SharedComponent253';
import SharedComponent254 from '@/generated/components/SharedComponent254';
import HeavyComponent4375 from '@/generated/heavy/HeavyComponent4375';
import HeavyComponent4376 from '@/generated/heavy/HeavyComponent4376';

export default function SSGPage1250() {
  return (
    <div className="p1250-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1250</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent250 id="1250-0" value={125000} label="S" />
        <SharedComponent251 id="1250-1" value={125001} label="S" />
        <SharedComponent252 id="1250-2" value={125002} label="S" />
        <SharedComponent253 id="1250-3" value={125003} label="S" />
        <SharedComponent254 id="1250-4" value={125004} label="S" />
        <HeavyComponent4375 config={{ level1: { level2: { level3: { value: "p1250", count: 1250, enabled: true, items: [] }}}}} />
        <HeavyComponent4376 config={{ level1: { level2: { level3: { value: "p1250", count: 1250, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
