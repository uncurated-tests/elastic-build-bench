// SSG Page 1600 - v12
import '@/generated/styles/p1600_m0.css';
import SharedComponent200 from '@/generated/components/SharedComponent200';
import SharedComponent201 from '@/generated/components/SharedComponent201';
import SharedComponent202 from '@/generated/components/SharedComponent202';
import SharedComponent203 from '@/generated/components/SharedComponent203';
import SharedComponent204 from '@/generated/components/SharedComponent204';
import HeavyComponent8225 from '@/generated/heavy/HeavyComponent8225';
import HeavyComponent8226 from '@/generated/heavy/HeavyComponent8226';

export default function SSGPage1600() {
  return (
    <div className="p1600-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1600</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent200 id="1600-0" value={160000} label="S" />
        <SharedComponent201 id="1600-1" value={160001} label="S" />
        <SharedComponent202 id="1600-2" value={160002} label="S" />
        <SharedComponent203 id="1600-3" value={160003} label="S" />
        <SharedComponent204 id="1600-4" value={160004} label="S" />
        <HeavyComponent8225 config={{ level1: { level2: { level3: { value: "p1600", count: 1600, enabled: true, items: [] }}}}} />
        <HeavyComponent8226 config={{ level1: { level2: { level3: { value: "p1600", count: 1600, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
