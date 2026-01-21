// SSG Page 1730 - v12
import '@/generated/styles/p1730_m0.css';
import SharedComponent110 from '@/generated/components/SharedComponent110';
import SharedComponent111 from '@/generated/components/SharedComponent111';
import SharedComponent112 from '@/generated/components/SharedComponent112';
import SharedComponent113 from '@/generated/components/SharedComponent113';
import SharedComponent114 from '@/generated/components/SharedComponent114';
import HeavyComponent280 from '@/generated/heavy/HeavyComponent280';
import HeavyComponent281 from '@/generated/heavy/HeavyComponent281';

export default function SSGPage1730() {
  return (
    <div className="p1730-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1730</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent110 id="1730-0" value={173000} label="S" />
        <SharedComponent111 id="1730-1" value={173001} label="S" />
        <SharedComponent112 id="1730-2" value={173002} label="S" />
        <SharedComponent113 id="1730-3" value={173003} label="S" />
        <SharedComponent114 id="1730-4" value={173004} label="S" />
        <HeavyComponent280 config={{ level1: { level2: { level3: { value: "p1730", count: 1730, enabled: true, items: [] }}}}} />
        <HeavyComponent281 config={{ level1: { level2: { level3: { value: "p1730", count: 1730, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
