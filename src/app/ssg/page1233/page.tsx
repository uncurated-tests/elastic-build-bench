// SSG Page 1233 - v12
import '@/generated/styles/p1233_m0.css';
import SharedComponent131 from '@/generated/components/SharedComponent131';
import SharedComponent132 from '@/generated/components/SharedComponent132';
import SharedComponent133 from '@/generated/components/SharedComponent133';
import SharedComponent134 from '@/generated/components/SharedComponent134';
import SharedComponent135 from '@/generated/components/SharedComponent135';
import HeavyComponent4188 from '@/generated/heavy/HeavyComponent4188';
import HeavyComponent4189 from '@/generated/heavy/HeavyComponent4189';

export default function SSGPage1233() {
  return (
    <div className="p1233-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1233</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent131 id="1233-0" value={123300} label="S" />
        <SharedComponent132 id="1233-1" value={123301} label="S" />
        <SharedComponent133 id="1233-2" value={123302} label="S" />
        <SharedComponent134 id="1233-3" value={123303} label="S" />
        <SharedComponent135 id="1233-4" value={123304} label="S" />
        <HeavyComponent4188 config={{ level1: { level2: { level3: { value: "p1233", count: 1233, enabled: true, items: [] }}}}} />
        <HeavyComponent4189 config={{ level1: { level2: { level3: { value: "p1233", count: 1233, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
