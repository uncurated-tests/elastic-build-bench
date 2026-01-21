// Static SSG Page 250 - v14
import '@/generated/styles/p250_m0.css';
import '@/generated/styles/p250_m1.css';
import '@/generated/styles/p250_m2.css';
import '@/generated/styles/p250_m3.css';
import '@/generated/styles/p250_m4.css';
import '@/generated/styles/p250_m5.css';
import '@/generated/styles/p250_m6.css';
import '@/generated/styles/p250_m7.css';
import '@/generated/styles/p250_m8.css';
import '@/generated/styles/p250_m9.css';
import '@/generated/styles/p250_m10.css';
import '@/generated/styles/p250_m11.css';
import '@/generated/styles/p250_m12.css';
import '@/generated/styles/p250_m13.css';
import SharedComponent250 from '@/generated/components/SharedComponent250';
import SharedComponent251 from '@/generated/components/SharedComponent251';
import SharedComponent252 from '@/generated/components/SharedComponent252';
import SharedComponent253 from '@/generated/components/SharedComponent253';
import SharedComponent254 from '@/generated/components/SharedComponent254';

export default function SSGPage250() {
  return (
    <div className="p250-m0-s0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 250</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent250 id="250-0" value={25000} label="S" />
        <SharedComponent251 id="250-1" value={25001} label="S" />
        <SharedComponent252 id="250-2" value={25002} label="S" />
        <SharedComponent253 id="250-3" value={25003} label="S" />
        <SharedComponent254 id="250-4" value={25004} label="S" />
      </div>
      <div className="mt-4 text-xs text-zinc-500">
        v14: 14 CSS modules
      </div>
    </div>
  );
}
