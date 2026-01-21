// SSG Page 173 - v12
import '@/generated/styles/p173_m0.css';
import '@/generated/styles/p173_m1.css';
import '@/generated/styles/p173_m2.css';
import '@/generated/styles/p173_m3.css';
import '@/generated/styles/p173_m4.css';
import '@/generated/styles/p173_m5.css';
import '@/generated/styles/p173_m6.css';
import '@/generated/styles/p173_m7.css';
import '@/generated/styles/p173_m8.css';
import '@/generated/styles/p173_m9.css';
import '@/generated/styles/p173_m10.css';
import SharedComponent211 from '@/generated/components/SharedComponent211';
import SharedComponent212 from '@/generated/components/SharedComponent212';
import SharedComponent213 from '@/generated/components/SharedComponent213';
import SharedComponent214 from '@/generated/components/SharedComponent214';
import SharedComponent215 from '@/generated/components/SharedComponent215';
import HeavyComponent1903 from '@/generated/heavy/HeavyComponent1903';
import HeavyComponent1904 from '@/generated/heavy/HeavyComponent1904';

export default function SSGPage173() {
  return (
    <div className="p173-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 173</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent211 id="173-0" value={17300} label="S" />
        <SharedComponent212 id="173-1" value={17301} label="S" />
        <SharedComponent213 id="173-2" value={17302} label="S" />
        <SharedComponent214 id="173-3" value={17303} label="S" />
        <SharedComponent215 id="173-4" value={17304} label="S" />
        <HeavyComponent1903 config={{ level1: { level2: { level3: { value: "p173", count: 173, enabled: true, items: [] }}}}} />
        <HeavyComponent1904 config={{ level1: { level2: { level3: { value: "p173", count: 173, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
