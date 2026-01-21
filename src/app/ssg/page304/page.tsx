// SSG Page 304 - v12
import '@/generated/styles/p304_m0.css';
import SharedComponent128 from '@/generated/components/SharedComponent128';
import SharedComponent129 from '@/generated/components/SharedComponent129';
import SharedComponent130 from '@/generated/components/SharedComponent130';
import SharedComponent131 from '@/generated/components/SharedComponent131';
import SharedComponent132 from '@/generated/components/SharedComponent132';
import HeavyComponent3344 from '@/generated/heavy/HeavyComponent3344';
import HeavyComponent3345 from '@/generated/heavy/HeavyComponent3345';

export default function SSGPage304() {
  return (
    <div className="p304-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 304</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent128 id="304-0" value={30400} label="S" />
        <SharedComponent129 id="304-1" value={30401} label="S" />
        <SharedComponent130 id="304-2" value={30402} label="S" />
        <SharedComponent131 id="304-3" value={30403} label="S" />
        <SharedComponent132 id="304-4" value={30404} label="S" />
        <HeavyComponent3344 config={{ level1: { level2: { level3: { value: "p304", count: 304, enabled: true, items: [] }}}}} />
        <HeavyComponent3345 config={{ level1: { level2: { level3: { value: "p304", count: 304, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
