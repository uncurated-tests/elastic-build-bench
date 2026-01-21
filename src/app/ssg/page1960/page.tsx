// SSG Page 1960 - v12
import '@/generated/styles/p1960_m0.css';
import SharedComponent220 from '@/generated/components/SharedComponent220';
import SharedComponent221 from '@/generated/components/SharedComponent221';
import SharedComponent222 from '@/generated/components/SharedComponent222';
import SharedComponent223 from '@/generated/components/SharedComponent223';
import SharedComponent224 from '@/generated/components/SharedComponent224';
import HeavyComponent2810 from '@/generated/heavy/HeavyComponent2810';
import HeavyComponent2811 from '@/generated/heavy/HeavyComponent2811';

export default function SSGPage1960() {
  return (
    <div className="p1960-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1960</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent220 id="1960-0" value={196000} label="S" />
        <SharedComponent221 id="1960-1" value={196001} label="S" />
        <SharedComponent222 id="1960-2" value={196002} label="S" />
        <SharedComponent223 id="1960-3" value={196003} label="S" />
        <SharedComponent224 id="1960-4" value={196004} label="S" />
        <HeavyComponent2810 config={{ level1: { level2: { level3: { value: "p1960", count: 1960, enabled: true, items: [] }}}}} />
        <HeavyComponent2811 config={{ level1: { level2: { level3: { value: "p1960", count: 1960, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
