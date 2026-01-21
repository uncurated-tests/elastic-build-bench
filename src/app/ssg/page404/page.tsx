// SSG Page 404 - v12
import '@/generated/styles/p404_m0.css';
import SharedComponent328 from '@/generated/components/SharedComponent328';
import SharedComponent329 from '@/generated/components/SharedComponent329';
import SharedComponent330 from '@/generated/components/SharedComponent330';
import SharedComponent331 from '@/generated/components/SharedComponent331';
import SharedComponent332 from '@/generated/components/SharedComponent332';
import HeavyComponent4444 from '@/generated/heavy/HeavyComponent4444';
import HeavyComponent4445 from '@/generated/heavy/HeavyComponent4445';

export default function SSGPage404() {
  return (
    <div className="p404-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 404</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent328 id="404-0" value={40400} label="S" />
        <SharedComponent329 id="404-1" value={40401} label="S" />
        <SharedComponent330 id="404-2" value={40402} label="S" />
        <SharedComponent331 id="404-3" value={40403} label="S" />
        <SharedComponent332 id="404-4" value={40404} label="S" />
        <HeavyComponent4444 config={{ level1: { level2: { level3: { value: "p404", count: 404, enabled: true, items: [] }}}}} />
        <HeavyComponent4445 config={{ level1: { level2: { level3: { value: "p404", count: 404, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
