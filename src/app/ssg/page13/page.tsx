// SSG Page 13 - v12
import '@/generated/styles/p13_m0.css';
import '@/generated/styles/p13_m1.css';
import '@/generated/styles/p13_m2.css';
import '@/generated/styles/p13_m3.css';
import '@/generated/styles/p13_m4.css';
import '@/generated/styles/p13_m5.css';
import '@/generated/styles/p13_m6.css';
import '@/generated/styles/p13_m7.css';
import '@/generated/styles/p13_m8.css';
import '@/generated/styles/p13_m9.css';
import '@/generated/styles/p13_m10.css';
import SharedComponent91 from '@/generated/components/SharedComponent91';
import SharedComponent92 from '@/generated/components/SharedComponent92';
import SharedComponent93 from '@/generated/components/SharedComponent93';
import SharedComponent94 from '@/generated/components/SharedComponent94';
import SharedComponent95 from '@/generated/components/SharedComponent95';
import HeavyComponent143 from '@/generated/heavy/HeavyComponent143';
import HeavyComponent144 from '@/generated/heavy/HeavyComponent144';

export default function SSGPage13() {
  return (
    <div className="p13-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 13</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent91 id="13-0" value={1300} label="S" />
        <SharedComponent92 id="13-1" value={1301} label="S" />
        <SharedComponent93 id="13-2" value={1302} label="S" />
        <SharedComponent94 id="13-3" value={1303} label="S" />
        <SharedComponent95 id="13-4" value={1304} label="S" />
        <HeavyComponent143 config={{ level1: { level2: { level3: { value: "p13", count: 13, enabled: true, items: [] }}}}} />
        <HeavyComponent144 config={{ level1: { level2: { level3: { value: "p13", count: 13, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
