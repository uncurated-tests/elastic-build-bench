// SSG Page 300 - v12
import '@/generated/styles/p300_m0.css';
import SharedComponent100 from '@/generated/components/SharedComponent100';
import SharedComponent101 from '@/generated/components/SharedComponent101';
import SharedComponent102 from '@/generated/components/SharedComponent102';
import SharedComponent103 from '@/generated/components/SharedComponent103';
import SharedComponent104 from '@/generated/components/SharedComponent104';
import HeavyComponent3300 from '@/generated/heavy/HeavyComponent3300';
import HeavyComponent3301 from '@/generated/heavy/HeavyComponent3301';

export default function SSGPage300() {
  return (
    <div className="p300-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 300</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent100 id="300-0" value={30000} label="S" />
        <SharedComponent101 id="300-1" value={30001} label="S" />
        <SharedComponent102 id="300-2" value={30002} label="S" />
        <SharedComponent103 id="300-3" value={30003} label="S" />
        <SharedComponent104 id="300-4" value={30004} label="S" />
        <HeavyComponent3300 config={{ level1: { level2: { level3: { value: "p300", count: 300, enabled: true, items: [] }}}}} />
        <HeavyComponent3301 config={{ level1: { level2: { level3: { value: "p300", count: 300, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
