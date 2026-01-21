// Static SSG Page 700 - v14
import '@/generated/styles/p700_m0.css';
import '@/generated/styles/p700_m1.css';
import '@/generated/styles/p700_m2.css';
import '@/generated/styles/p700_m3.css';
import '@/generated/styles/p700_m4.css';
import '@/generated/styles/p700_m5.css';
import '@/generated/styles/p700_m6.css';
import '@/generated/styles/p700_m7.css';
import '@/generated/styles/p700_m8.css';
import '@/generated/styles/p700_m9.css';
import '@/generated/styles/p700_m10.css';
import '@/generated/styles/p700_m11.css';
import '@/generated/styles/p700_m12.css';
import '@/generated/styles/p700_m13.css';
import SharedComponent400 from '@/generated/components/SharedComponent400';
import SharedComponent401 from '@/generated/components/SharedComponent401';
import SharedComponent402 from '@/generated/components/SharedComponent402';
import SharedComponent403 from '@/generated/components/SharedComponent403';
import SharedComponent404 from '@/generated/components/SharedComponent404';

export default function SSGPage700() {
  return (
    <div className="p700-m0-s0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 700</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent400 id="700-0" value={70000} label="S" />
        <SharedComponent401 id="700-1" value={70001} label="S" />
        <SharedComponent402 id="700-2" value={70002} label="S" />
        <SharedComponent403 id="700-3" value={70003} label="S" />
        <SharedComponent404 id="700-4" value={70004} label="S" />
      </div>
      <div className="mt-4 text-xs text-zinc-500">
        v14: 14 CSS modules
      </div>
    </div>
  );
}
