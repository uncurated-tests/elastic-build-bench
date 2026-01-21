// SSG Page 1803 - v12
import '@/generated/styles/p1803_m0.css';
import SharedComponent121 from '@/generated/components/SharedComponent121';
import SharedComponent122 from '@/generated/components/SharedComponent122';
import SharedComponent123 from '@/generated/components/SharedComponent123';
import SharedComponent124 from '@/generated/components/SharedComponent124';
import SharedComponent125 from '@/generated/components/SharedComponent125';
import HeavyComponent1083 from '@/generated/heavy/HeavyComponent1083';
import HeavyComponent1084 from '@/generated/heavy/HeavyComponent1084';

export default function SSGPage1803() {
  return (
    <div className="p1803-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1803</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent121 id="1803-0" value={180300} label="S" />
        <SharedComponent122 id="1803-1" value={180301} label="S" />
        <SharedComponent123 id="1803-2" value={180302} label="S" />
        <SharedComponent124 id="1803-3" value={180303} label="S" />
        <SharedComponent125 id="1803-4" value={180304} label="S" />
        <HeavyComponent1083 config={{ level1: { level2: { level3: { value: "p1803", count: 1803, enabled: true, items: [] }}}}} />
        <HeavyComponent1084 config={{ level1: { level2: { level3: { value: "p1803", count: 1803, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
