// SSG Page 600 - v12
import '@/generated/styles/p600_m0.css';
import '@/generated/styles/p600_m1.css';
import '@/generated/styles/p600_m2.css';
import '@/generated/styles/p600_m3.css';
import '@/generated/styles/p600_m4.css';
import '@/generated/styles/p600_m5.css';
import '@/generated/styles/p600_m6.css';
import '@/generated/styles/p600_m7.css';
import '@/generated/styles/p600_m8.css';
import '@/generated/styles/p600_m9.css';
import '@/generated/styles/p600_m10.css';
import SharedComponent200 from '@/generated/components/SharedComponent200';
import SharedComponent201 from '@/generated/components/SharedComponent201';
import SharedComponent202 from '@/generated/components/SharedComponent202';
import SharedComponent203 from '@/generated/components/SharedComponent203';
import SharedComponent204 from '@/generated/components/SharedComponent204';
import HeavyComponent6600 from '@/generated/heavy/HeavyComponent6600';
import HeavyComponent6601 from '@/generated/heavy/HeavyComponent6601';

export default function SSGPage600() {
  return (
    <div className="p600-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 600</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent200 id="600-0" value={60000} label="S" />
        <SharedComponent201 id="600-1" value={60001} label="S" />
        <SharedComponent202 id="600-2" value={60002} label="S" />
        <SharedComponent203 id="600-3" value={60003} label="S" />
        <SharedComponent204 id="600-4" value={60004} label="S" />
        <HeavyComponent6600 config={{ level1: { level2: { level3: { value: "p600", count: 600, enabled: true, items: [] }}}}} />
        <HeavyComponent6601 config={{ level1: { level2: { level3: { value: "p600", count: 600, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
