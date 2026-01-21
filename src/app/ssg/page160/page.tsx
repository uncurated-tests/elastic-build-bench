// SSG Page 160 - v12
import '@/generated/styles/p160_m0.css';
import '@/generated/styles/p160_m1.css';
import '@/generated/styles/p160_m2.css';
import '@/generated/styles/p160_m3.css';
import '@/generated/styles/p160_m4.css';
import '@/generated/styles/p160_m5.css';
import '@/generated/styles/p160_m6.css';
import '@/generated/styles/p160_m7.css';
import '@/generated/styles/p160_m8.css';
import '@/generated/styles/p160_m9.css';
import '@/generated/styles/p160_m10.css';
import SharedComponent120 from '@/generated/components/SharedComponent120';
import SharedComponent121 from '@/generated/components/SharedComponent121';
import SharedComponent122 from '@/generated/components/SharedComponent122';
import SharedComponent123 from '@/generated/components/SharedComponent123';
import SharedComponent124 from '@/generated/components/SharedComponent124';
import HeavyComponent1760 from '@/generated/heavy/HeavyComponent1760';
import HeavyComponent1761 from '@/generated/heavy/HeavyComponent1761';

export default function SSGPage160() {
  return (
    <div className="p160-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 160</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent120 id="160-0" value={16000} label="S" />
        <SharedComponent121 id="160-1" value={16001} label="S" />
        <SharedComponent122 id="160-2" value={16002} label="S" />
        <SharedComponent123 id="160-3" value={16003} label="S" />
        <SharedComponent124 id="160-4" value={16004} label="S" />
        <HeavyComponent1760 config={{ level1: { level2: { level3: { value: "p160", count: 160, enabled: true, items: [] }}}}} />
        <HeavyComponent1761 config={{ level1: { level2: { level3: { value: "p160", count: 160, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
