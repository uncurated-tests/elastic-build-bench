// SSG Page 325 - v12
import '@/generated/styles/p325_m0.css';
import SharedComponent275 from '@/generated/components/SharedComponent275';
import SharedComponent276 from '@/generated/components/SharedComponent276';
import SharedComponent277 from '@/generated/components/SharedComponent277';
import SharedComponent278 from '@/generated/components/SharedComponent278';
import SharedComponent279 from '@/generated/components/SharedComponent279';
import HeavyComponent3575 from '@/generated/heavy/HeavyComponent3575';
import HeavyComponent3576 from '@/generated/heavy/HeavyComponent3576';

export default function SSGPage325() {
  return (
    <div className="p325-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 325</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent275 id="325-0" value={32500} label="S" />
        <SharedComponent276 id="325-1" value={32501} label="S" />
        <SharedComponent277 id="325-2" value={32502} label="S" />
        <SharedComponent278 id="325-3" value={32503} label="S" />
        <SharedComponent279 id="325-4" value={32504} label="S" />
        <HeavyComponent3575 config={{ level1: { level2: { level3: { value: "p325", count: 325, enabled: true, items: [] }}}}} />
        <HeavyComponent3576 config={{ level1: { level2: { level3: { value: "p325", count: 325, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
