// SSG Page 1125 - v12
import '@/generated/styles/p1125_m0.css';
import SharedComponent375 from '@/generated/components/SharedComponent375';
import SharedComponent376 from '@/generated/components/SharedComponent376';
import SharedComponent377 from '@/generated/components/SharedComponent377';
import SharedComponent378 from '@/generated/components/SharedComponent378';
import SharedComponent379 from '@/generated/components/SharedComponent379';
import HeavyComponent3000 from '@/generated/heavy/HeavyComponent3000';
import HeavyComponent3001 from '@/generated/heavy/HeavyComponent3001';

export default function SSGPage1125() {
  return (
    <div className="p1125-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1125</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent375 id="1125-0" value={112500} label="S" />
        <SharedComponent376 id="1125-1" value={112501} label="S" />
        <SharedComponent377 id="1125-2" value={112502} label="S" />
        <SharedComponent378 id="1125-3" value={112503} label="S" />
        <SharedComponent379 id="1125-4" value={112504} label="S" />
        <HeavyComponent3000 config={{ level1: { level2: { level3: { value: "p1125", count: 1125, enabled: true, items: [] }}}}} />
        <HeavyComponent3001 config={{ level1: { level2: { level3: { value: "p1125", count: 1125, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
