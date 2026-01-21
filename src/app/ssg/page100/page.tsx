// SSG Page 100 - v12
import '@/generated/styles/p100_m0.css';
import SharedComponent200 from '@/generated/components/SharedComponent200';
import SharedComponent201 from '@/generated/components/SharedComponent201';
import SharedComponent202 from '@/generated/components/SharedComponent202';
import SharedComponent203 from '@/generated/components/SharedComponent203';
import SharedComponent204 from '@/generated/components/SharedComponent204';
import HeavyComponent1100 from '@/generated/heavy/HeavyComponent1100';
import HeavyComponent1101 from '@/generated/heavy/HeavyComponent1101';

export default function SSGPage100() {
  return (
    <div className="p100-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 100</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent200 id="100-0" value={10000} label="S" />
        <SharedComponent201 id="100-1" value={10001} label="S" />
        <SharedComponent202 id="100-2" value={10002} label="S" />
        <SharedComponent203 id="100-3" value={10003} label="S" />
        <SharedComponent204 id="100-4" value={10004} label="S" />
        <HeavyComponent1100 config={{ level1: { level2: { level3: { value: "p100", count: 100, enabled: true, items: [] }}}}} />
        <HeavyComponent1101 config={{ level1: { level2: { level3: { value: "p100", count: 100, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
