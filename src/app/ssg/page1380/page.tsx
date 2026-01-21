// SSG Page 1380 - v12
import '@/generated/styles/p1380_m0.css';
import SharedComponent160 from '@/generated/components/SharedComponent160';
import SharedComponent161 from '@/generated/components/SharedComponent161';
import SharedComponent162 from '@/generated/components/SharedComponent162';
import SharedComponent163 from '@/generated/components/SharedComponent163';
import SharedComponent164 from '@/generated/components/SharedComponent164';
import HeavyComponent5805 from '@/generated/heavy/HeavyComponent5805';
import HeavyComponent5806 from '@/generated/heavy/HeavyComponent5806';

export default function SSGPage1380() {
  return (
    <div className="p1380-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1380</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent160 id="1380-0" value={138000} label="S" />
        <SharedComponent161 id="1380-1" value={138001} label="S" />
        <SharedComponent162 id="1380-2" value={138002} label="S" />
        <SharedComponent163 id="1380-3" value={138003} label="S" />
        <SharedComponent164 id="1380-4" value={138004} label="S" />
        <HeavyComponent5805 config={{ level1: { level2: { level3: { value: "p1380", count: 1380, enabled: true, items: [] }}}}} />
        <HeavyComponent5806 config={{ level1: { level2: { level3: { value: "p1380", count: 1380, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
