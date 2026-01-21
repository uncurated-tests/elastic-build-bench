// SSG Page 373 - v12
import '@/generated/styles/p373_m0.css';
import SharedComponent111 from '@/generated/components/SharedComponent111';
import SharedComponent112 from '@/generated/components/SharedComponent112';
import SharedComponent113 from '@/generated/components/SharedComponent113';
import SharedComponent114 from '@/generated/components/SharedComponent114';
import SharedComponent115 from '@/generated/components/SharedComponent115';
import HeavyComponent4103 from '@/generated/heavy/HeavyComponent4103';
import HeavyComponent4104 from '@/generated/heavy/HeavyComponent4104';

export default function SSGPage373() {
  return (
    <div className="p373-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 373</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent111 id="373-0" value={37300} label="S" />
        <SharedComponent112 id="373-1" value={37301} label="S" />
        <SharedComponent113 id="373-2" value={37302} label="S" />
        <SharedComponent114 id="373-3" value={37303} label="S" />
        <SharedComponent115 id="373-4" value={37304} label="S" />
        <HeavyComponent4103 config={{ level1: { level2: { level3: { value: "p373", count: 373, enabled: true, items: [] }}}}} />
        <HeavyComponent4104 config={{ level1: { level2: { level3: { value: "p373", count: 373, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
