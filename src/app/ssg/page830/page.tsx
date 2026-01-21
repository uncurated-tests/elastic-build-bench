// SSG Page 830 - v12
import '@/generated/styles/p830_m0.css';
import '@/generated/styles/p830_m1.css';
import '@/generated/styles/p830_m2.css';
import '@/generated/styles/p830_m3.css';
import '@/generated/styles/p830_m4.css';
import '@/generated/styles/p830_m5.css';
import '@/generated/styles/p830_m6.css';
import '@/generated/styles/p830_m7.css';
import '@/generated/styles/p830_m8.css';
import '@/generated/styles/p830_m9.css';
import '@/generated/styles/p830_m10.css';
import SharedComponent310 from '@/generated/components/SharedComponent310';
import SharedComponent311 from '@/generated/components/SharedComponent311';
import SharedComponent312 from '@/generated/components/SharedComponent312';
import SharedComponent313 from '@/generated/components/SharedComponent313';
import SharedComponent314 from '@/generated/components/SharedComponent314';
import HeavyComponent9130 from '@/generated/heavy/HeavyComponent9130';
import HeavyComponent9131 from '@/generated/heavy/HeavyComponent9131';

export default function SSGPage830() {
  return (
    <div className="p830-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 830</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent310 id="830-0" value={83000} label="S" />
        <SharedComponent311 id="830-1" value={83001} label="S" />
        <SharedComponent312 id="830-2" value={83002} label="S" />
        <SharedComponent313 id="830-3" value={83003} label="S" />
        <SharedComponent314 id="830-4" value={83004} label="S" />
        <HeavyComponent9130 config={{ level1: { level2: { level3: { value: "p830", count: 830, enabled: true, items: [] }}}}} />
        <HeavyComponent9131 config={{ level1: { level2: { level3: { value: "p830", count: 830, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
