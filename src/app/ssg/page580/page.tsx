// SSG Page 580 - v12
import '@/generated/styles/p580_m0.css';
import '@/generated/styles/p580_m1.css';
import '@/generated/styles/p580_m2.css';
import '@/generated/styles/p580_m3.css';
import '@/generated/styles/p580_m4.css';
import '@/generated/styles/p580_m5.css';
import '@/generated/styles/p580_m6.css';
import '@/generated/styles/p580_m7.css';
import '@/generated/styles/p580_m8.css';
import '@/generated/styles/p580_m9.css';
import '@/generated/styles/p580_m10.css';
import SharedComponent60 from '@/generated/components/SharedComponent60';
import SharedComponent61 from '@/generated/components/SharedComponent61';
import SharedComponent62 from '@/generated/components/SharedComponent62';
import SharedComponent63 from '@/generated/components/SharedComponent63';
import SharedComponent64 from '@/generated/components/SharedComponent64';
import HeavyComponent6380 from '@/generated/heavy/HeavyComponent6380';
import HeavyComponent6381 from '@/generated/heavy/HeavyComponent6381';

export default function SSGPage580() {
  return (
    <div className="p580-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 580</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent60 id="580-0" value={58000} label="S" />
        <SharedComponent61 id="580-1" value={58001} label="S" />
        <SharedComponent62 id="580-2" value={58002} label="S" />
        <SharedComponent63 id="580-3" value={58003} label="S" />
        <SharedComponent64 id="580-4" value={58004} label="S" />
        <HeavyComponent6380 config={{ level1: { level2: { level3: { value: "p580", count: 580, enabled: true, items: [] }}}}} />
        <HeavyComponent6381 config={{ level1: { level2: { level3: { value: "p580", count: 580, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
