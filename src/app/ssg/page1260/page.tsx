// SSG Page 1260 - v12
import '@/generated/styles/p1260_m0.css';
import SharedComponent320 from '@/generated/components/SharedComponent320';
import SharedComponent321 from '@/generated/components/SharedComponent321';
import SharedComponent322 from '@/generated/components/SharedComponent322';
import SharedComponent323 from '@/generated/components/SharedComponent323';
import SharedComponent324 from '@/generated/components/SharedComponent324';
import HeavyComponent4485 from '@/generated/heavy/HeavyComponent4485';
import HeavyComponent4486 from '@/generated/heavy/HeavyComponent4486';

export default function SSGPage1260() {
  return (
    <div className="p1260-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1260</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent320 id="1260-0" value={126000} label="S" />
        <SharedComponent321 id="1260-1" value={126001} label="S" />
        <SharedComponent322 id="1260-2" value={126002} label="S" />
        <SharedComponent323 id="1260-3" value={126003} label="S" />
        <SharedComponent324 id="1260-4" value={126004} label="S" />
        <HeavyComponent4485 config={{ level1: { level2: { level3: { value: "p1260", count: 1260, enabled: true, items: [] }}}}} />
        <HeavyComponent4486 config={{ level1: { level2: { level3: { value: "p1260", count: 1260, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
