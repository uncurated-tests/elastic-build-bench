// SSG Page 1801 - v12
import '@/generated/styles/p1801_m0.css';
import SharedComponent107 from '@/generated/components/SharedComponent107';
import SharedComponent108 from '@/generated/components/SharedComponent108';
import SharedComponent109 from '@/generated/components/SharedComponent109';
import SharedComponent110 from '@/generated/components/SharedComponent110';
import SharedComponent111 from '@/generated/components/SharedComponent111';
import HeavyComponent1061 from '@/generated/heavy/HeavyComponent1061';
import HeavyComponent1062 from '@/generated/heavy/HeavyComponent1062';

export default function SSGPage1801() {
  return (
    <div className="p1801-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1801</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent107 id="1801-0" value={180100} label="S" />
        <SharedComponent108 id="1801-1" value={180101} label="S" />
        <SharedComponent109 id="1801-2" value={180102} label="S" />
        <SharedComponent110 id="1801-3" value={180103} label="S" />
        <SharedComponent111 id="1801-4" value={180104} label="S" />
        <HeavyComponent1061 config={{ level1: { level2: { level3: { value: "p1801", count: 1801, enabled: true, items: [] }}}}} />
        <HeavyComponent1062 config={{ level1: { level2: { level3: { value: "p1801", count: 1801, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
