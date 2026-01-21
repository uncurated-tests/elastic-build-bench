// SSG Page 170 - v12
import '@/generated/styles/p170_m0.css';
import SharedComponent190 from '@/generated/components/SharedComponent190';
import SharedComponent191 from '@/generated/components/SharedComponent191';
import SharedComponent192 from '@/generated/components/SharedComponent192';
import SharedComponent193 from '@/generated/components/SharedComponent193';
import SharedComponent194 from '@/generated/components/SharedComponent194';
import HeavyComponent1870 from '@/generated/heavy/HeavyComponent1870';
import HeavyComponent1871 from '@/generated/heavy/HeavyComponent1871';

export default function SSGPage170() {
  return (
    <div className="p170-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 170</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent190 id="170-0" value={17000} label="S" />
        <SharedComponent191 id="170-1" value={17001} label="S" />
        <SharedComponent192 id="170-2" value={17002} label="S" />
        <SharedComponent193 id="170-3" value={17003} label="S" />
        <SharedComponent194 id="170-4" value={17004} label="S" />
        <HeavyComponent1870 config={{ level1: { level2: { level3: { value: "p170", count: 170, enabled: true, items: [] }}}}} />
        <HeavyComponent1871 config={{ level1: { level2: { level3: { value: "p170", count: 170, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
