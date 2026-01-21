// SSG Page 1203 - v12
import '@/generated/styles/p1203_m0.css';
import SharedComponent421 from '@/generated/components/SharedComponent421';
import SharedComponent422 from '@/generated/components/SharedComponent422';
import SharedComponent423 from '@/generated/components/SharedComponent423';
import SharedComponent424 from '@/generated/components/SharedComponent424';
import SharedComponent425 from '@/generated/components/SharedComponent425';
import HeavyComponent3858 from '@/generated/heavy/HeavyComponent3858';
import HeavyComponent3859 from '@/generated/heavy/HeavyComponent3859';

export default function SSGPage1203() {
  return (
    <div className="p1203-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1203</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent421 id="1203-0" value={120300} label="S" />
        <SharedComponent422 id="1203-1" value={120301} label="S" />
        <SharedComponent423 id="1203-2" value={120302} label="S" />
        <SharedComponent424 id="1203-3" value={120303} label="S" />
        <SharedComponent425 id="1203-4" value={120304} label="S" />
        <HeavyComponent3858 config={{ level1: { level2: { level3: { value: "p1203", count: 1203, enabled: true, items: [] }}}}} />
        <HeavyComponent3859 config={{ level1: { level2: { level3: { value: "p1203", count: 1203, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
