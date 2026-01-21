// SSG Page 3 - v12
import '@/generated/styles/p3_m0.css';
import '@/generated/styles/p3_m1.css';
import '@/generated/styles/p3_m2.css';
import '@/generated/styles/p3_m3.css';
import '@/generated/styles/p3_m4.css';
import '@/generated/styles/p3_m5.css';
import '@/generated/styles/p3_m6.css';
import '@/generated/styles/p3_m7.css';
import '@/generated/styles/p3_m8.css';
import '@/generated/styles/p3_m9.css';
import '@/generated/styles/p3_m10.css';
import SharedComponent21 from '@/generated/components/SharedComponent21';
import SharedComponent22 from '@/generated/components/SharedComponent22';
import SharedComponent23 from '@/generated/components/SharedComponent23';
import SharedComponent24 from '@/generated/components/SharedComponent24';
import SharedComponent25 from '@/generated/components/SharedComponent25';
import HeavyComponent33 from '@/generated/heavy/HeavyComponent33';
import HeavyComponent34 from '@/generated/heavy/HeavyComponent34';

export default function SSGPage3() {
  return (
    <div className="p3-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 3</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent21 id="3-0" value={300} label="S" />
        <SharedComponent22 id="3-1" value={301} label="S" />
        <SharedComponent23 id="3-2" value={302} label="S" />
        <SharedComponent24 id="3-3" value={303} label="S" />
        <SharedComponent25 id="3-4" value={304} label="S" />
        <HeavyComponent33 config={{ level1: { level2: { level3: { value: "p3", count: 3, enabled: true, items: [] }}}}} />
        <HeavyComponent34 config={{ level1: { level2: { level3: { value: "p3", count: 3, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
