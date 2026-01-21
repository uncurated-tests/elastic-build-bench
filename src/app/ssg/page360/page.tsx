// SSG Page 360 - v12
import '@/generated/styles/p360_m0.css';
import SharedComponent20 from '@/generated/components/SharedComponent20';
import SharedComponent21 from '@/generated/components/SharedComponent21';
import SharedComponent22 from '@/generated/components/SharedComponent22';
import SharedComponent23 from '@/generated/components/SharedComponent23';
import SharedComponent24 from '@/generated/components/SharedComponent24';
import HeavyComponent3960 from '@/generated/heavy/HeavyComponent3960';
import HeavyComponent3961 from '@/generated/heavy/HeavyComponent3961';

export default function SSGPage360() {
  return (
    <div className="p360-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 360</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent20 id="360-0" value={36000} label="S" />
        <SharedComponent21 id="360-1" value={36001} label="S" />
        <SharedComponent22 id="360-2" value={36002} label="S" />
        <SharedComponent23 id="360-3" value={36003} label="S" />
        <SharedComponent24 id="360-4" value={36004} label="S" />
        <HeavyComponent3960 config={{ level1: { level2: { level3: { value: "p360", count: 360, enabled: true, items: [] }}}}} />
        <HeavyComponent3961 config={{ level1: { level2: { level3: { value: "p360", count: 360, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
