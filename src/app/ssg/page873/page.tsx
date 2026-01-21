// SSG Page 873 - v12
import '@/generated/styles/p873_m0.css';
import SharedComponent111 from '@/generated/components/SharedComponent111';
import SharedComponent112 from '@/generated/components/SharedComponent112';
import SharedComponent113 from '@/generated/components/SharedComponent113';
import SharedComponent114 from '@/generated/components/SharedComponent114';
import SharedComponent115 from '@/generated/components/SharedComponent115';
import HeavyComponent228 from '@/generated/heavy/HeavyComponent228';
import HeavyComponent229 from '@/generated/heavy/HeavyComponent229';

export default function SSGPage873() {
  return (
    <div className="p873-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 873</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent111 id="873-0" value={87300} label="S" />
        <SharedComponent112 id="873-1" value={87301} label="S" />
        <SharedComponent113 id="873-2" value={87302} label="S" />
        <SharedComponent114 id="873-3" value={87303} label="S" />
        <SharedComponent115 id="873-4" value={87304} label="S" />
        <HeavyComponent228 config={{ level1: { level2: { level3: { value: "p873", count: 873, enabled: true, items: [] }}}}} />
        <HeavyComponent229 config={{ level1: { level2: { level3: { value: "p873", count: 873, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
