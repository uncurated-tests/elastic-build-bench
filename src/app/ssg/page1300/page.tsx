// SSG Page 1300 - v12
import '@/generated/styles/p1300_m0.css';
import '@/generated/styles/p1300_m1.css';
import '@/generated/styles/p1300_m2.css';
import '@/generated/styles/p1300_m3.css';
import '@/generated/styles/p1300_m4.css';
import '@/generated/styles/p1300_m5.css';
import '@/generated/styles/p1300_m6.css';
import '@/generated/styles/p1300_m7.css';
import '@/generated/styles/p1300_m8.css';
import '@/generated/styles/p1300_m9.css';
import '@/generated/styles/p1300_m10.css';
import SharedComponent100 from '@/generated/components/SharedComponent100';
import SharedComponent101 from '@/generated/components/SharedComponent101';
import SharedComponent102 from '@/generated/components/SharedComponent102';
import SharedComponent103 from '@/generated/components/SharedComponent103';
import SharedComponent104 from '@/generated/components/SharedComponent104';
import HeavyComponent14300 from '@/generated/heavy/HeavyComponent14300';
import HeavyComponent14301 from '@/generated/heavy/HeavyComponent14301';

export default function SSGPage1300() {
  return (
    <div className="p1300-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1300</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent100 id="1300-0" value={130000} label="S" />
        <SharedComponent101 id="1300-1" value={130001} label="S" />
        <SharedComponent102 id="1300-2" value={130002} label="S" />
        <SharedComponent103 id="1300-3" value={130003} label="S" />
        <SharedComponent104 id="1300-4" value={130004} label="S" />
        <HeavyComponent14300 config={{ level1: { level2: { level3: { value: "p1300", count: 1300, enabled: true, items: [] }}}}} />
        <HeavyComponent14301 config={{ level1: { level2: { level3: { value: "p1300", count: 1300, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
