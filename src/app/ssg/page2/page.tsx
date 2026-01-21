// Static SSG Page 2 - v14
import '@/generated/styles/p2_m0.css';
import '@/generated/styles/p2_m1.css';
import '@/generated/styles/p2_m2.css';
import '@/generated/styles/p2_m3.css';
import '@/generated/styles/p2_m4.css';
import '@/generated/styles/p2_m5.css';
import '@/generated/styles/p2_m6.css';
import '@/generated/styles/p2_m7.css';
import '@/generated/styles/p2_m8.css';
import '@/generated/styles/p2_m9.css';
import '@/generated/styles/p2_m10.css';
import '@/generated/styles/p2_m11.css';
import '@/generated/styles/p2_m12.css';
import '@/generated/styles/p2_m13.css';
import SharedComponent14 from '@/generated/components/SharedComponent14';
import SharedComponent15 from '@/generated/components/SharedComponent15';
import SharedComponent16 from '@/generated/components/SharedComponent16';
import SharedComponent17 from '@/generated/components/SharedComponent17';
import SharedComponent18 from '@/generated/components/SharedComponent18';

export default function SSGPage2() {
  return (
    <div className="p2-m0-s0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 2</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent14 id="2-0" value={200} label="S" />
        <SharedComponent15 id="2-1" value={201} label="S" />
        <SharedComponent16 id="2-2" value={202} label="S" />
        <SharedComponent17 id="2-3" value={203} label="S" />
        <SharedComponent18 id="2-4" value={204} label="S" />
      </div>
      <div className="mt-4 text-xs text-zinc-500">
        v14: 14 CSS modules
      </div>
    </div>
  );
}
