// SSG Page 4 - v12
import '@/generated/styles/p4_m0.css';
import '@/generated/styles/p4_m1.css';
import '@/generated/styles/p4_m2.css';
import '@/generated/styles/p4_m3.css';
import '@/generated/styles/p4_m4.css';
import '@/generated/styles/p4_m5.css';
import '@/generated/styles/p4_m6.css';
import '@/generated/styles/p4_m7.css';
import '@/generated/styles/p4_m8.css';
import '@/generated/styles/p4_m9.css';
import '@/generated/styles/p4_m10.css';
import SharedComponent28 from '@/generated/components/SharedComponent28';
import SharedComponent29 from '@/generated/components/SharedComponent29';
import SharedComponent30 from '@/generated/components/SharedComponent30';
import SharedComponent31 from '@/generated/components/SharedComponent31';
import SharedComponent32 from '@/generated/components/SharedComponent32';
import HeavyComponent44 from '@/generated/heavy/HeavyComponent44';
import HeavyComponent45 from '@/generated/heavy/HeavyComponent45';

export default function SSGPage4() {
  return (
    <div className="p4-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 4</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent28 id="4-0" value={400} label="S" />
        <SharedComponent29 id="4-1" value={401} label="S" />
        <SharedComponent30 id="4-2" value={402} label="S" />
        <SharedComponent31 id="4-3" value={403} label="S" />
        <SharedComponent32 id="4-4" value={404} label="S" />
        <HeavyComponent44 config={{ level1: { level2: { level3: { value: "p4", count: 4, enabled: true, items: [] }}}}} />
        <HeavyComponent45 config={{ level1: { level2: { level3: { value: "p4", count: 4, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
