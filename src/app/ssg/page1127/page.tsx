// SSG Page 1127 - v12
import '@/generated/styles/p1127_m0.css';
import SharedComponent389 from '@/generated/components/SharedComponent389';
import SharedComponent390 from '@/generated/components/SharedComponent390';
import SharedComponent391 from '@/generated/components/SharedComponent391';
import SharedComponent392 from '@/generated/components/SharedComponent392';
import SharedComponent393 from '@/generated/components/SharedComponent393';
import HeavyComponent3022 from '@/generated/heavy/HeavyComponent3022';
import HeavyComponent3023 from '@/generated/heavy/HeavyComponent3023';

export default function SSGPage1127() {
  return (
    <div className="p1127-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1127</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent389 id="1127-0" value={112700} label="S" />
        <SharedComponent390 id="1127-1" value={112701} label="S" />
        <SharedComponent391 id="1127-2" value={112702} label="S" />
        <SharedComponent392 id="1127-3" value={112703} label="S" />
        <SharedComponent393 id="1127-4" value={112704} label="S" />
        <HeavyComponent3022 config={{ level1: { level2: { level3: { value: "p1127", count: 1127, enabled: true, items: [] }}}}} />
        <HeavyComponent3023 config={{ level1: { level2: { level3: { value: "p1127", count: 1127, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
