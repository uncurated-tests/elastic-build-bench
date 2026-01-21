// SSG Page 50 - v12
import '@/generated/styles/p50_m0.css';
import SharedComponent350 from '@/generated/components/SharedComponent350';
import SharedComponent351 from '@/generated/components/SharedComponent351';
import SharedComponent352 from '@/generated/components/SharedComponent352';
import SharedComponent353 from '@/generated/components/SharedComponent353';
import SharedComponent354 from '@/generated/components/SharedComponent354';
import HeavyComponent550 from '@/generated/heavy/HeavyComponent550';
import HeavyComponent551 from '@/generated/heavy/HeavyComponent551';

export default function SSGPage50() {
  return (
    <div className="p50-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 50</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent350 id="50-0" value={5000} label="S" />
        <SharedComponent351 id="50-1" value={5001} label="S" />
        <SharedComponent352 id="50-2" value={5002} label="S" />
        <SharedComponent353 id="50-3" value={5003} label="S" />
        <SharedComponent354 id="50-4" value={5004} label="S" />
        <HeavyComponent550 config={{ level1: { level2: { level3: { value: "p50", count: 50, enabled: true, items: [] }}}}} />
        <HeavyComponent551 config={{ level1: { level2: { level3: { value: "p50", count: 50, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
