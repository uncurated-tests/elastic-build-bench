// SSG Page 127 - v12
import '@/generated/styles/p127_m0.css';
import '@/generated/styles/p127_m1.css';
import '@/generated/styles/p127_m2.css';
import '@/generated/styles/p127_m3.css';
import '@/generated/styles/p127_m4.css';
import '@/generated/styles/p127_m5.css';
import '@/generated/styles/p127_m6.css';
import '@/generated/styles/p127_m7.css';
import '@/generated/styles/p127_m8.css';
import '@/generated/styles/p127_m9.css';
import '@/generated/styles/p127_m10.css';
import SharedComponent389 from '@/generated/components/SharedComponent389';
import SharedComponent390 from '@/generated/components/SharedComponent390';
import SharedComponent391 from '@/generated/components/SharedComponent391';
import SharedComponent392 from '@/generated/components/SharedComponent392';
import SharedComponent393 from '@/generated/components/SharedComponent393';
import HeavyComponent1397 from '@/generated/heavy/HeavyComponent1397';
import HeavyComponent1398 from '@/generated/heavy/HeavyComponent1398';

export default function SSGPage127() {
  return (
    <div className="p127-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 127</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent389 id="127-0" value={12700} label="S" />
        <SharedComponent390 id="127-1" value={12701} label="S" />
        <SharedComponent391 id="127-2" value={12702} label="S" />
        <SharedComponent392 id="127-3" value={12703} label="S" />
        <SharedComponent393 id="127-4" value={12704} label="S" />
        <HeavyComponent1397 config={{ level1: { level2: { level3: { value: "p127", count: 127, enabled: true, items: [] }}}}} />
        <HeavyComponent1398 config={{ level1: { level2: { level3: { value: "p127", count: 127, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
