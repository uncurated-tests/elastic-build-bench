// SSG Page 36 - v12
import '@/generated/styles/p36_m0.css';
import '@/generated/styles/p36_m1.css';
import '@/generated/styles/p36_m2.css';
import '@/generated/styles/p36_m3.css';
import '@/generated/styles/p36_m4.css';
import '@/generated/styles/p36_m5.css';
import '@/generated/styles/p36_m6.css';
import '@/generated/styles/p36_m7.css';
import '@/generated/styles/p36_m8.css';
import '@/generated/styles/p36_m9.css';
import '@/generated/styles/p36_m10.css';
import SharedComponent252 from '@/generated/components/SharedComponent252';
import SharedComponent253 from '@/generated/components/SharedComponent253';
import SharedComponent254 from '@/generated/components/SharedComponent254';
import SharedComponent255 from '@/generated/components/SharedComponent255';
import SharedComponent256 from '@/generated/components/SharedComponent256';
import HeavyComponent396 from '@/generated/heavy/HeavyComponent396';
import HeavyComponent397 from '@/generated/heavy/HeavyComponent397';

export default function SSGPage36() {
  return (
    <div className="p36-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 36</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent252 id="36-0" value={3600} label="S" />
        <SharedComponent253 id="36-1" value={3601} label="S" />
        <SharedComponent254 id="36-2" value={3602} label="S" />
        <SharedComponent255 id="36-3" value={3603} label="S" />
        <SharedComponent256 id="36-4" value={3604} label="S" />
        <HeavyComponent396 config={{ level1: { level2: { level3: { value: "p36", count: 36, enabled: true, items: [] }}}}} />
        <HeavyComponent397 config={{ level1: { level2: { level3: { value: "p36", count: 36, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
