// SSG Page 1860 - v12
import '@/generated/styles/p1860_m0.css';
import SharedComponent20 from '@/generated/components/SharedComponent20';
import SharedComponent21 from '@/generated/components/SharedComponent21';
import SharedComponent22 from '@/generated/components/SharedComponent22';
import SharedComponent23 from '@/generated/components/SharedComponent23';
import SharedComponent24 from '@/generated/components/SharedComponent24';
import HeavyComponent1710 from '@/generated/heavy/HeavyComponent1710';
import HeavyComponent1711 from '@/generated/heavy/HeavyComponent1711';

export default function SSGPage1860() {
  return (
    <div className="p1860-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1860</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent20 id="1860-0" value={186000} label="S" />
        <SharedComponent21 id="1860-1" value={186001} label="S" />
        <SharedComponent22 id="1860-2" value={186002} label="S" />
        <SharedComponent23 id="1860-3" value={186003} label="S" />
        <SharedComponent24 id="1860-4" value={186004} label="S" />
        <HeavyComponent1710 config={{ level1: { level2: { level3: { value: "p1860", count: 1860, enabled: true, items: [] }}}}} />
        <HeavyComponent1711 config={{ level1: { level2: { level3: { value: "p1860", count: 1860, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
