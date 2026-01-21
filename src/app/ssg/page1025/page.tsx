// SSG Page 1025 - v12
import '@/generated/styles/p1025_m0.css';
import SharedComponent175 from '@/generated/components/SharedComponent175';
import SharedComponent176 from '@/generated/components/SharedComponent176';
import SharedComponent177 from '@/generated/components/SharedComponent177';
import SharedComponent178 from '@/generated/components/SharedComponent178';
import SharedComponent179 from '@/generated/components/SharedComponent179';
import HeavyComponent1900 from '@/generated/heavy/HeavyComponent1900';
import HeavyComponent1901 from '@/generated/heavy/HeavyComponent1901';

export default function SSGPage1025() {
  return (
    <div className="p1025-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1025</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent175 id="1025-0" value={102500} label="S" />
        <SharedComponent176 id="1025-1" value={102501} label="S" />
        <SharedComponent177 id="1025-2" value={102502} label="S" />
        <SharedComponent178 id="1025-3" value={102503} label="S" />
        <SharedComponent179 id="1025-4" value={102504} label="S" />
        <HeavyComponent1900 config={{ level1: { level2: { level3: { value: "p1025", count: 1025, enabled: true, items: [] }}}}} />
        <HeavyComponent1901 config={{ level1: { level2: { level3: { value: "p1025", count: 1025, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
