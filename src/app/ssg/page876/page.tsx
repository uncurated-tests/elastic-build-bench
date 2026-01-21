// SSG Page 876 - v12
import '@/generated/styles/p876_m0.css';
import SharedComponent132 from '@/generated/components/SharedComponent132';
import SharedComponent133 from '@/generated/components/SharedComponent133';
import SharedComponent134 from '@/generated/components/SharedComponent134';
import SharedComponent135 from '@/generated/components/SharedComponent135';
import SharedComponent136 from '@/generated/components/SharedComponent136';
import HeavyComponent261 from '@/generated/heavy/HeavyComponent261';
import HeavyComponent262 from '@/generated/heavy/HeavyComponent262';

export default function SSGPage876() {
  return (
    <div className="p876-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 876</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent132 id="876-0" value={87600} label="S" />
        <SharedComponent133 id="876-1" value={87601} label="S" />
        <SharedComponent134 id="876-2" value={87602} label="S" />
        <SharedComponent135 id="876-3" value={87603} label="S" />
        <SharedComponent136 id="876-4" value={87604} label="S" />
        <HeavyComponent261 config={{ level1: { level2: { level3: { value: "p876", count: 876, enabled: true, items: [] }}}}} />
        <HeavyComponent262 config={{ level1: { level2: { level3: { value: "p876", count: 876, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
