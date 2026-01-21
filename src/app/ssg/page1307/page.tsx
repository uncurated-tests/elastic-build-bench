// SSG Page 1307 - v12
import '@/generated/styles/p1307_m0.css';
import SharedComponent149 from '@/generated/components/SharedComponent149';
import SharedComponent150 from '@/generated/components/SharedComponent150';
import SharedComponent151 from '@/generated/components/SharedComponent151';
import SharedComponent152 from '@/generated/components/SharedComponent152';
import SharedComponent153 from '@/generated/components/SharedComponent153';
import HeavyComponent5002 from '@/generated/heavy/HeavyComponent5002';
import HeavyComponent5003 from '@/generated/heavy/HeavyComponent5003';

export default function SSGPage1307() {
  return (
    <div className="p1307-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1307</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent149 id="1307-0" value={130700} label="S" />
        <SharedComponent150 id="1307-1" value={130701} label="S" />
        <SharedComponent151 id="1307-2" value={130702} label="S" />
        <SharedComponent152 id="1307-3" value={130703} label="S" />
        <SharedComponent153 id="1307-4" value={130704} label="S" />
        <HeavyComponent5002 config={{ level1: { level2: { level3: { value: "p1307", count: 1307, enabled: true, items: [] }}}}} />
        <HeavyComponent5003 config={{ level1: { level2: { level3: { value: "p1307", count: 1307, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
