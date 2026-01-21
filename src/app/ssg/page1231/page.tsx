// SSG Page 1231 - v12
import '@/generated/styles/p1231_m0.css';
import SharedComponent117 from '@/generated/components/SharedComponent117';
import SharedComponent118 from '@/generated/components/SharedComponent118';
import SharedComponent119 from '@/generated/components/SharedComponent119';
import SharedComponent120 from '@/generated/components/SharedComponent120';
import SharedComponent121 from '@/generated/components/SharedComponent121';
import HeavyComponent4166 from '@/generated/heavy/HeavyComponent4166';
import HeavyComponent4167 from '@/generated/heavy/HeavyComponent4167';

export default function SSGPage1231() {
  return (
    <div className="p1231-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1231</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent117 id="1231-0" value={123100} label="S" />
        <SharedComponent118 id="1231-1" value={123101} label="S" />
        <SharedComponent119 id="1231-2" value={123102} label="S" />
        <SharedComponent120 id="1231-3" value={123103} label="S" />
        <SharedComponent121 id="1231-4" value={123104} label="S" />
        <HeavyComponent4166 config={{ level1: { level2: { level3: { value: "p1231", count: 1231, enabled: true, items: [] }}}}} />
        <HeavyComponent4167 config={{ level1: { level2: { level3: { value: "p1231", count: 1231, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
