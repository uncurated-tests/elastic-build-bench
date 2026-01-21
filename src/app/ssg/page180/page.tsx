// SSG Page 180 - v12
import '@/generated/styles/p180_m0.css';
import SharedComponent260 from '@/generated/components/SharedComponent260';
import SharedComponent261 from '@/generated/components/SharedComponent261';
import SharedComponent262 from '@/generated/components/SharedComponent262';
import SharedComponent263 from '@/generated/components/SharedComponent263';
import SharedComponent264 from '@/generated/components/SharedComponent264';
import HeavyComponent1980 from '@/generated/heavy/HeavyComponent1980';
import HeavyComponent1981 from '@/generated/heavy/HeavyComponent1981';

export default function SSGPage180() {
  return (
    <div className="p180-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 180</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent260 id="180-0" value={18000} label="S" />
        <SharedComponent261 id="180-1" value={18001} label="S" />
        <SharedComponent262 id="180-2" value={18002} label="S" />
        <SharedComponent263 id="180-3" value={18003} label="S" />
        <SharedComponent264 id="180-4" value={18004} label="S" />
        <HeavyComponent1980 config={{ level1: { level2: { level3: { value: "p180", count: 180, enabled: true, items: [] }}}}} />
        <HeavyComponent1981 config={{ level1: { level2: { level3: { value: "p180", count: 180, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
