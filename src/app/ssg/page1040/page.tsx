// SSG Page 1040 - v12
import '@/generated/styles/p1040_m0.css';
import SharedComponent280 from '@/generated/components/SharedComponent280';
import SharedComponent281 from '@/generated/components/SharedComponent281';
import SharedComponent282 from '@/generated/components/SharedComponent282';
import SharedComponent283 from '@/generated/components/SharedComponent283';
import SharedComponent284 from '@/generated/components/SharedComponent284';
import HeavyComponent2065 from '@/generated/heavy/HeavyComponent2065';
import HeavyComponent2066 from '@/generated/heavy/HeavyComponent2066';

export default function SSGPage1040() {
  return (
    <div className="p1040-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1040</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent280 id="1040-0" value={104000} label="S" />
        <SharedComponent281 id="1040-1" value={104001} label="S" />
        <SharedComponent282 id="1040-2" value={104002} label="S" />
        <SharedComponent283 id="1040-3" value={104003} label="S" />
        <SharedComponent284 id="1040-4" value={104004} label="S" />
        <HeavyComponent2065 config={{ level1: { level2: { level3: { value: "p1040", count: 1040, enabled: true, items: [] }}}}} />
        <HeavyComponent2066 config={{ level1: { level2: { level3: { value: "p1040", count: 1040, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
