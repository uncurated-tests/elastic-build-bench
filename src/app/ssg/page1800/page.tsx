// SSG Page 1800 - v12
import '@/generated/styles/p1800_m0.css';
import '@/generated/styles/p1800_m1.css';
import '@/generated/styles/p1800_m2.css';
import '@/generated/styles/p1800_m3.css';
import '@/generated/styles/p1800_m4.css';
import '@/generated/styles/p1800_m5.css';
import '@/generated/styles/p1800_m6.css';
import '@/generated/styles/p1800_m7.css';
import '@/generated/styles/p1800_m8.css';
import '@/generated/styles/p1800_m9.css';
import '@/generated/styles/p1800_m10.css';
import SharedComponent100 from '@/generated/components/SharedComponent100';
import SharedComponent101 from '@/generated/components/SharedComponent101';
import SharedComponent102 from '@/generated/components/SharedComponent102';
import SharedComponent103 from '@/generated/components/SharedComponent103';
import SharedComponent104 from '@/generated/components/SharedComponent104';
import HeavyComponent4800 from '@/generated/heavy/HeavyComponent4800';
import HeavyComponent4801 from '@/generated/heavy/HeavyComponent4801';

export default function SSGPage1800() {
  return (
    <div className="p1800-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1800</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent100 id="1800-0" value={180000} label="S" />
        <SharedComponent101 id="1800-1" value={180001} label="S" />
        <SharedComponent102 id="1800-2" value={180002} label="S" />
        <SharedComponent103 id="1800-3" value={180003} label="S" />
        <SharedComponent104 id="1800-4" value={180004} label="S" />
        <HeavyComponent4800 config={{ level1: { level2: { level3: { value: "p1800", count: 1800, enabled: true, items: [] }}}}} />
        <HeavyComponent4801 config={{ level1: { level2: { level3: { value: "p1800", count: 1800, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
