// SSG Page 1700 - v12
import '@/generated/styles/p1700_m0.css';
import SharedComponent400 from '@/generated/components/SharedComponent400';
import SharedComponent401 from '@/generated/components/SharedComponent401';
import SharedComponent402 from '@/generated/components/SharedComponent402';
import SharedComponent403 from '@/generated/components/SharedComponent403';
import SharedComponent404 from '@/generated/components/SharedComponent404';
import HeavyComponent9325 from '@/generated/heavy/HeavyComponent9325';
import HeavyComponent9326 from '@/generated/heavy/HeavyComponent9326';

export default function SSGPage1700() {
  return (
    <div className="p1700-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1700</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent400 id="1700-0" value={170000} label="S" />
        <SharedComponent401 id="1700-1" value={170001} label="S" />
        <SharedComponent402 id="1700-2" value={170002} label="S" />
        <SharedComponent403 id="1700-3" value={170003} label="S" />
        <SharedComponent404 id="1700-4" value={170004} label="S" />
        <HeavyComponent9325 config={{ level1: { level2: { level3: { value: "p1700", count: 1700, enabled: true, items: [] }}}}} />
        <HeavyComponent9326 config={{ level1: { level2: { level3: { value: "p1700", count: 1700, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
