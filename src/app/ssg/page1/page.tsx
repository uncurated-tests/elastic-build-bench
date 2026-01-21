// Static SSG Page 1 - v14
import '@/generated/styles/p1_m0.css';
import '@/generated/styles/p1_m1.css';
import '@/generated/styles/p1_m2.css';
import '@/generated/styles/p1_m3.css';
import '@/generated/styles/p1_m4.css';
import '@/generated/styles/p1_m5.css';
import '@/generated/styles/p1_m6.css';
import '@/generated/styles/p1_m7.css';
import '@/generated/styles/p1_m8.css';
import '@/generated/styles/p1_m9.css';
import '@/generated/styles/p1_m10.css';
import '@/generated/styles/p1_m11.css';
import '@/generated/styles/p1_m12.css';
import '@/generated/styles/p1_m13.css';
import SharedComponent7 from '@/generated/components/SharedComponent7';
import SharedComponent8 from '@/generated/components/SharedComponent8';
import SharedComponent9 from '@/generated/components/SharedComponent9';
import SharedComponent10 from '@/generated/components/SharedComponent10';
import SharedComponent11 from '@/generated/components/SharedComponent11';

export default function SSGPage1() {
  return (
    <div className="p1-m0-s0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent7 id="1-0" value={100} label="S" />
        <SharedComponent8 id="1-1" value={101} label="S" />
        <SharedComponent9 id="1-2" value={102} label="S" />
        <SharedComponent10 id="1-3" value={103} label="S" />
        <SharedComponent11 id="1-4" value={104} label="S" />
      </div>
      <div className="mt-4 text-xs text-zinc-500">
        v14: 14 CSS modules
      </div>
    </div>
  );
}
