// SSG Page 25 - v12
import '@/generated/styles/p25_m0.css';
import SharedComponent175 from '@/generated/components/SharedComponent175';
import SharedComponent176 from '@/generated/components/SharedComponent176';
import SharedComponent177 from '@/generated/components/SharedComponent177';
import SharedComponent178 from '@/generated/components/SharedComponent178';
import SharedComponent179 from '@/generated/components/SharedComponent179';
import HeavyComponent275 from '@/generated/heavy/HeavyComponent275';
import HeavyComponent276 from '@/generated/heavy/HeavyComponent276';

export default function SSGPage25() {
  return (
    <div className="p25-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 25</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent175 id="25-0" value={2500} label="S" />
        <SharedComponent176 id="25-1" value={2501} label="S" />
        <SharedComponent177 id="25-2" value={2502} label="S" />
        <SharedComponent178 id="25-3" value={2503} label="S" />
        <SharedComponent179 id="25-4" value={2504} label="S" />
        <HeavyComponent275 config={{ level1: { level2: { level3: { value: "p25", count: 25, enabled: true, items: [] }}}}} />
        <HeavyComponent276 config={{ level1: { level2: { level3: { value: "p25", count: 25, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
