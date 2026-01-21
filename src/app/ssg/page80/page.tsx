// Static SSG Page 80 - v14
import '@/generated/styles/p80_m0.css';
import '@/generated/styles/p80_m1.css';
import '@/generated/styles/p80_m2.css';
import '@/generated/styles/p80_m3.css';
import '@/generated/styles/p80_m4.css';
import '@/generated/styles/p80_m5.css';
import '@/generated/styles/p80_m6.css';
import '@/generated/styles/p80_m7.css';
import '@/generated/styles/p80_m8.css';
import '@/generated/styles/p80_m9.css';
import '@/generated/styles/p80_m10.css';
import '@/generated/styles/p80_m11.css';
import '@/generated/styles/p80_m12.css';
import '@/generated/styles/p80_m13.css';
import SharedComponent60 from '@/generated/components/SharedComponent60';
import SharedComponent61 from '@/generated/components/SharedComponent61';
import SharedComponent62 from '@/generated/components/SharedComponent62';
import SharedComponent63 from '@/generated/components/SharedComponent63';
import SharedComponent64 from '@/generated/components/SharedComponent64';

export default function SSGPage80() {
  return (
    <div className="p80-m0-s0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 80</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent60 id="80-0" value={8000} label="S" />
        <SharedComponent61 id="80-1" value={8001} label="S" />
        <SharedComponent62 id="80-2" value={8002} label="S" />
        <SharedComponent63 id="80-3" value={8003} label="S" />
        <SharedComponent64 id="80-4" value={8004} label="S" />
      </div>
      <div className="mt-4 text-xs text-zinc-500">
        v14: 14 CSS modules
      </div>
    </div>
  );
}
