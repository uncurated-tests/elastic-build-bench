// SSG Page 232 - v12
import '@/generated/styles/p232_m0.css';
import SharedComponent124 from '@/generated/components/SharedComponent124';
import SharedComponent125 from '@/generated/components/SharedComponent125';
import SharedComponent126 from '@/generated/components/SharedComponent126';
import SharedComponent127 from '@/generated/components/SharedComponent127';
import SharedComponent128 from '@/generated/components/SharedComponent128';
import HeavyComponent2552 from '@/generated/heavy/HeavyComponent2552';
import HeavyComponent2553 from '@/generated/heavy/HeavyComponent2553';

export default function SSGPage232() {
  return (
    <div className="p232-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 232</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent124 id="232-0" value={23200} label="S" />
        <SharedComponent125 id="232-1" value={23201} label="S" />
        <SharedComponent126 id="232-2" value={23202} label="S" />
        <SharedComponent127 id="232-3" value={23203} label="S" />
        <SharedComponent128 id="232-4" value={23204} label="S" />
        <HeavyComponent2552 config={{ level1: { level2: { level3: { value: "p232", count: 232, enabled: true, items: [] }}}}} />
        <HeavyComponent2553 config={{ level1: { level2: { level3: { value: "p232", count: 232, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
