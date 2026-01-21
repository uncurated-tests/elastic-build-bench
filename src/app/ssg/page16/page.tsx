// SSG Page 16 - v12
import '@/generated/styles/p16_m0.css';
import SharedComponent112 from '@/generated/components/SharedComponent112';
import SharedComponent113 from '@/generated/components/SharedComponent113';
import SharedComponent114 from '@/generated/components/SharedComponent114';
import SharedComponent115 from '@/generated/components/SharedComponent115';
import SharedComponent116 from '@/generated/components/SharedComponent116';
import HeavyComponent176 from '@/generated/heavy/HeavyComponent176';
import HeavyComponent177 from '@/generated/heavy/HeavyComponent177';

export default function SSGPage16() {
  return (
    <div className="p16-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 16</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent112 id="16-0" value={1600} label="S" />
        <SharedComponent113 id="16-1" value={1601} label="S" />
        <SharedComponent114 id="16-2" value={1602} label="S" />
        <SharedComponent115 id="16-3" value={1603} label="S" />
        <SharedComponent116 id="16-4" value={1604} label="S" />
        <HeavyComponent176 config={{ level1: { level2: { level3: { value: "p16", count: 16, enabled: true, items: [] }}}}} />
        <HeavyComponent177 config={{ level1: { level2: { level3: { value: "p16", count: 16, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
