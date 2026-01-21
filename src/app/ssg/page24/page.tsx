// SSG Page 24 - v12
import '@/generated/styles/p24_m0.css';
import SharedComponent168 from '@/generated/components/SharedComponent168';
import SharedComponent169 from '@/generated/components/SharedComponent169';
import SharedComponent170 from '@/generated/components/SharedComponent170';
import SharedComponent171 from '@/generated/components/SharedComponent171';
import SharedComponent172 from '@/generated/components/SharedComponent172';
import HeavyComponent264 from '@/generated/heavy/HeavyComponent264';
import HeavyComponent265 from '@/generated/heavy/HeavyComponent265';

export default function SSGPage24() {
  return (
    <div className="p24-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 24</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent168 id="24-0" value={2400} label="S" />
        <SharedComponent169 id="24-1" value={2401} label="S" />
        <SharedComponent170 id="24-2" value={2402} label="S" />
        <SharedComponent171 id="24-3" value={2403} label="S" />
        <SharedComponent172 id="24-4" value={2404} label="S" />
        <HeavyComponent264 config={{ level1: { level2: { level3: { value: "p24", count: 24, enabled: true, items: [] }}}}} />
        <HeavyComponent265 config={{ level1: { level2: { level3: { value: "p24", count: 24, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
