// SSG Page 5 - v12
import '@/generated/styles/p5_m0.css';
import '@/generated/styles/p5_m1.css';
import '@/generated/styles/p5_m2.css';
import '@/generated/styles/p5_m3.css';
import '@/generated/styles/p5_m4.css';
import '@/generated/styles/p5_m5.css';
import '@/generated/styles/p5_m6.css';
import '@/generated/styles/p5_m7.css';
import '@/generated/styles/p5_m8.css';
import '@/generated/styles/p5_m9.css';
import '@/generated/styles/p5_m10.css';
import SharedComponent35 from '@/generated/components/SharedComponent35';
import SharedComponent36 from '@/generated/components/SharedComponent36';
import SharedComponent37 from '@/generated/components/SharedComponent37';
import SharedComponent38 from '@/generated/components/SharedComponent38';
import SharedComponent39 from '@/generated/components/SharedComponent39';
import HeavyComponent55 from '@/generated/heavy/HeavyComponent55';
import HeavyComponent56 from '@/generated/heavy/HeavyComponent56';

export default function SSGPage5() {
  return (
    <div className="p5-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 5</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent35 id="5-0" value={500} label="S" />
        <SharedComponent36 id="5-1" value={501} label="S" />
        <SharedComponent37 id="5-2" value={502} label="S" />
        <SharedComponent38 id="5-3" value={503} label="S" />
        <SharedComponent39 id="5-4" value={504} label="S" />
        <HeavyComponent55 config={{ level1: { level2: { level3: { value: "p5", count: 5, enabled: true, items: [] }}}}} />
        <HeavyComponent56 config={{ level1: { level2: { level3: { value: "p5", count: 5, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
