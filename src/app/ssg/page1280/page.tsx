// SSG Page 1280 - v12
import '@/generated/styles/p1280_m0.css';
import '@/generated/styles/p1280_m1.css';
import '@/generated/styles/p1280_m2.css';
import '@/generated/styles/p1280_m3.css';
import '@/generated/styles/p1280_m4.css';
import '@/generated/styles/p1280_m5.css';
import '@/generated/styles/p1280_m6.css';
import '@/generated/styles/p1280_m7.css';
import '@/generated/styles/p1280_m8.css';
import '@/generated/styles/p1280_m9.css';
import '@/generated/styles/p1280_m10.css';
import SharedComponent460 from '@/generated/components/SharedComponent460';
import SharedComponent461 from '@/generated/components/SharedComponent461';
import SharedComponent462 from '@/generated/components/SharedComponent462';
import SharedComponent463 from '@/generated/components/SharedComponent463';
import SharedComponent464 from '@/generated/components/SharedComponent464';
import HeavyComponent14080 from '@/generated/heavy/HeavyComponent14080';
import HeavyComponent14081 from '@/generated/heavy/HeavyComponent14081';

export default function SSGPage1280() {
  return (
    <div className="p1280-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1280</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent460 id="1280-0" value={128000} label="S" />
        <SharedComponent461 id="1280-1" value={128001} label="S" />
        <SharedComponent462 id="1280-2" value={128002} label="S" />
        <SharedComponent463 id="1280-3" value={128003} label="S" />
        <SharedComponent464 id="1280-4" value={128004} label="S" />
        <HeavyComponent14080 config={{ level1: { level2: { level3: { value: "p1280", count: 1280, enabled: true, items: [] }}}}} />
        <HeavyComponent14081 config={{ level1: { level2: { level3: { value: "p1280", count: 1280, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
