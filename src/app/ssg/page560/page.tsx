// SSG Page 560 - v12
import '@/generated/styles/p560_m0.css';
import SharedComponent420 from '@/generated/components/SharedComponent420';
import SharedComponent421 from '@/generated/components/SharedComponent421';
import SharedComponent422 from '@/generated/components/SharedComponent422';
import SharedComponent423 from '@/generated/components/SharedComponent423';
import SharedComponent424 from '@/generated/components/SharedComponent424';
import HeavyComponent6160 from '@/generated/heavy/HeavyComponent6160';
import HeavyComponent6161 from '@/generated/heavy/HeavyComponent6161';

export default function SSGPage560() {
  return (
    <div className="p560-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 560</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent420 id="560-0" value={56000} label="S" />
        <SharedComponent421 id="560-1" value={56001} label="S" />
        <SharedComponent422 id="560-2" value={56002} label="S" />
        <SharedComponent423 id="560-3" value={56003} label="S" />
        <SharedComponent424 id="560-4" value={56004} label="S" />
        <HeavyComponent6160 config={{ level1: { level2: { level3: { value: "p560", count: 560, enabled: true, items: [] }}}}} />
        <HeavyComponent6161 config={{ level1: { level2: { level3: { value: "p560", count: 560, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
