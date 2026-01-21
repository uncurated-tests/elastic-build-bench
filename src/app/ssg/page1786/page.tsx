// SSG Page 1786 - v12
import '@/generated/styles/p1786_m0.css';
import SharedComponent2 from '@/generated/components/SharedComponent2';
import SharedComponent3 from '@/generated/components/SharedComponent3';
import SharedComponent4 from '@/generated/components/SharedComponent4';
import SharedComponent5 from '@/generated/components/SharedComponent5';
import SharedComponent6 from '@/generated/components/SharedComponent6';
import HeavyComponent896 from '@/generated/heavy/HeavyComponent896';
import HeavyComponent897 from '@/generated/heavy/HeavyComponent897';

export default function SSGPage1786() {
  return (
    <div className="p1786-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1786</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent2 id="1786-0" value={178600} label="S" />
        <SharedComponent3 id="1786-1" value={178601} label="S" />
        <SharedComponent4 id="1786-2" value={178602} label="S" />
        <SharedComponent5 id="1786-3" value={178603} label="S" />
        <SharedComponent6 id="1786-4" value={178604} label="S" />
        <HeavyComponent896 config={{ level1: { level2: { level3: { value: "p1786", count: 1786, enabled: true, items: [] }}}}} />
        <HeavyComponent897 config={{ level1: { level2: { level3: { value: "p1786", count: 1786, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
