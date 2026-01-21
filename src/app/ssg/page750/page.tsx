// Static SSG Page 750 - v14
import '@/generated/styles/p750_m0.css';
import '@/generated/styles/p750_m1.css';
import '@/generated/styles/p750_m2.css';
import '@/generated/styles/p750_m3.css';
import '@/generated/styles/p750_m4.css';
import '@/generated/styles/p750_m5.css';
import '@/generated/styles/p750_m6.css';
import '@/generated/styles/p750_m7.css';
import '@/generated/styles/p750_m8.css';
import '@/generated/styles/p750_m9.css';
import '@/generated/styles/p750_m10.css';
import '@/generated/styles/p750_m11.css';
import '@/generated/styles/p750_m12.css';
import '@/generated/styles/p750_m13.css';
import SharedComponent250 from '@/generated/components/SharedComponent250';
import SharedComponent251 from '@/generated/components/SharedComponent251';
import SharedComponent252 from '@/generated/components/SharedComponent252';
import SharedComponent253 from '@/generated/components/SharedComponent253';
import SharedComponent254 from '@/generated/components/SharedComponent254';

export default function SSGPage750() {
  return (
    <div className="p750-m0-s0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 750</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent250 id="750-0" value={75000} label="S" />
        <SharedComponent251 id="750-1" value={75001} label="S" />
        <SharedComponent252 id="750-2" value={75002} label="S" />
        <SharedComponent253 id="750-3" value={75003} label="S" />
        <SharedComponent254 id="750-4" value={75004} label="S" />
      </div>
      <div className="mt-4 text-xs text-zinc-500">
        v14: 14 CSS modules
      </div>
    </div>
  );
}
