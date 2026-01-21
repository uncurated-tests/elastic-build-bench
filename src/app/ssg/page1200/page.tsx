// Static SSG Page 1200 - v14
import '@/generated/styles/p1200_m0.css';
import '@/generated/styles/p1200_m1.css';
import '@/generated/styles/p1200_m2.css';
import '@/generated/styles/p1200_m3.css';
import '@/generated/styles/p1200_m4.css';
import '@/generated/styles/p1200_m5.css';
import '@/generated/styles/p1200_m6.css';
import '@/generated/styles/p1200_m7.css';
import '@/generated/styles/p1200_m8.css';
import '@/generated/styles/p1200_m9.css';
import '@/generated/styles/p1200_m10.css';
import '@/generated/styles/p1200_m11.css';
import '@/generated/styles/p1200_m12.css';
import '@/generated/styles/p1200_m13.css';
import SharedComponent400 from '@/generated/components/SharedComponent400';
import SharedComponent401 from '@/generated/components/SharedComponent401';
import SharedComponent402 from '@/generated/components/SharedComponent402';
import SharedComponent403 from '@/generated/components/SharedComponent403';
import SharedComponent404 from '@/generated/components/SharedComponent404';

export default function SSGPage1200() {
  return (
    <div className="p1200-m0-s0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1200</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent400 id="1200-0" value={120000} label="S" />
        <SharedComponent401 id="1200-1" value={120001} label="S" />
        <SharedComponent402 id="1200-2" value={120002} label="S" />
        <SharedComponent403 id="1200-3" value={120003} label="S" />
        <SharedComponent404 id="1200-4" value={120004} label="S" />
      </div>
      <div className="mt-4 text-xs text-zinc-500">
        v14: 14 CSS modules
      </div>
    </div>
  );
}
