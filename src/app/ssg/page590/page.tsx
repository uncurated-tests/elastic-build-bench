// SSG Page 590 - v12
import '@/generated/styles/p590_m0.css';
import SharedComponent130 from '@/generated/components/SharedComponent130';
import SharedComponent131 from '@/generated/components/SharedComponent131';
import SharedComponent132 from '@/generated/components/SharedComponent132';
import SharedComponent133 from '@/generated/components/SharedComponent133';
import SharedComponent134 from '@/generated/components/SharedComponent134';
import HeavyComponent6490 from '@/generated/heavy/HeavyComponent6490';
import HeavyComponent6491 from '@/generated/heavy/HeavyComponent6491';

export default function SSGPage590() {
  return (
    <div className="p590-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 590</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent130 id="590-0" value={59000} label="S" />
        <SharedComponent131 id="590-1" value={59001} label="S" />
        <SharedComponent132 id="590-2" value={59002} label="S" />
        <SharedComponent133 id="590-3" value={59003} label="S" />
        <SharedComponent134 id="590-4" value={59004} label="S" />
        <HeavyComponent6490 config={{ level1: { level2: { level3: { value: "p590", count: 590, enabled: true, items: [] }}}}} />
        <HeavyComponent6491 config={{ level1: { level2: { level3: { value: "p590", count: 590, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
