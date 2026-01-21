// SSG Page 800 - v12
import '@/generated/styles/p800_m0.css';
import SharedComponent100 from '@/generated/components/SharedComponent100';
import SharedComponent101 from '@/generated/components/SharedComponent101';
import SharedComponent102 from '@/generated/components/SharedComponent102';
import SharedComponent103 from '@/generated/components/SharedComponent103';
import SharedComponent104 from '@/generated/components/SharedComponent104';
import HeavyComponent8800 from '@/generated/heavy/HeavyComponent8800';
import HeavyComponent8801 from '@/generated/heavy/HeavyComponent8801';

export default function SSGPage800() {
  return (
    <div className="p800-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 800</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent100 id="800-0" value={80000} label="S" />
        <SharedComponent101 id="800-1" value={80001} label="S" />
        <SharedComponent102 id="800-2" value={80002} label="S" />
        <SharedComponent103 id="800-3" value={80003} label="S" />
        <SharedComponent104 id="800-4" value={80004} label="S" />
        <HeavyComponent8800 config={{ level1: { level2: { level3: { value: "p800", count: 800, enabled: true, items: [] }}}}} />
        <HeavyComponent8801 config={{ level1: { level2: { level3: { value: "p800", count: 800, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
