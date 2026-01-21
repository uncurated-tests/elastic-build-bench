// SSG Page 980 - v12
import '@/generated/styles/p980_m0.css';
import '@/generated/styles/p980_m1.css';
import '@/generated/styles/p980_m2.css';
import '@/generated/styles/p980_m3.css';
import '@/generated/styles/p980_m4.css';
import '@/generated/styles/p980_m5.css';
import '@/generated/styles/p980_m6.css';
import '@/generated/styles/p980_m7.css';
import '@/generated/styles/p980_m8.css';
import '@/generated/styles/p980_m9.css';
import '@/generated/styles/p980_m10.css';
import SharedComponent360 from '@/generated/components/SharedComponent360';
import SharedComponent361 from '@/generated/components/SharedComponent361';
import SharedComponent362 from '@/generated/components/SharedComponent362';
import SharedComponent363 from '@/generated/components/SharedComponent363';
import SharedComponent364 from '@/generated/components/SharedComponent364';
import HeavyComponent10780 from '@/generated/heavy/HeavyComponent10780';
import HeavyComponent10781 from '@/generated/heavy/HeavyComponent10781';

export default function SSGPage980() {
  return (
    <div className="p980-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 980</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent360 id="980-0" value={98000} label="S" />
        <SharedComponent361 id="980-1" value={98001} label="S" />
        <SharedComponent362 id="980-2" value={98002} label="S" />
        <SharedComponent363 id="980-3" value={98003} label="S" />
        <SharedComponent364 id="980-4" value={98004} label="S" />
        <HeavyComponent10780 config={{ level1: { level2: { level3: { value: "p980", count: 980, enabled: true, items: [] }}}}} />
        <HeavyComponent10781 config={{ level1: { level2: { level3: { value: "p980", count: 980, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
