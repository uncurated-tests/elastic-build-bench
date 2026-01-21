// Static SSG Page 75 - v14
import '@/generated/styles/p75_m0.css';
import '@/generated/styles/p75_m1.css';
import '@/generated/styles/p75_m2.css';
import '@/generated/styles/p75_m3.css';
import '@/generated/styles/p75_m4.css';
import '@/generated/styles/p75_m5.css';
import '@/generated/styles/p75_m6.css';
import '@/generated/styles/p75_m7.css';
import '@/generated/styles/p75_m8.css';
import '@/generated/styles/p75_m9.css';
import '@/generated/styles/p75_m10.css';
import '@/generated/styles/p75_m11.css';
import '@/generated/styles/p75_m12.css';
import '@/generated/styles/p75_m13.css';
import SharedComponent25 from '@/generated/components/SharedComponent25';
import SharedComponent26 from '@/generated/components/SharedComponent26';
import SharedComponent27 from '@/generated/components/SharedComponent27';
import SharedComponent28 from '@/generated/components/SharedComponent28';
import SharedComponent29 from '@/generated/components/SharedComponent29';

export default function SSGPage75() {
  return (
    <div className="p75-m0-s0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 75</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent25 id="75-0" value={7500} label="S" />
        <SharedComponent26 id="75-1" value={7501} label="S" />
        <SharedComponent27 id="75-2" value={7502} label="S" />
        <SharedComponent28 id="75-3" value={7503} label="S" />
        <SharedComponent29 id="75-4" value={7504} label="S" />
      </div>
      <div className="mt-4 text-xs text-zinc-500">
        v14: 14 CSS modules
      </div>
    </div>
  );
}
