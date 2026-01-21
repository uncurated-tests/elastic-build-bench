// SSG Page 6 - v12
import '@/generated/styles/p6_m0.css';
import SharedComponent42 from '@/generated/components/SharedComponent42';
import SharedComponent43 from '@/generated/components/SharedComponent43';
import SharedComponent44 from '@/generated/components/SharedComponent44';
import SharedComponent45 from '@/generated/components/SharedComponent45';
import SharedComponent46 from '@/generated/components/SharedComponent46';
import HeavyComponent66 from '@/generated/heavy/HeavyComponent66';
import HeavyComponent67 from '@/generated/heavy/HeavyComponent67';

export default function SSGPage6() {
  return (
    <div className="p6-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 6</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent42 id="6-0" value={600} label="S" />
        <SharedComponent43 id="6-1" value={601} label="S" />
        <SharedComponent44 id="6-2" value={602} label="S" />
        <SharedComponent45 id="6-3" value={603} label="S" />
        <SharedComponent46 id="6-4" value={604} label="S" />
        <HeavyComponent66 config={{ level1: { level2: { level3: { value: "p6", count: 6, enabled: true, items: [] }}}}} />
        <HeavyComponent67 config={{ level1: { level2: { level3: { value: "p6", count: 6, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
