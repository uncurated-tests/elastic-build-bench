// SSG Page 1017 - v12
import '@/generated/styles/p1017_m0.css';
import SharedComponent119 from '@/generated/components/SharedComponent119';
import SharedComponent120 from '@/generated/components/SharedComponent120';
import SharedComponent121 from '@/generated/components/SharedComponent121';
import SharedComponent122 from '@/generated/components/SharedComponent122';
import SharedComponent123 from '@/generated/components/SharedComponent123';
import HeavyComponent1812 from '@/generated/heavy/HeavyComponent1812';
import HeavyComponent1813 from '@/generated/heavy/HeavyComponent1813';

export default function SSGPage1017() {
  return (
    <div className="p1017-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1017</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent119 id="1017-0" value={101700} label="S" />
        <SharedComponent120 id="1017-1" value={101701} label="S" />
        <SharedComponent121 id="1017-2" value={101702} label="S" />
        <SharedComponent122 id="1017-3" value={101703} label="S" />
        <SharedComponent123 id="1017-4" value={101704} label="S" />
        <HeavyComponent1812 config={{ level1: { level2: { level3: { value: "p1017", count: 1017, enabled: true, items: [] }}}}} />
        <HeavyComponent1813 config={{ level1: { level2: { level3: { value: "p1017", count: 1017, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
