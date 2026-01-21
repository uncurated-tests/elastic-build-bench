// SSG Page 990 - v12
import '@/generated/styles/p990_m0.css';
import SharedComponent430 from '@/generated/components/SharedComponent430';
import SharedComponent431 from '@/generated/components/SharedComponent431';
import SharedComponent432 from '@/generated/components/SharedComponent432';
import SharedComponent433 from '@/generated/components/SharedComponent433';
import SharedComponent434 from '@/generated/components/SharedComponent434';
import HeavyComponent1515 from '@/generated/heavy/HeavyComponent1515';
import HeavyComponent1516 from '@/generated/heavy/HeavyComponent1516';

export default function SSGPage990() {
  return (
    <div className="p990-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 990</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent430 id="990-0" value={99000} label="S" />
        <SharedComponent431 id="990-1" value={99001} label="S" />
        <SharedComponent432 id="990-2" value={99002} label="S" />
        <SharedComponent433 id="990-3" value={99003} label="S" />
        <SharedComponent434 id="990-4" value={99004} label="S" />
        <HeavyComponent1515 config={{ level1: { level2: { level3: { value: "p990", count: 990, enabled: true, items: [] }}}}} />
        <HeavyComponent1516 config={{ level1: { level2: { level3: { value: "p990", count: 990, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
