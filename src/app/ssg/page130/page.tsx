// SSG Page 130 - v12
import '@/generated/styles/p130_m0.css';
import '@/generated/styles/p130_m1.css';
import '@/generated/styles/p130_m2.css';
import '@/generated/styles/p130_m3.css';
import '@/generated/styles/p130_m4.css';
import '@/generated/styles/p130_m5.css';
import '@/generated/styles/p130_m6.css';
import '@/generated/styles/p130_m7.css';
import '@/generated/styles/p130_m8.css';
import '@/generated/styles/p130_m9.css';
import '@/generated/styles/p130_m10.css';
import SharedComponent410 from '@/generated/components/SharedComponent410';
import SharedComponent411 from '@/generated/components/SharedComponent411';
import SharedComponent412 from '@/generated/components/SharedComponent412';
import SharedComponent413 from '@/generated/components/SharedComponent413';
import SharedComponent414 from '@/generated/components/SharedComponent414';
import HeavyComponent1430 from '@/generated/heavy/HeavyComponent1430';
import HeavyComponent1431 from '@/generated/heavy/HeavyComponent1431';

export default function SSGPage130() {
  return (
    <div className="p130-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 130</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent410 id="130-0" value={13000} label="S" />
        <SharedComponent411 id="130-1" value={13001} label="S" />
        <SharedComponent412 id="130-2" value={13002} label="S" />
        <SharedComponent413 id="130-3" value={13003} label="S" />
        <SharedComponent414 id="130-4" value={13004} label="S" />
        <HeavyComponent1430 config={{ level1: { level2: { level3: { value: "p130", count: 130, enabled: true, items: [] }}}}} />
        <HeavyComponent1431 config={{ level1: { level2: { level3: { value: "p130", count: 130, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
