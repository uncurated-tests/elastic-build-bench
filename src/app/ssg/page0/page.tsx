// SSG Page 0 - v12
import '@/generated/styles/p0_m0.css';
import SharedComponent0 from '@/generated/components/SharedComponent0';
import SharedComponent1 from '@/generated/components/SharedComponent1';
import SharedComponent2 from '@/generated/components/SharedComponent2';
import SharedComponent3 from '@/generated/components/SharedComponent3';
import SharedComponent4 from '@/generated/components/SharedComponent4';
import HeavyComponent0 from '@/generated/heavy/HeavyComponent0';
import HeavyComponent1 from '@/generated/heavy/HeavyComponent1';

export default function SSGPage0() {
  return (
    <div className="p0-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 0</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent0 id="0-0" value={0} label="S" />
        <SharedComponent1 id="0-1" value={1} label="S" />
        <SharedComponent2 id="0-2" value={2} label="S" />
        <SharedComponent3 id="0-3" value={3} label="S" />
        <SharedComponent4 id="0-4" value={4} label="S" />
        <HeavyComponent0 config={{ level1: { level2: { level3: { value: "p0", count: 0, enabled: true, items: [] }}}}} />
        <HeavyComponent1 config={{ level1: { level2: { level3: { value: "p0", count: 0, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
