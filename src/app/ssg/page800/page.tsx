// Static SSG Page 800 - v14
import '@/generated/styles/p800_m0.css';
import '@/generated/styles/p800_m1.css';
import '@/generated/styles/p800_m2.css';
import '@/generated/styles/p800_m3.css';
import '@/generated/styles/p800_m4.css';
import '@/generated/styles/p800_m5.css';
import '@/generated/styles/p800_m6.css';
import '@/generated/styles/p800_m7.css';
import '@/generated/styles/p800_m8.css';
import '@/generated/styles/p800_m9.css';
import '@/generated/styles/p800_m10.css';
import '@/generated/styles/p800_m11.css';
import '@/generated/styles/p800_m12.css';
import '@/generated/styles/p800_m13.css';
import SharedComponent100 from '@/generated/components/SharedComponent100';
import SharedComponent101 from '@/generated/components/SharedComponent101';
import SharedComponent102 from '@/generated/components/SharedComponent102';
import SharedComponent103 from '@/generated/components/SharedComponent103';
import SharedComponent104 from '@/generated/components/SharedComponent104';

export default function SSGPage800() {
  return (
    <div className="p800-m0-s0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 800</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent100 id="800-0" value={80000} label="S" />
        <SharedComponent101 id="800-1" value={80001} label="S" />
        <SharedComponent102 id="800-2" value={80002} label="S" />
        <SharedComponent103 id="800-3" value={80003} label="S" />
        <SharedComponent104 id="800-4" value={80004} label="S" />
      </div>
      <div className="mt-4 text-xs text-zinc-500">
        v14: 14 CSS modules
      </div>
    </div>
  );
}
