// SSG Page 125 - v12
import '@/generated/styles/p125_m0.css';
import '@/generated/styles/p125_m1.css';
import '@/generated/styles/p125_m2.css';
import '@/generated/styles/p125_m3.css';
import '@/generated/styles/p125_m4.css';
import '@/generated/styles/p125_m5.css';
import '@/generated/styles/p125_m6.css';
import '@/generated/styles/p125_m7.css';
import '@/generated/styles/p125_m8.css';
import '@/generated/styles/p125_m9.css';
import '@/generated/styles/p125_m10.css';
import SharedComponent375 from '@/generated/components/SharedComponent375';
import SharedComponent376 from '@/generated/components/SharedComponent376';
import SharedComponent377 from '@/generated/components/SharedComponent377';
import SharedComponent378 from '@/generated/components/SharedComponent378';
import SharedComponent379 from '@/generated/components/SharedComponent379';
import HeavyComponent1375 from '@/generated/heavy/HeavyComponent1375';
import HeavyComponent1376 from '@/generated/heavy/HeavyComponent1376';

export default function SSGPage125() {
  return (
    <div className="p125-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 125</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent375 id="125-0" value={12500} label="S" />
        <SharedComponent376 id="125-1" value={12501} label="S" />
        <SharedComponent377 id="125-2" value={12502} label="S" />
        <SharedComponent378 id="125-3" value={12503} label="S" />
        <SharedComponent379 id="125-4" value={12504} label="S" />
        <HeavyComponent1375 config={{ level1: { level2: { level3: { value: "p125", count: 125, enabled: true, items: [] }}}}} />
        <HeavyComponent1376 config={{ level1: { level2: { level3: { value: "p125", count: 125, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
