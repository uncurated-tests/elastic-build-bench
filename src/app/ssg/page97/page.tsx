// SSG Page 97 - v12
import '@/generated/styles/p97_m0.css';
import SharedComponent179 from '@/generated/components/SharedComponent179';
import SharedComponent180 from '@/generated/components/SharedComponent180';
import SharedComponent181 from '@/generated/components/SharedComponent181';
import SharedComponent182 from '@/generated/components/SharedComponent182';
import SharedComponent183 from '@/generated/components/SharedComponent183';
import HeavyComponent1067 from '@/generated/heavy/HeavyComponent1067';
import HeavyComponent1068 from '@/generated/heavy/HeavyComponent1068';

export default function SSGPage97() {
  return (
    <div className="p97-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 97</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent179 id="97-0" value={9700} label="S" />
        <SharedComponent180 id="97-1" value={9701} label="S" />
        <SharedComponent181 id="97-2" value={9702} label="S" />
        <SharedComponent182 id="97-3" value={9703} label="S" />
        <SharedComponent183 id="97-4" value={9704} label="S" />
        <HeavyComponent1067 config={{ level1: { level2: { level3: { value: "p97", count: 97, enabled: true, items: [] }}}}} />
        <HeavyComponent1068 config={{ level1: { level2: { level3: { value: "p97", count: 97, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
