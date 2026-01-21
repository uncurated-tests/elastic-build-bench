// SSG Page 970 - v12
import '@/generated/styles/p970_m0.css';
import SharedComponent290 from '@/generated/components/SharedComponent290';
import SharedComponent291 from '@/generated/components/SharedComponent291';
import SharedComponent292 from '@/generated/components/SharedComponent292';
import SharedComponent293 from '@/generated/components/SharedComponent293';
import SharedComponent294 from '@/generated/components/SharedComponent294';
import HeavyComponent1295 from '@/generated/heavy/HeavyComponent1295';
import HeavyComponent1296 from '@/generated/heavy/HeavyComponent1296';

export default function SSGPage970() {
  return (
    <div className="p970-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 970</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent290 id="970-0" value={97000} label="S" />
        <SharedComponent291 id="970-1" value={97001} label="S" />
        <SharedComponent292 id="970-2" value={97002} label="S" />
        <SharedComponent293 id="970-3" value={97003} label="S" />
        <SharedComponent294 id="970-4" value={97004} label="S" />
        <HeavyComponent1295 config={{ level1: { level2: { level3: { value: "p970", count: 970, enabled: true, items: [] }}}}} />
        <HeavyComponent1296 config={{ level1: { level2: { level3: { value: "p970", count: 970, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
