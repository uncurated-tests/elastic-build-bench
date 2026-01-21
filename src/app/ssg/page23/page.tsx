// SSG Page 23 - v12
import '@/generated/styles/p23_m0.css';
import '@/generated/styles/p23_m1.css';
import '@/generated/styles/p23_m2.css';
import '@/generated/styles/p23_m3.css';
import '@/generated/styles/p23_m4.css';
import '@/generated/styles/p23_m5.css';
import '@/generated/styles/p23_m6.css';
import '@/generated/styles/p23_m7.css';
import '@/generated/styles/p23_m8.css';
import '@/generated/styles/p23_m9.css';
import '@/generated/styles/p23_m10.css';
import SharedComponent161 from '@/generated/components/SharedComponent161';
import SharedComponent162 from '@/generated/components/SharedComponent162';
import SharedComponent163 from '@/generated/components/SharedComponent163';
import SharedComponent164 from '@/generated/components/SharedComponent164';
import SharedComponent165 from '@/generated/components/SharedComponent165';
import HeavyComponent253 from '@/generated/heavy/HeavyComponent253';
import HeavyComponent254 from '@/generated/heavy/HeavyComponent254';

export default function SSGPage23() {
  return (
    <div className="p23-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 23</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent161 id="23-0" value={2300} label="S" />
        <SharedComponent162 id="23-1" value={2301} label="S" />
        <SharedComponent163 id="23-2" value={2302} label="S" />
        <SharedComponent164 id="23-3" value={2303} label="S" />
        <SharedComponent165 id="23-4" value={2304} label="S" />
        <HeavyComponent253 config={{ level1: { level2: { level3: { value: "p23", count: 23, enabled: true, items: [] }}}}} />
        <HeavyComponent254 config={{ level1: { level2: { level3: { value: "p23", count: 23, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
