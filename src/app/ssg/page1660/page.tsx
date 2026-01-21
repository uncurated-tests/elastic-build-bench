// SSG Page 1660 - v12
import '@/generated/styles/p1660_m0.css';
import SharedComponent120 from '@/generated/components/SharedComponent120';
import SharedComponent121 from '@/generated/components/SharedComponent121';
import SharedComponent122 from '@/generated/components/SharedComponent122';
import SharedComponent123 from '@/generated/components/SharedComponent123';
import SharedComponent124 from '@/generated/components/SharedComponent124';
import HeavyComponent8885 from '@/generated/heavy/HeavyComponent8885';
import HeavyComponent8886 from '@/generated/heavy/HeavyComponent8886';

export default function SSGPage1660() {
  return (
    <div className="p1660-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1660</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent120 id="1660-0" value={166000} label="S" />
        <SharedComponent121 id="1660-1" value={166001} label="S" />
        <SharedComponent122 id="1660-2" value={166002} label="S" />
        <SharedComponent123 id="1660-3" value={166003} label="S" />
        <SharedComponent124 id="1660-4" value={166004} label="S" />
        <HeavyComponent8885 config={{ level1: { level2: { level3: { value: "p1660", count: 1660, enabled: true, items: [] }}}}} />
        <HeavyComponent8886 config={{ level1: { level2: { level3: { value: "p1660", count: 1660, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
