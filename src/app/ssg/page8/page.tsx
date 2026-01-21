// SSG Page 8 - v12
import '@/generated/styles/p8_m0.css';
import '@/generated/styles/p8_m1.css';
import '@/generated/styles/p8_m2.css';
import '@/generated/styles/p8_m3.css';
import '@/generated/styles/p8_m4.css';
import '@/generated/styles/p8_m5.css';
import '@/generated/styles/p8_m6.css';
import '@/generated/styles/p8_m7.css';
import '@/generated/styles/p8_m8.css';
import '@/generated/styles/p8_m9.css';
import '@/generated/styles/p8_m10.css';
import SharedComponent56 from '@/generated/components/SharedComponent56';
import SharedComponent57 from '@/generated/components/SharedComponent57';
import SharedComponent58 from '@/generated/components/SharedComponent58';
import SharedComponent59 from '@/generated/components/SharedComponent59';
import SharedComponent60 from '@/generated/components/SharedComponent60';
import HeavyComponent88 from '@/generated/heavy/HeavyComponent88';
import HeavyComponent89 from '@/generated/heavy/HeavyComponent89';

export default function SSGPage8() {
  return (
    <div className="p8-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 8</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent56 id="8-0" value={800} label="S" />
        <SharedComponent57 id="8-1" value={801} label="S" />
        <SharedComponent58 id="8-2" value={802} label="S" />
        <SharedComponent59 id="8-3" value={803} label="S" />
        <SharedComponent60 id="8-4" value={804} label="S" />
        <HeavyComponent88 config={{ level1: { level2: { level3: { value: "p8", count: 8, enabled: true, items: [] }}}}} />
        <HeavyComponent89 config={{ level1: { level2: { level3: { value: "p8", count: 8, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
