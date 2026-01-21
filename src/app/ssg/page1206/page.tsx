// SSG Page 1206 - v12
import '@/generated/styles/p1206_m0.css';
import SharedComponent442 from '@/generated/components/SharedComponent442';
import SharedComponent443 from '@/generated/components/SharedComponent443';
import SharedComponent444 from '@/generated/components/SharedComponent444';
import SharedComponent445 from '@/generated/components/SharedComponent445';
import SharedComponent446 from '@/generated/components/SharedComponent446';
import HeavyComponent3891 from '@/generated/heavy/HeavyComponent3891';
import HeavyComponent3892 from '@/generated/heavy/HeavyComponent3892';

export default function SSGPage1206() {
  return (
    <div className="p1206-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1206</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent442 id="1206-0" value={120600} label="S" />
        <SharedComponent443 id="1206-1" value={120601} label="S" />
        <SharedComponent444 id="1206-2" value={120602} label="S" />
        <SharedComponent445 id="1206-3" value={120603} label="S" />
        <SharedComponent446 id="1206-4" value={120604} label="S" />
        <HeavyComponent3891 config={{ level1: { level2: { level3: { value: "p1206", count: 1206, enabled: true, items: [] }}}}} />
        <HeavyComponent3892 config={{ level1: { level2: { level3: { value: "p1206", count: 1206, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
