// SSG Page 260 - v12
import '@/generated/styles/p260_m0.css';
import '@/generated/styles/p260_m1.css';
import '@/generated/styles/p260_m2.css';
import '@/generated/styles/p260_m3.css';
import '@/generated/styles/p260_m4.css';
import '@/generated/styles/p260_m5.css';
import '@/generated/styles/p260_m6.css';
import '@/generated/styles/p260_m7.css';
import '@/generated/styles/p260_m8.css';
import '@/generated/styles/p260_m9.css';
import '@/generated/styles/p260_m10.css';
import SharedComponent320 from '@/generated/components/SharedComponent320';
import SharedComponent321 from '@/generated/components/SharedComponent321';
import SharedComponent322 from '@/generated/components/SharedComponent322';
import SharedComponent323 from '@/generated/components/SharedComponent323';
import SharedComponent324 from '@/generated/components/SharedComponent324';
import HeavyComponent2860 from '@/generated/heavy/HeavyComponent2860';
import HeavyComponent2861 from '@/generated/heavy/HeavyComponent2861';

export default function SSGPage260() {
  return (
    <div className="p260-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 260</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent320 id="260-0" value={26000} label="S" />
        <SharedComponent321 id="260-1" value={26001} label="S" />
        <SharedComponent322 id="260-2" value={26002} label="S" />
        <SharedComponent323 id="260-3" value={26003} label="S" />
        <SharedComponent324 id="260-4" value={26004} label="S" />
        <HeavyComponent2860 config={{ level1: { level2: { level3: { value: "p260", count: 260, enabled: true, items: [] }}}}} />
        <HeavyComponent2861 config={{ level1: { level2: { level3: { value: "p260", count: 260, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
