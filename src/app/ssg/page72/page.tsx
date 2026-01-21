// Static SSG Page 72 - v14
import '@/generated/styles/p72_m0.css';
import '@/generated/styles/p72_m1.css';
import '@/generated/styles/p72_m2.css';
import '@/generated/styles/p72_m3.css';
import '@/generated/styles/p72_m4.css';
import '@/generated/styles/p72_m5.css';
import '@/generated/styles/p72_m6.css';
import '@/generated/styles/p72_m7.css';
import '@/generated/styles/p72_m8.css';
import '@/generated/styles/p72_m9.css';
import '@/generated/styles/p72_m10.css';
import '@/generated/styles/p72_m11.css';
import '@/generated/styles/p72_m12.css';
import '@/generated/styles/p72_m13.css';
import SharedComponent4 from '@/generated/components/SharedComponent4';
import SharedComponent5 from '@/generated/components/SharedComponent5';
import SharedComponent6 from '@/generated/components/SharedComponent6';
import SharedComponent7 from '@/generated/components/SharedComponent7';
import SharedComponent8 from '@/generated/components/SharedComponent8';

export default function SSGPage72() {
  return (
    <div className="p72-m0-s0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 72</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent4 id="72-0" value={7200} label="S" />
        <SharedComponent5 id="72-1" value={7201} label="S" />
        <SharedComponent6 id="72-2" value={7202} label="S" />
        <SharedComponent7 id="72-3" value={7203} label="S" />
        <SharedComponent8 id="72-4" value={7204} label="S" />
      </div>
      <div className="mt-4 text-xs text-zinc-500">
        v14: 14 CSS modules
      </div>
    </div>
  );
}
