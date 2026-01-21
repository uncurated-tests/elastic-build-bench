// SSG Page 1286 - v12
import '@/generated/styles/p1286_m0.css';
import SharedComponent2 from '@/generated/components/SharedComponent2';
import SharedComponent3 from '@/generated/components/SharedComponent3';
import SharedComponent4 from '@/generated/components/SharedComponent4';
import SharedComponent5 from '@/generated/components/SharedComponent5';
import SharedComponent6 from '@/generated/components/SharedComponent6';
import HeavyComponent4771 from '@/generated/heavy/HeavyComponent4771';
import HeavyComponent4772 from '@/generated/heavy/HeavyComponent4772';

export default function SSGPage1286() {
  return (
    <div className="p1286-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1286</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent2 id="1286-0" value={128600} label="S" />
        <SharedComponent3 id="1286-1" value={128601} label="S" />
        <SharedComponent4 id="1286-2" value={128602} label="S" />
        <SharedComponent5 id="1286-3" value={128603} label="S" />
        <SharedComponent6 id="1286-4" value={128604} label="S" />
        <HeavyComponent4771 config={{ level1: { level2: { level3: { value: "p1286", count: 1286, enabled: true, items: [] }}}}} />
        <HeavyComponent4772 config={{ level1: { level2: { level3: { value: "p1286", count: 1286, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
