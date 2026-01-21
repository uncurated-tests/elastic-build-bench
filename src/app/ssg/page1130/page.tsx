// SSG Page 1130 - v12
import '@/generated/styles/p1130_m0.css';
import SharedComponent410 from '@/generated/components/SharedComponent410';
import SharedComponent411 from '@/generated/components/SharedComponent411';
import SharedComponent412 from '@/generated/components/SharedComponent412';
import SharedComponent413 from '@/generated/components/SharedComponent413';
import SharedComponent414 from '@/generated/components/SharedComponent414';
import HeavyComponent3055 from '@/generated/heavy/HeavyComponent3055';
import HeavyComponent3056 from '@/generated/heavy/HeavyComponent3056';

export default function SSGPage1130() {
  return (
    <div className="p1130-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1130</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent410 id="1130-0" value={113000} label="S" />
        <SharedComponent411 id="1130-1" value={113001} label="S" />
        <SharedComponent412 id="1130-2" value={113002} label="S" />
        <SharedComponent413 id="1130-3" value={113003} label="S" />
        <SharedComponent414 id="1130-4" value={113004} label="S" />
        <HeavyComponent3055 config={{ level1: { level2: { level3: { value: "p1130", count: 1130, enabled: true, items: [] }}}}} />
        <HeavyComponent3056 config={{ level1: { level2: { level3: { value: "p1130", count: 1130, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
