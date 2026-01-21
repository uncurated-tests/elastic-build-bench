// SSG Page 14 - v12
import '@/generated/styles/p14_m0.css';
import '@/generated/styles/p14_m1.css';
import '@/generated/styles/p14_m2.css';
import '@/generated/styles/p14_m3.css';
import '@/generated/styles/p14_m4.css';
import '@/generated/styles/p14_m5.css';
import '@/generated/styles/p14_m6.css';
import '@/generated/styles/p14_m7.css';
import '@/generated/styles/p14_m8.css';
import '@/generated/styles/p14_m9.css';
import '@/generated/styles/p14_m10.css';
import SharedComponent98 from '@/generated/components/SharedComponent98';
import SharedComponent99 from '@/generated/components/SharedComponent99';
import SharedComponent100 from '@/generated/components/SharedComponent100';
import SharedComponent101 from '@/generated/components/SharedComponent101';
import SharedComponent102 from '@/generated/components/SharedComponent102';
import HeavyComponent154 from '@/generated/heavy/HeavyComponent154';
import HeavyComponent155 from '@/generated/heavy/HeavyComponent155';

export default function SSGPage14() {
  return (
    <div className="p14-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 14</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent98 id="14-0" value={1400} label="S" />
        <SharedComponent99 id="14-1" value={1401} label="S" />
        <SharedComponent100 id="14-2" value={1402} label="S" />
        <SharedComponent101 id="14-3" value={1403} label="S" />
        <SharedComponent102 id="14-4" value={1404} label="S" />
        <HeavyComponent154 config={{ level1: { level2: { level3: { value: "p14", count: 14, enabled: true, items: [] }}}}} />
        <HeavyComponent155 config={{ level1: { level2: { level3: { value: "p14", count: 14, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
