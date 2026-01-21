// SSG Page 246 - v12
import '@/generated/styles/p246_m0.css';
import SharedComponent222 from '@/generated/components/SharedComponent222';
import SharedComponent223 from '@/generated/components/SharedComponent223';
import SharedComponent224 from '@/generated/components/SharedComponent224';
import SharedComponent225 from '@/generated/components/SharedComponent225';
import SharedComponent226 from '@/generated/components/SharedComponent226';
import HeavyComponent2706 from '@/generated/heavy/HeavyComponent2706';
import HeavyComponent2707 from '@/generated/heavy/HeavyComponent2707';

export default function SSGPage246() {
  return (
    <div className="p246-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 246</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent222 id="246-0" value={24600} label="S" />
        <SharedComponent223 id="246-1" value={24601} label="S" />
        <SharedComponent224 id="246-2" value={24602} label="S" />
        <SharedComponent225 id="246-3" value={24603} label="S" />
        <SharedComponent226 id="246-4" value={24604} label="S" />
        <HeavyComponent2706 config={{ level1: { level2: { level3: { value: "p246", count: 246, enabled: true, items: [] }}}}} />
        <HeavyComponent2707 config={{ level1: { level2: { level3: { value: "p246", count: 246, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
