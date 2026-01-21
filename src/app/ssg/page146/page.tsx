// SSG Page 146 - v12
import '@/generated/styles/p146_m0.css';
import SharedComponent22 from '@/generated/components/SharedComponent22';
import SharedComponent23 from '@/generated/components/SharedComponent23';
import SharedComponent24 from '@/generated/components/SharedComponent24';
import SharedComponent25 from '@/generated/components/SharedComponent25';
import SharedComponent26 from '@/generated/components/SharedComponent26';
import HeavyComponent1606 from '@/generated/heavy/HeavyComponent1606';
import HeavyComponent1607 from '@/generated/heavy/HeavyComponent1607';

export default function SSGPage146() {
  return (
    <div className="p146-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 146</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent22 id="146-0" value={14600} label="S" />
        <SharedComponent23 id="146-1" value={14601} label="S" />
        <SharedComponent24 id="146-2" value={14602} label="S" />
        <SharedComponent25 id="146-3" value={14603} label="S" />
        <SharedComponent26 id="146-4" value={14604} label="S" />
        <HeavyComponent1606 config={{ level1: { level2: { level3: { value: "p146", count: 146, enabled: true, items: [] }}}}} />
        <HeavyComponent1607 config={{ level1: { level2: { level3: { value: "p146", count: 146, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
