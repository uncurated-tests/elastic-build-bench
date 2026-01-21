// SSG Page 120 - v12
import '@/generated/styles/p120_m0.css';
import SharedComponent340 from '@/generated/components/SharedComponent340';
import SharedComponent341 from '@/generated/components/SharedComponent341';
import SharedComponent342 from '@/generated/components/SharedComponent342';
import SharedComponent343 from '@/generated/components/SharedComponent343';
import SharedComponent344 from '@/generated/components/SharedComponent344';
import HeavyComponent1320 from '@/generated/heavy/HeavyComponent1320';
import HeavyComponent1321 from '@/generated/heavy/HeavyComponent1321';

export default function SSGPage120() {
  return (
    <div className="p120-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 120</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent340 id="120-0" value={12000} label="S" />
        <SharedComponent341 id="120-1" value={12001} label="S" />
        <SharedComponent342 id="120-2" value={12002} label="S" />
        <SharedComponent343 id="120-3" value={12003} label="S" />
        <SharedComponent344 id="120-4" value={12004} label="S" />
        <HeavyComponent1320 config={{ level1: { level2: { level3: { value: "p120", count: 120, enabled: true, items: [] }}}}} />
        <HeavyComponent1321 config={{ level1: { level2: { level3: { value: "p120", count: 120, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
