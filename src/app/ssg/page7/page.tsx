// SSG Page 7 - v12
import '@/generated/styles/p7_m0.css';
import '@/generated/styles/p7_m1.css';
import '@/generated/styles/p7_m2.css';
import '@/generated/styles/p7_m3.css';
import '@/generated/styles/p7_m4.css';
import '@/generated/styles/p7_m5.css';
import '@/generated/styles/p7_m6.css';
import '@/generated/styles/p7_m7.css';
import '@/generated/styles/p7_m8.css';
import '@/generated/styles/p7_m9.css';
import '@/generated/styles/p7_m10.css';
import SharedComponent49 from '@/generated/components/SharedComponent49';
import SharedComponent50 from '@/generated/components/SharedComponent50';
import SharedComponent51 from '@/generated/components/SharedComponent51';
import SharedComponent52 from '@/generated/components/SharedComponent52';
import SharedComponent53 from '@/generated/components/SharedComponent53';
import HeavyComponent77 from '@/generated/heavy/HeavyComponent77';
import HeavyComponent78 from '@/generated/heavy/HeavyComponent78';

export default function SSGPage7() {
  return (
    <div className="p7-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 7</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent49 id="7-0" value={700} label="S" />
        <SharedComponent50 id="7-1" value={701} label="S" />
        <SharedComponent51 id="7-2" value={702} label="S" />
        <SharedComponent52 id="7-3" value={703} label="S" />
        <SharedComponent53 id="7-4" value={704} label="S" />
        <HeavyComponent77 config={{ level1: { level2: { level3: { value: "p7", count: 7, enabled: true, items: [] }}}}} />
        <HeavyComponent78 config={{ level1: { level2: { level3: { value: "p7", count: 7, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
