// SSG Page 21 - v12
import '@/generated/styles/p21_m0.css';
import '@/generated/styles/p21_m1.css';
import '@/generated/styles/p21_m2.css';
import '@/generated/styles/p21_m3.css';
import '@/generated/styles/p21_m4.css';
import '@/generated/styles/p21_m5.css';
import '@/generated/styles/p21_m6.css';
import '@/generated/styles/p21_m7.css';
import '@/generated/styles/p21_m8.css';
import '@/generated/styles/p21_m9.css';
import '@/generated/styles/p21_m10.css';
import SharedComponent147 from '@/generated/components/SharedComponent147';
import SharedComponent148 from '@/generated/components/SharedComponent148';
import SharedComponent149 from '@/generated/components/SharedComponent149';
import SharedComponent150 from '@/generated/components/SharedComponent150';
import SharedComponent151 from '@/generated/components/SharedComponent151';
import HeavyComponent231 from '@/generated/heavy/HeavyComponent231';
import HeavyComponent232 from '@/generated/heavy/HeavyComponent232';

export default function SSGPage21() {
  return (
    <div className="p21-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 21</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent147 id="21-0" value={2100} label="S" />
        <SharedComponent148 id="21-1" value={2101} label="S" />
        <SharedComponent149 id="21-2" value={2102} label="S" />
        <SharedComponent150 id="21-3" value={2103} label="S" />
        <SharedComponent151 id="21-4" value={2104} label="S" />
        <HeavyComponent231 config={{ level1: { level2: { level3: { value: "p21", count: 21, enabled: true, items: [] }}}}} />
        <HeavyComponent232 config={{ level1: { level2: { level3: { value: "p21", count: 21, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
