// SSG Page 133 - v12
import '@/generated/styles/p133_m0.css';
import SharedComponent431 from '@/generated/components/SharedComponent431';
import SharedComponent432 from '@/generated/components/SharedComponent432';
import SharedComponent433 from '@/generated/components/SharedComponent433';
import SharedComponent434 from '@/generated/components/SharedComponent434';
import SharedComponent435 from '@/generated/components/SharedComponent435';
import HeavyComponent1463 from '@/generated/heavy/HeavyComponent1463';
import HeavyComponent1464 from '@/generated/heavy/HeavyComponent1464';

export default function SSGPage133() {
  return (
    <div className="p133-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 133</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent431 id="133-0" value={13300} label="S" />
        <SharedComponent432 id="133-1" value={13301} label="S" />
        <SharedComponent433 id="133-2" value={13302} label="S" />
        <SharedComponent434 id="133-3" value={13303} label="S" />
        <SharedComponent435 id="133-4" value={13304} label="S" />
        <HeavyComponent1463 config={{ level1: { level2: { level3: { value: "p133", count: 133, enabled: true, items: [] }}}}} />
        <HeavyComponent1464 config={{ level1: { level2: { level3: { value: "p133", count: 133, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
