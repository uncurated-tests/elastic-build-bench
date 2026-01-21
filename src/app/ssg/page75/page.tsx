// SSG Page 75 - v12
import '@/generated/styles/p75_m0.css';
import SharedComponent25 from '@/generated/components/SharedComponent25';
import SharedComponent26 from '@/generated/components/SharedComponent26';
import SharedComponent27 from '@/generated/components/SharedComponent27';
import SharedComponent28 from '@/generated/components/SharedComponent28';
import SharedComponent29 from '@/generated/components/SharedComponent29';
import HeavyComponent825 from '@/generated/heavy/HeavyComponent825';
import HeavyComponent826 from '@/generated/heavy/HeavyComponent826';

export default function SSGPage75() {
  return (
    <div className="p75-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 75</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent25 id="75-0" value={7500} label="S" />
        <SharedComponent26 id="75-1" value={7501} label="S" />
        <SharedComponent27 id="75-2" value={7502} label="S" />
        <SharedComponent28 id="75-3" value={7503} label="S" />
        <SharedComponent29 id="75-4" value={7504} label="S" />
        <HeavyComponent825 config={{ level1: { level2: { level3: { value: "p75", count: 75, enabled: true, items: [] }}}}} />
        <HeavyComponent826 config={{ level1: { level2: { level3: { value: "p75", count: 75, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
