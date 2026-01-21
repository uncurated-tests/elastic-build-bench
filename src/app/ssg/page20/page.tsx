// SSG Page 20 - v12
import '@/generated/styles/p20_m0.css';
import '@/generated/styles/p20_m1.css';
import '@/generated/styles/p20_m2.css';
import '@/generated/styles/p20_m3.css';
import '@/generated/styles/p20_m4.css';
import '@/generated/styles/p20_m5.css';
import '@/generated/styles/p20_m6.css';
import '@/generated/styles/p20_m7.css';
import '@/generated/styles/p20_m8.css';
import '@/generated/styles/p20_m9.css';
import '@/generated/styles/p20_m10.css';
import SharedComponent140 from '@/generated/components/SharedComponent140';
import SharedComponent141 from '@/generated/components/SharedComponent141';
import SharedComponent142 from '@/generated/components/SharedComponent142';
import SharedComponent143 from '@/generated/components/SharedComponent143';
import SharedComponent144 from '@/generated/components/SharedComponent144';
import HeavyComponent220 from '@/generated/heavy/HeavyComponent220';
import HeavyComponent221 from '@/generated/heavy/HeavyComponent221';

export default function SSGPage20() {
  return (
    <div className="p20-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 20</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent140 id="20-0" value={2000} label="S" />
        <SharedComponent141 id="20-1" value={2001} label="S" />
        <SharedComponent142 id="20-2" value={2002} label="S" />
        <SharedComponent143 id="20-3" value={2003} label="S" />
        <SharedComponent144 id="20-4" value={2004} label="S" />
        <HeavyComponent220 config={{ level1: { level2: { level3: { value: "p20", count: 20, enabled: true, items: [] }}}}} />
        <HeavyComponent221 config={{ level1: { level2: { level3: { value: "p20", count: 20, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
