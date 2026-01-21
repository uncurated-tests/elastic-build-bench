// SSG Page 900 - v12
import '@/generated/styles/p900_m0.css';
import SharedComponent300 from '@/generated/components/SharedComponent300';
import SharedComponent301 from '@/generated/components/SharedComponent301';
import SharedComponent302 from '@/generated/components/SharedComponent302';
import SharedComponent303 from '@/generated/components/SharedComponent303';
import SharedComponent304 from '@/generated/components/SharedComponent304';
import HeavyComponent525 from '@/generated/heavy/HeavyComponent525';
import HeavyComponent526 from '@/generated/heavy/HeavyComponent526';

export default function SSGPage900() {
  return (
    <div className="p900-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 900</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent300 id="900-0" value={90000} label="S" />
        <SharedComponent301 id="900-1" value={90001} label="S" />
        <SharedComponent302 id="900-2" value={90002} label="S" />
        <SharedComponent303 id="900-3" value={90003} label="S" />
        <SharedComponent304 id="900-4" value={90004} label="S" />
        <HeavyComponent525 config={{ level1: { level2: { level3: { value: "p900", count: 900, enabled: true, items: [] }}}}} />
        <HeavyComponent526 config={{ level1: { level2: { level3: { value: "p900", count: 900, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
