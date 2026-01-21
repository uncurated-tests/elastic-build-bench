// SSG Page 1501 - v12
import '@/generated/styles/p1501_m0.css';
import '@/generated/styles/p1501_m1.css';
import '@/generated/styles/p1501_m2.css';
import '@/generated/styles/p1501_m3.css';
import '@/generated/styles/p1501_m4.css';
import '@/generated/styles/p1501_m5.css';
import '@/generated/styles/p1501_m6.css';
import '@/generated/styles/p1501_m7.css';
import '@/generated/styles/p1501_m8.css';
import '@/generated/styles/p1501_m9.css';
import '@/generated/styles/p1501_m10.css';
import SharedComponent7 from '@/generated/components/SharedComponent7';
import SharedComponent8 from '@/generated/components/SharedComponent8';
import SharedComponent9 from '@/generated/components/SharedComponent9';
import SharedComponent10 from '@/generated/components/SharedComponent10';
import SharedComponent11 from '@/generated/components/SharedComponent11';
import HeavyComponent1511 from '@/generated/heavy/HeavyComponent1511';
import HeavyComponent1512 from '@/generated/heavy/HeavyComponent1512';

export default function SSGPage1501() {
  return (
    <div className="p1501-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1501</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent7 id="1501-0" value={150100} label="S" />
        <SharedComponent8 id="1501-1" value={150101} label="S" />
        <SharedComponent9 id="1501-2" value={150102} label="S" />
        <SharedComponent10 id="1501-3" value={150103} label="S" />
        <SharedComponent11 id="1501-4" value={150104} label="S" />
        <HeavyComponent1511 config={{ level1: { level2: { level3: { value: "p1501", count: 1501, enabled: true, items: [] }}}}} />
        <HeavyComponent1512 config={{ level1: { level2: { level3: { value: "p1501", count: 1501, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
