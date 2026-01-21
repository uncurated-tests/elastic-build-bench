// SSG Page 303 - v12
import '@/generated/styles/p303_m0.css';
import '@/generated/styles/p303_m1.css';
import '@/generated/styles/p303_m2.css';
import '@/generated/styles/p303_m3.css';
import '@/generated/styles/p303_m4.css';
import '@/generated/styles/p303_m5.css';
import '@/generated/styles/p303_m6.css';
import '@/generated/styles/p303_m7.css';
import '@/generated/styles/p303_m8.css';
import '@/generated/styles/p303_m9.css';
import '@/generated/styles/p303_m10.css';
import SharedComponent121 from '@/generated/components/SharedComponent121';
import SharedComponent122 from '@/generated/components/SharedComponent122';
import SharedComponent123 from '@/generated/components/SharedComponent123';
import SharedComponent124 from '@/generated/components/SharedComponent124';
import SharedComponent125 from '@/generated/components/SharedComponent125';
import HeavyComponent3333 from '@/generated/heavy/HeavyComponent3333';
import HeavyComponent3334 from '@/generated/heavy/HeavyComponent3334';

export default function SSGPage303() {
  return (
    <div className="p303-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 303</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent121 id="303-0" value={30300} label="S" />
        <SharedComponent122 id="303-1" value={30301} label="S" />
        <SharedComponent123 id="303-2" value={30302} label="S" />
        <SharedComponent124 id="303-3" value={30303} label="S" />
        <SharedComponent125 id="303-4" value={30304} label="S" />
        <HeavyComponent3333 config={{ level1: { level2: { level3: { value: "p303", count: 303, enabled: true, items: [] }}}}} />
        <HeavyComponent3334 config={{ level1: { level2: { level3: { value: "p303", count: 303, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
