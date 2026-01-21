// SSG Page 660 - v12
import '@/generated/styles/p660_m0.css';
import '@/generated/styles/p660_m1.css';
import '@/generated/styles/p660_m2.css';
import '@/generated/styles/p660_m3.css';
import '@/generated/styles/p660_m4.css';
import '@/generated/styles/p660_m5.css';
import '@/generated/styles/p660_m6.css';
import '@/generated/styles/p660_m7.css';
import '@/generated/styles/p660_m8.css';
import '@/generated/styles/p660_m9.css';
import '@/generated/styles/p660_m10.css';
import SharedComponent120 from '@/generated/components/SharedComponent120';
import SharedComponent121 from '@/generated/components/SharedComponent121';
import SharedComponent122 from '@/generated/components/SharedComponent122';
import SharedComponent123 from '@/generated/components/SharedComponent123';
import SharedComponent124 from '@/generated/components/SharedComponent124';
import HeavyComponent7260 from '@/generated/heavy/HeavyComponent7260';
import HeavyComponent7261 from '@/generated/heavy/HeavyComponent7261';

export default function SSGPage660() {
  return (
    <div className="p660-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 660</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent120 id="660-0" value={66000} label="S" />
        <SharedComponent121 id="660-1" value={66001} label="S" />
        <SharedComponent122 id="660-2" value={66002} label="S" />
        <SharedComponent123 id="660-3" value={66003} label="S" />
        <SharedComponent124 id="660-4" value={66004} label="S" />
        <HeavyComponent7260 config={{ level1: { level2: { level3: { value: "p660", count: 660, enabled: true, items: [] }}}}} />
        <HeavyComponent7261 config={{ level1: { level2: { level3: { value: "p660", count: 660, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
