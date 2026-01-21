// SSG Page 1320 - v12
import '@/generated/styles/p1320_m0.css';
import SharedComponent240 from '@/generated/components/SharedComponent240';
import SharedComponent241 from '@/generated/components/SharedComponent241';
import SharedComponent242 from '@/generated/components/SharedComponent242';
import SharedComponent243 from '@/generated/components/SharedComponent243';
import SharedComponent244 from '@/generated/components/SharedComponent244';
import HeavyComponent5145 from '@/generated/heavy/HeavyComponent5145';
import HeavyComponent5146 from '@/generated/heavy/HeavyComponent5146';

export default function SSGPage1320() {
  return (
    <div className="p1320-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1320</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent240 id="1320-0" value={132000} label="S" />
        <SharedComponent241 id="1320-1" value={132001} label="S" />
        <SharedComponent242 id="1320-2" value={132002} label="S" />
        <SharedComponent243 id="1320-3" value={132003} label="S" />
        <SharedComponent244 id="1320-4" value={132004} label="S" />
        <HeavyComponent5145 config={{ level1: { level2: { level3: { value: "p1320", count: 1320, enabled: true, items: [] }}}}} />
        <HeavyComponent5146 config={{ level1: { level2: { level3: { value: "p1320", count: 1320, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
