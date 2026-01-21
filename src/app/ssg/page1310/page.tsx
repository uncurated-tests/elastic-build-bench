// SSG Page 1310 - v12
import '@/generated/styles/p1310_m0.css';
import SharedComponent170 from '@/generated/components/SharedComponent170';
import SharedComponent171 from '@/generated/components/SharedComponent171';
import SharedComponent172 from '@/generated/components/SharedComponent172';
import SharedComponent173 from '@/generated/components/SharedComponent173';
import SharedComponent174 from '@/generated/components/SharedComponent174';
import HeavyComponent5035 from '@/generated/heavy/HeavyComponent5035';
import HeavyComponent5036 from '@/generated/heavy/HeavyComponent5036';

export default function SSGPage1310() {
  return (
    <div className="p1310-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1310</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent170 id="1310-0" value={131000} label="S" />
        <SharedComponent171 id="1310-1" value={131001} label="S" />
        <SharedComponent172 id="1310-2" value={131002} label="S" />
        <SharedComponent173 id="1310-3" value={131003} label="S" />
        <SharedComponent174 id="1310-4" value={131004} label="S" />
        <HeavyComponent5035 config={{ level1: { level2: { level3: { value: "p1310", count: 1310, enabled: true, items: [] }}}}} />
        <HeavyComponent5036 config={{ level1: { level2: { level3: { value: "p1310", count: 1310, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
