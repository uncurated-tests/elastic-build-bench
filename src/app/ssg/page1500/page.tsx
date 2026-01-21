// Static SSG Page 1500 - v14
import '@/generated/styles/p1500_m0.css';
import '@/generated/styles/p1500_m1.css';
import '@/generated/styles/p1500_m2.css';
import '@/generated/styles/p1500_m3.css';
import '@/generated/styles/p1500_m4.css';
import '@/generated/styles/p1500_m5.css';
import '@/generated/styles/p1500_m6.css';
import '@/generated/styles/p1500_m7.css';
import '@/generated/styles/p1500_m8.css';
import '@/generated/styles/p1500_m9.css';
import '@/generated/styles/p1500_m10.css';
import '@/generated/styles/p1500_m11.css';
import '@/generated/styles/p1500_m12.css';
import '@/generated/styles/p1500_m13.css';
import SharedComponent0 from '@/generated/components/SharedComponent0';
import SharedComponent1 from '@/generated/components/SharedComponent1';
import SharedComponent2 from '@/generated/components/SharedComponent2';
import SharedComponent3 from '@/generated/components/SharedComponent3';
import SharedComponent4 from '@/generated/components/SharedComponent4';

export default function SSGPage1500() {
  return (
    <div className="p1500-m0-s0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1500</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent0 id="1500-0" value={150000} label="S" />
        <SharedComponent1 id="1500-1" value={150001} label="S" />
        <SharedComponent2 id="1500-2" value={150002} label="S" />
        <SharedComponent3 id="1500-3" value={150003} label="S" />
        <SharedComponent4 id="1500-4" value={150004} label="S" />
      </div>
      <div className="mt-4 text-xs text-zinc-500">
        v14: 14 CSS modules
      </div>
    </div>
  );
}
