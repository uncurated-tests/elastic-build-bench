// SSG Page 96 - v12
import '@/generated/styles/p96_m0.css';
import SharedComponent172 from '@/generated/components/SharedComponent172';
import SharedComponent173 from '@/generated/components/SharedComponent173';
import SharedComponent174 from '@/generated/components/SharedComponent174';
import SharedComponent175 from '@/generated/components/SharedComponent175';
import SharedComponent176 from '@/generated/components/SharedComponent176';
import HeavyComponent1056 from '@/generated/heavy/HeavyComponent1056';
import HeavyComponent1057 from '@/generated/heavy/HeavyComponent1057';

export default function SSGPage96() {
  return (
    <div className="p96-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 96</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent172 id="96-0" value={9600} label="S" />
        <SharedComponent173 id="96-1" value={9601} label="S" />
        <SharedComponent174 id="96-2" value={9602} label="S" />
        <SharedComponent175 id="96-3" value={9603} label="S" />
        <SharedComponent176 id="96-4" value={9604} label="S" />
        <HeavyComponent1056 config={{ level1: { level2: { level3: { value: "p96", count: 96, enabled: true, items: [] }}}}} />
        <HeavyComponent1057 config={{ level1: { level2: { level3: { value: "p96", count: 96, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
