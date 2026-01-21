// SSG Page 225 - v12
import '@/generated/styles/p225_m0.css';
import SharedComponent75 from '@/generated/components/SharedComponent75';
import SharedComponent76 from '@/generated/components/SharedComponent76';
import SharedComponent77 from '@/generated/components/SharedComponent77';
import SharedComponent78 from '@/generated/components/SharedComponent78';
import SharedComponent79 from '@/generated/components/SharedComponent79';
import HeavyComponent2475 from '@/generated/heavy/HeavyComponent2475';
import HeavyComponent2476 from '@/generated/heavy/HeavyComponent2476';

export default function SSGPage225() {
  return (
    <div className="p225-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 225</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent75 id="225-0" value={22500} label="S" />
        <SharedComponent76 id="225-1" value={22501} label="S" />
        <SharedComponent77 id="225-2" value={22502} label="S" />
        <SharedComponent78 id="225-3" value={22503} label="S" />
        <SharedComponent79 id="225-4" value={22504} label="S" />
        <HeavyComponent2475 config={{ level1: { level2: { level3: { value: "p225", count: 225, enabled: true, items: [] }}}}} />
        <HeavyComponent2476 config={{ level1: { level2: { level3: { value: "p225", count: 225, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
