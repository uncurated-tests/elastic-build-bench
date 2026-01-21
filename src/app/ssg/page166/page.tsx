// SSG Page 166 - v12
import '@/generated/styles/p166_m0.css';
import SharedComponent162 from '@/generated/components/SharedComponent162';
import SharedComponent163 from '@/generated/components/SharedComponent163';
import SharedComponent164 from '@/generated/components/SharedComponent164';
import SharedComponent165 from '@/generated/components/SharedComponent165';
import SharedComponent166 from '@/generated/components/SharedComponent166';
import HeavyComponent1826 from '@/generated/heavy/HeavyComponent1826';
import HeavyComponent1827 from '@/generated/heavy/HeavyComponent1827';

export default function SSGPage166() {
  return (
    <div className="p166-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 166</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent162 id="166-0" value={16600} label="S" />
        <SharedComponent163 id="166-1" value={16601} label="S" />
        <SharedComponent164 id="166-2" value={16602} label="S" />
        <SharedComponent165 id="166-3" value={16603} label="S" />
        <SharedComponent166 id="166-4" value={16604} label="S" />
        <HeavyComponent1826 config={{ level1: { level2: { level3: { value: "p166", count: 166, enabled: true, items: [] }}}}} />
        <HeavyComponent1827 config={{ level1: { level2: { level3: { value: "p166", count: 166, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
