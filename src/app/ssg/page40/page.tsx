// SSG Page 40 - v12
import '@/generated/styles/p40_m0.css';
import SharedComponent280 from '@/generated/components/SharedComponent280';
import SharedComponent281 from '@/generated/components/SharedComponent281';
import SharedComponent282 from '@/generated/components/SharedComponent282';
import SharedComponent283 from '@/generated/components/SharedComponent283';
import SharedComponent284 from '@/generated/components/SharedComponent284';
import HeavyComponent440 from '@/generated/heavy/HeavyComponent440';
import HeavyComponent441 from '@/generated/heavy/HeavyComponent441';

export default function SSGPage40() {
  return (
    <div className="p40-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 40</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent280 id="40-0" value={4000} label="S" />
        <SharedComponent281 id="40-1" value={4001} label="S" />
        <SharedComponent282 id="40-2" value={4002} label="S" />
        <SharedComponent283 id="40-3" value={4003} label="S" />
        <SharedComponent284 id="40-4" value={4004} label="S" />
        <HeavyComponent440 config={{ level1: { level2: { level3: { value: "p40", count: 40, enabled: true, items: [] }}}}} />
        <HeavyComponent441 config={{ level1: { level2: { level3: { value: "p40", count: 40, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
