// SSG Page 501 - v12
import '@/generated/styles/p501_m0.css';
import '@/generated/styles/p501_m1.css';
import '@/generated/styles/p501_m2.css';
import '@/generated/styles/p501_m3.css';
import '@/generated/styles/p501_m4.css';
import '@/generated/styles/p501_m5.css';
import '@/generated/styles/p501_m6.css';
import '@/generated/styles/p501_m7.css';
import '@/generated/styles/p501_m8.css';
import '@/generated/styles/p501_m9.css';
import '@/generated/styles/p501_m10.css';
import SharedComponent7 from '@/generated/components/SharedComponent7';
import SharedComponent8 from '@/generated/components/SharedComponent8';
import SharedComponent9 from '@/generated/components/SharedComponent9';
import SharedComponent10 from '@/generated/components/SharedComponent10';
import SharedComponent11 from '@/generated/components/SharedComponent11';
import HeavyComponent5511 from '@/generated/heavy/HeavyComponent5511';
import HeavyComponent5512 from '@/generated/heavy/HeavyComponent5512';

export default function SSGPage501() {
  return (
    <div className="p501-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 501</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent7 id="501-0" value={50100} label="S" />
        <SharedComponent8 id="501-1" value={50101} label="S" />
        <SharedComponent9 id="501-2" value={50102} label="S" />
        <SharedComponent10 id="501-3" value={50103} label="S" />
        <SharedComponent11 id="501-4" value={50104} label="S" />
        <HeavyComponent5511 config={{ level1: { level2: { level3: { value: "p501", count: 501, enabled: true, items: [] }}}}} />
        <HeavyComponent5512 config={{ level1: { level2: { level3: { value: "p501", count: 501, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
