// SSG Page 1987 - v12
import '@/generated/styles/p1987_m0.css';
import SharedComponent409 from '@/generated/components/SharedComponent409';
import SharedComponent410 from '@/generated/components/SharedComponent410';
import SharedComponent411 from '@/generated/components/SharedComponent411';
import SharedComponent412 from '@/generated/components/SharedComponent412';
import SharedComponent413 from '@/generated/components/SharedComponent413';
import HeavyComponent3107 from '@/generated/heavy/HeavyComponent3107';
import HeavyComponent3108 from '@/generated/heavy/HeavyComponent3108';

export default function SSGPage1987() {
  return (
    <div className="p1987-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1987</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent409 id="1987-0" value={198700} label="S" />
        <SharedComponent410 id="1987-1" value={198701} label="S" />
        <SharedComponent411 id="1987-2" value={198702} label="S" />
        <SharedComponent412 id="1987-3" value={198703} label="S" />
        <SharedComponent413 id="1987-4" value={198704} label="S" />
        <HeavyComponent3107 config={{ level1: { level2: { level3: { value: "p1987", count: 1987, enabled: true, items: [] }}}}} />
        <HeavyComponent3108 config={{ level1: { level2: { level3: { value: "p1987", count: 1987, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
