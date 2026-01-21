// SSG Page 860 - v12
import '@/generated/styles/p860_m0.css';
import SharedComponent20 from '@/generated/components/SharedComponent20';
import SharedComponent21 from '@/generated/components/SharedComponent21';
import SharedComponent22 from '@/generated/components/SharedComponent22';
import SharedComponent23 from '@/generated/components/SharedComponent23';
import SharedComponent24 from '@/generated/components/SharedComponent24';
import HeavyComponent85 from '@/generated/heavy/HeavyComponent85';
import HeavyComponent86 from '@/generated/heavy/HeavyComponent86';

export default function SSGPage860() {
  return (
    <div className="p860-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 860</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent20 id="860-0" value={86000} label="S" />
        <SharedComponent21 id="860-1" value={86001} label="S" />
        <SharedComponent22 id="860-2" value={86002} label="S" />
        <SharedComponent23 id="860-3" value={86003} label="S" />
        <SharedComponent24 id="860-4" value={86004} label="S" />
        <HeavyComponent85 config={{ level1: { level2: { level3: { value: "p860", count: 860, enabled: true, items: [] }}}}} />
        <HeavyComponent86 config={{ level1: { level2: { level3: { value: "p860", count: 860, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
