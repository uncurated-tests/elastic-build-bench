// SSG Page 15 - v12
import '@/generated/styles/p15_m0.css';
import '@/generated/styles/p15_m1.css';
import '@/generated/styles/p15_m2.css';
import '@/generated/styles/p15_m3.css';
import '@/generated/styles/p15_m4.css';
import '@/generated/styles/p15_m5.css';
import '@/generated/styles/p15_m6.css';
import '@/generated/styles/p15_m7.css';
import '@/generated/styles/p15_m8.css';
import '@/generated/styles/p15_m9.css';
import '@/generated/styles/p15_m10.css';
import SharedComponent105 from '@/generated/components/SharedComponent105';
import SharedComponent106 from '@/generated/components/SharedComponent106';
import SharedComponent107 from '@/generated/components/SharedComponent107';
import SharedComponent108 from '@/generated/components/SharedComponent108';
import SharedComponent109 from '@/generated/components/SharedComponent109';
import HeavyComponent165 from '@/generated/heavy/HeavyComponent165';
import HeavyComponent166 from '@/generated/heavy/HeavyComponent166';

export default function SSGPage15() {
  return (
    <div className="p15-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 15</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent105 id="15-0" value={1500} label="S" />
        <SharedComponent106 id="15-1" value={1501} label="S" />
        <SharedComponent107 id="15-2" value={1502} label="S" />
        <SharedComponent108 id="15-3" value={1503} label="S" />
        <SharedComponent109 id="15-4" value={1504} label="S" />
        <HeavyComponent165 config={{ level1: { level2: { level3: { value: "p15", count: 15, enabled: true, items: [] }}}}} />
        <HeavyComponent166 config={{ level1: { level2: { level3: { value: "p15", count: 15, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
