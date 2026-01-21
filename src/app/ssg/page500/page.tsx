// SSG Page 500 - v12
import '@/generated/styles/p500_m0.css';
import '@/generated/styles/p500_m1.css';
import '@/generated/styles/p500_m2.css';
import '@/generated/styles/p500_m3.css';
import '@/generated/styles/p500_m4.css';
import '@/generated/styles/p500_m5.css';
import '@/generated/styles/p500_m6.css';
import '@/generated/styles/p500_m7.css';
import '@/generated/styles/p500_m8.css';
import '@/generated/styles/p500_m9.css';
import '@/generated/styles/p500_m10.css';
import SharedComponent0 from '@/generated/components/SharedComponent0';
import SharedComponent1 from '@/generated/components/SharedComponent1';
import SharedComponent2 from '@/generated/components/SharedComponent2';
import SharedComponent3 from '@/generated/components/SharedComponent3';
import SharedComponent4 from '@/generated/components/SharedComponent4';
import HeavyComponent5500 from '@/generated/heavy/HeavyComponent5500';
import HeavyComponent5501 from '@/generated/heavy/HeavyComponent5501';

export default function SSGPage500() {
  return (
    <div className="p500-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 500</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent0 id="500-0" value={50000} label="S" />
        <SharedComponent1 id="500-1" value={50001} label="S" />
        <SharedComponent2 id="500-2" value={50002} label="S" />
        <SharedComponent3 id="500-3" value={50003} label="S" />
        <SharedComponent4 id="500-4" value={50004} label="S" />
        <HeavyComponent5500 config={{ level1: { level2: { level3: { value: "p500", count: 500, enabled: true, items: [] }}}}} />
        <HeavyComponent5501 config={{ level1: { level2: { level3: { value: "p500", count: 500, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
