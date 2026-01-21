// SSG Page 883 - v12
import '@/generated/styles/p883_m0.css';
import SharedComponent181 from '@/generated/components/SharedComponent181';
import SharedComponent182 from '@/generated/components/SharedComponent182';
import SharedComponent183 from '@/generated/components/SharedComponent183';
import SharedComponent184 from '@/generated/components/SharedComponent184';
import SharedComponent185 from '@/generated/components/SharedComponent185';
import HeavyComponent338 from '@/generated/heavy/HeavyComponent338';
import HeavyComponent339 from '@/generated/heavy/HeavyComponent339';

export default function SSGPage883() {
  return (
    <div className="p883-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 883</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent181 id="883-0" value={88300} label="S" />
        <SharedComponent182 id="883-1" value={88301} label="S" />
        <SharedComponent183 id="883-2" value={88302} label="S" />
        <SharedComponent184 id="883-3" value={88303} label="S" />
        <SharedComponent185 id="883-4" value={88304} label="S" />
        <HeavyComponent338 config={{ level1: { level2: { level3: { value: "p883", count: 883, enabled: true, items: [] }}}}} />
        <HeavyComponent339 config={{ level1: { level2: { level3: { value: "p883", count: 883, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
