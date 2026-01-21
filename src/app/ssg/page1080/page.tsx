// SSG Page 1080 - v12
import '@/generated/styles/p1080_m0.css';
import SharedComponent60 from '@/generated/components/SharedComponent60';
import SharedComponent61 from '@/generated/components/SharedComponent61';
import SharedComponent62 from '@/generated/components/SharedComponent62';
import SharedComponent63 from '@/generated/components/SharedComponent63';
import SharedComponent64 from '@/generated/components/SharedComponent64';
import HeavyComponent2505 from '@/generated/heavy/HeavyComponent2505';
import HeavyComponent2506 from '@/generated/heavy/HeavyComponent2506';

export default function SSGPage1080() {
  return (
    <div className="p1080-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1080</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent60 id="1080-0" value={108000} label="S" />
        <SharedComponent61 id="1080-1" value={108001} label="S" />
        <SharedComponent62 id="1080-2" value={108002} label="S" />
        <SharedComponent63 id="1080-3" value={108003} label="S" />
        <SharedComponent64 id="1080-4" value={108004} label="S" />
        <HeavyComponent2505 config={{ level1: { level2: { level3: { value: "p1080", count: 1080, enabled: true, items: [] }}}}} />
        <HeavyComponent2506 config={{ level1: { level2: { level3: { value: "p1080", count: 1080, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
