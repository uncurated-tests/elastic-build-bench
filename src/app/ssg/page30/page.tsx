// Static SSG Page 30 - v14
import '@/generated/styles/p30_m0.css';
import '@/generated/styles/p30_m1.css';
import '@/generated/styles/p30_m2.css';
import '@/generated/styles/p30_m3.css';
import '@/generated/styles/p30_m4.css';
import '@/generated/styles/p30_m5.css';
import '@/generated/styles/p30_m6.css';
import '@/generated/styles/p30_m7.css';
import '@/generated/styles/p30_m8.css';
import '@/generated/styles/p30_m9.css';
import '@/generated/styles/p30_m10.css';
import '@/generated/styles/p30_m11.css';
import '@/generated/styles/p30_m12.css';
import '@/generated/styles/p30_m13.css';
import SharedComponent210 from '@/generated/components/SharedComponent210';
import SharedComponent211 from '@/generated/components/SharedComponent211';
import SharedComponent212 from '@/generated/components/SharedComponent212';
import SharedComponent213 from '@/generated/components/SharedComponent213';
import SharedComponent214 from '@/generated/components/SharedComponent214';

export default function SSGPage30() {
  return (
    <div className="p30-m0-s0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 30</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent210 id="30-0" value={3000} label="S" />
        <SharedComponent211 id="30-1" value={3001} label="S" />
        <SharedComponent212 id="30-2" value={3002} label="S" />
        <SharedComponent213 id="30-3" value={3003} label="S" />
        <SharedComponent214 id="30-4" value={3004} label="S" />
      </div>
      <div className="mt-4 text-xs text-zinc-500">
        v14: 14 CSS modules
      </div>
    </div>
  );
}
