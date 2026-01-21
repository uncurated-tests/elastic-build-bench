// SSG Page 174 - v12
import '@/generated/styles/p174_m0.css';
import SharedComponent218 from '@/generated/components/SharedComponent218';
import SharedComponent219 from '@/generated/components/SharedComponent219';
import SharedComponent220 from '@/generated/components/SharedComponent220';
import SharedComponent221 from '@/generated/components/SharedComponent221';
import SharedComponent222 from '@/generated/components/SharedComponent222';
import HeavyComponent1914 from '@/generated/heavy/HeavyComponent1914';
import HeavyComponent1915 from '@/generated/heavy/HeavyComponent1915';

export default function SSGPage174() {
  return (
    <div className="p174-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 174</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent218 id="174-0" value={17400} label="S" />
        <SharedComponent219 id="174-1" value={17401} label="S" />
        <SharedComponent220 id="174-2" value={17402} label="S" />
        <SharedComponent221 id="174-3" value={17403} label="S" />
        <SharedComponent222 id="174-4" value={17404} label="S" />
        <HeavyComponent1914 config={{ level1: { level2: { level3: { value: "p174", count: 174, enabled: true, items: [] }}}}} />
        <HeavyComponent1915 config={{ level1: { level2: { level3: { value: "p174", count: 174, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
