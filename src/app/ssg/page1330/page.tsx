// SSG Page 1330 - v12
import '@/generated/styles/p1330_m0.css';
import SharedComponent310 from '@/generated/components/SharedComponent310';
import SharedComponent311 from '@/generated/components/SharedComponent311';
import SharedComponent312 from '@/generated/components/SharedComponent312';
import SharedComponent313 from '@/generated/components/SharedComponent313';
import SharedComponent314 from '@/generated/components/SharedComponent314';
import HeavyComponent5255 from '@/generated/heavy/HeavyComponent5255';
import HeavyComponent5256 from '@/generated/heavy/HeavyComponent5256';

export default function SSGPage1330() {
  return (
    <div className="p1330-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1330</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent310 id="1330-0" value={133000} label="S" />
        <SharedComponent311 id="1330-1" value={133001} label="S" />
        <SharedComponent312 id="1330-2" value={133002} label="S" />
        <SharedComponent313 id="1330-3" value={133003} label="S" />
        <SharedComponent314 id="1330-4" value={133004} label="S" />
        <HeavyComponent5255 config={{ level1: { level2: { level3: { value: "p1330", count: 1330, enabled: true, items: [] }}}}} />
        <HeavyComponent5256 config={{ level1: { level2: { level3: { value: "p1330", count: 1330, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
