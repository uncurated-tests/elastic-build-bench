// SSG Page 975 - v12
import '@/generated/styles/p975_m0.css';
import SharedComponent325 from '@/generated/components/SharedComponent325';
import SharedComponent326 from '@/generated/components/SharedComponent326';
import SharedComponent327 from '@/generated/components/SharedComponent327';
import SharedComponent328 from '@/generated/components/SharedComponent328';
import SharedComponent329 from '@/generated/components/SharedComponent329';
import HeavyComponent1350 from '@/generated/heavy/HeavyComponent1350';
import HeavyComponent1351 from '@/generated/heavy/HeavyComponent1351';

export default function SSGPage975() {
  return (
    <div className="p975-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 975</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent325 id="975-0" value={97500} label="S" />
        <SharedComponent326 id="975-1" value={97501} label="S" />
        <SharedComponent327 id="975-2" value={97502} label="S" />
        <SharedComponent328 id="975-3" value={97503} label="S" />
        <SharedComponent329 id="975-4" value={97504} label="S" />
        <HeavyComponent1350 config={{ level1: { level2: { level3: { value: "p975", count: 975, enabled: true, items: [] }}}}} />
        <HeavyComponent1351 config={{ level1: { level2: { level3: { value: "p975", count: 975, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
