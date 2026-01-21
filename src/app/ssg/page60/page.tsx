// Static SSG Page 60 - v14
import '@/generated/styles/p60_m0.css';
import '@/generated/styles/p60_m1.css';
import '@/generated/styles/p60_m2.css';
import '@/generated/styles/p60_m3.css';
import '@/generated/styles/p60_m4.css';
import '@/generated/styles/p60_m5.css';
import '@/generated/styles/p60_m6.css';
import '@/generated/styles/p60_m7.css';
import '@/generated/styles/p60_m8.css';
import '@/generated/styles/p60_m9.css';
import '@/generated/styles/p60_m10.css';
import '@/generated/styles/p60_m11.css';
import '@/generated/styles/p60_m12.css';
import '@/generated/styles/p60_m13.css';
import SharedComponent420 from '@/generated/components/SharedComponent420';
import SharedComponent421 from '@/generated/components/SharedComponent421';
import SharedComponent422 from '@/generated/components/SharedComponent422';
import SharedComponent423 from '@/generated/components/SharedComponent423';
import SharedComponent424 from '@/generated/components/SharedComponent424';

export default function SSGPage60() {
  return (
    <div className="p60-m0-s0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 60</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent420 id="60-0" value={6000} label="S" />
        <SharedComponent421 id="60-1" value={6001} label="S" />
        <SharedComponent422 id="60-2" value={6002} label="S" />
        <SharedComponent423 id="60-3" value={6003} label="S" />
        <SharedComponent424 id="60-4" value={6004} label="S" />
      </div>
      <div className="mt-4 text-xs text-zinc-500">
        v14: 14 CSS modules
      </div>
    </div>
  );
}
