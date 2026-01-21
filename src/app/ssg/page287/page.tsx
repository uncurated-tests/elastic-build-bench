// SSG Page 287 - v12
import '@/generated/styles/p287_m0.css';
import SharedComponent9 from '@/generated/components/SharedComponent9';
import SharedComponent10 from '@/generated/components/SharedComponent10';
import SharedComponent11 from '@/generated/components/SharedComponent11';
import SharedComponent12 from '@/generated/components/SharedComponent12';
import SharedComponent13 from '@/generated/components/SharedComponent13';
import HeavyComponent3157 from '@/generated/heavy/HeavyComponent3157';
import HeavyComponent3158 from '@/generated/heavy/HeavyComponent3158';

export default function SSGPage287() {
  return (
    <div className="p287-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 287</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent9 id="287-0" value={28700} label="S" />
        <SharedComponent10 id="287-1" value={28701} label="S" />
        <SharedComponent11 id="287-2" value={28702} label="S" />
        <SharedComponent12 id="287-3" value={28703} label="S" />
        <SharedComponent13 id="287-4" value={28704} label="S" />
        <HeavyComponent3157 config={{ level1: { level2: { level3: { value: "p287", count: 287, enabled: true, items: [] }}}}} />
        <HeavyComponent3158 config={{ level1: { level2: { level3: { value: "p287", count: 287, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
