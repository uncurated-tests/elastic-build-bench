// Static SSG Page 100 - v14
import '@/generated/styles/p100_m0.css';
import '@/generated/styles/p100_m1.css';
import '@/generated/styles/p100_m2.css';
import '@/generated/styles/p100_m3.css';
import '@/generated/styles/p100_m4.css';
import '@/generated/styles/p100_m5.css';
import '@/generated/styles/p100_m6.css';
import '@/generated/styles/p100_m7.css';
import '@/generated/styles/p100_m8.css';
import '@/generated/styles/p100_m9.css';
import '@/generated/styles/p100_m10.css';
import '@/generated/styles/p100_m11.css';
import '@/generated/styles/p100_m12.css';
import '@/generated/styles/p100_m13.css';
import SharedComponent200 from '@/generated/components/SharedComponent200';
import SharedComponent201 from '@/generated/components/SharedComponent201';
import SharedComponent202 from '@/generated/components/SharedComponent202';
import SharedComponent203 from '@/generated/components/SharedComponent203';
import SharedComponent204 from '@/generated/components/SharedComponent204';

export default function SSGPage100() {
  return (
    <div className="p100-m0-s0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 100</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent200 id="100-0" value={10000} label="S" />
        <SharedComponent201 id="100-1" value={10001} label="S" />
        <SharedComponent202 id="100-2" value={10002} label="S" />
        <SharedComponent203 id="100-3" value={10003} label="S" />
        <SharedComponent204 id="100-4" value={10004} label="S" />
      </div>
      <div className="mt-4 text-xs text-zinc-500">
        v14: 14 CSS modules
      </div>
    </div>
  );
}
