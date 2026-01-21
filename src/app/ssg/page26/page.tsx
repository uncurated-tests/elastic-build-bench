// SSG Page 26 - v12
import '@/generated/styles/p26_m0.css';
import '@/generated/styles/p26_m1.css';
import '@/generated/styles/p26_m2.css';
import '@/generated/styles/p26_m3.css';
import '@/generated/styles/p26_m4.css';
import '@/generated/styles/p26_m5.css';
import '@/generated/styles/p26_m6.css';
import '@/generated/styles/p26_m7.css';
import '@/generated/styles/p26_m8.css';
import '@/generated/styles/p26_m9.css';
import '@/generated/styles/p26_m10.css';
import SharedComponent182 from '@/generated/components/SharedComponent182';
import SharedComponent183 from '@/generated/components/SharedComponent183';
import SharedComponent184 from '@/generated/components/SharedComponent184';
import SharedComponent185 from '@/generated/components/SharedComponent185';
import SharedComponent186 from '@/generated/components/SharedComponent186';
import HeavyComponent286 from '@/generated/heavy/HeavyComponent286';
import HeavyComponent287 from '@/generated/heavy/HeavyComponent287';

export default function SSGPage26() {
  return (
    <div className="p26-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 26</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent182 id="26-0" value={2600} label="S" />
        <SharedComponent183 id="26-1" value={2601} label="S" />
        <SharedComponent184 id="26-2" value={2602} label="S" />
        <SharedComponent185 id="26-3" value={2603} label="S" />
        <SharedComponent186 id="26-4" value={2604} label="S" />
        <HeavyComponent286 config={{ level1: { level2: { level3: { value: "p26", count: 26, enabled: true, items: [] }}}}} />
        <HeavyComponent287 config={{ level1: { level2: { level3: { value: "p26", count: 26, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
