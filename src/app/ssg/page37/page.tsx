// SSG Page 37 - v12
import '@/generated/styles/p37_m0.css';
import '@/generated/styles/p37_m1.css';
import '@/generated/styles/p37_m2.css';
import '@/generated/styles/p37_m3.css';
import '@/generated/styles/p37_m4.css';
import '@/generated/styles/p37_m5.css';
import '@/generated/styles/p37_m6.css';
import '@/generated/styles/p37_m7.css';
import '@/generated/styles/p37_m8.css';
import '@/generated/styles/p37_m9.css';
import '@/generated/styles/p37_m10.css';
import SharedComponent259 from '@/generated/components/SharedComponent259';
import SharedComponent260 from '@/generated/components/SharedComponent260';
import SharedComponent261 from '@/generated/components/SharedComponent261';
import SharedComponent262 from '@/generated/components/SharedComponent262';
import SharedComponent263 from '@/generated/components/SharedComponent263';
import HeavyComponent407 from '@/generated/heavy/HeavyComponent407';
import HeavyComponent408 from '@/generated/heavy/HeavyComponent408';

export default function SSGPage37() {
  return (
    <div className="p37-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 37</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent259 id="37-0" value={3700} label="S" />
        <SharedComponent260 id="37-1" value={3701} label="S" />
        <SharedComponent261 id="37-2" value={3702} label="S" />
        <SharedComponent262 id="37-3" value={3703} label="S" />
        <SharedComponent263 id="37-4" value={3704} label="S" />
        <HeavyComponent407 config={{ level1: { level2: { level3: { value: "p37", count: 37, enabled: true, items: [] }}}}} />
        <HeavyComponent408 config={{ level1: { level2: { level3: { value: "p37", count: 37, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
