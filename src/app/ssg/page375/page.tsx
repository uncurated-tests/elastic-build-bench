// SSG Page 375 - v12
import '@/generated/styles/p375_m0.css';
import '@/generated/styles/p375_m1.css';
import '@/generated/styles/p375_m2.css';
import '@/generated/styles/p375_m3.css';
import '@/generated/styles/p375_m4.css';
import '@/generated/styles/p375_m5.css';
import '@/generated/styles/p375_m6.css';
import '@/generated/styles/p375_m7.css';
import '@/generated/styles/p375_m8.css';
import '@/generated/styles/p375_m9.css';
import '@/generated/styles/p375_m10.css';
import SharedComponent125 from '@/generated/components/SharedComponent125';
import SharedComponent126 from '@/generated/components/SharedComponent126';
import SharedComponent127 from '@/generated/components/SharedComponent127';
import SharedComponent128 from '@/generated/components/SharedComponent128';
import SharedComponent129 from '@/generated/components/SharedComponent129';
import HeavyComponent4125 from '@/generated/heavy/HeavyComponent4125';
import HeavyComponent4126 from '@/generated/heavy/HeavyComponent4126';

export default function SSGPage375() {
  return (
    <div className="p375-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 375</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent125 id="375-0" value={37500} label="S" />
        <SharedComponent126 id="375-1" value={37501} label="S" />
        <SharedComponent127 id="375-2" value={37502} label="S" />
        <SharedComponent128 id="375-3" value={37503} label="S" />
        <SharedComponent129 id="375-4" value={37504} label="S" />
        <HeavyComponent4125 config={{ level1: { level2: { level3: { value: "p375", count: 375, enabled: true, items: [] }}}}} />
        <HeavyComponent4126 config={{ level1: { level2: { level3: { value: "p375", count: 375, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
