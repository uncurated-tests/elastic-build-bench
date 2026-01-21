// SSG Page 1875 - v12
import '@/generated/styles/p1875_m0.css';
import SharedComponent125 from '@/generated/components/SharedComponent125';
import SharedComponent126 from '@/generated/components/SharedComponent126';
import SharedComponent127 from '@/generated/components/SharedComponent127';
import SharedComponent128 from '@/generated/components/SharedComponent128';
import SharedComponent129 from '@/generated/components/SharedComponent129';
import HeavyComponent1875 from '@/generated/heavy/HeavyComponent1875';
import HeavyComponent1876 from '@/generated/heavy/HeavyComponent1876';

export default function SSGPage1875() {
  return (
    <div className="p1875-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1875</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent125 id="1875-0" value={187500} label="S" />
        <SharedComponent126 id="1875-1" value={187501} label="S" />
        <SharedComponent127 id="1875-2" value={187502} label="S" />
        <SharedComponent128 id="1875-3" value={187503} label="S" />
        <SharedComponent129 id="1875-4" value={187504} label="S" />
        <HeavyComponent1875 config={{ level1: { level2: { level3: { value: "p1875", count: 1875, enabled: true, items: [] }}}}} />
        <HeavyComponent1876 config={{ level1: { level2: { level3: { value: "p1875", count: 1875, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
