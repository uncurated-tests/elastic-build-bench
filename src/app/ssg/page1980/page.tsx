// SSG Page 1980 - v12
import '@/generated/styles/p1980_m0.css';
import SharedComponent360 from '@/generated/components/SharedComponent360';
import SharedComponent361 from '@/generated/components/SharedComponent361';
import SharedComponent362 from '@/generated/components/SharedComponent362';
import SharedComponent363 from '@/generated/components/SharedComponent363';
import SharedComponent364 from '@/generated/components/SharedComponent364';
import HeavyComponent3030 from '@/generated/heavy/HeavyComponent3030';
import HeavyComponent3031 from '@/generated/heavy/HeavyComponent3031';

export default function SSGPage1980() {
  return (
    <div className="p1980-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1980</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent360 id="1980-0" value={198000} label="S" />
        <SharedComponent361 id="1980-1" value={198001} label="S" />
        <SharedComponent362 id="1980-2" value={198002} label="S" />
        <SharedComponent363 id="1980-3" value={198003} label="S" />
        <SharedComponent364 id="1980-4" value={198004} label="S" />
        <HeavyComponent3030 config={{ level1: { level2: { level3: { value: "p1980", count: 1980, enabled: true, items: [] }}}}} />
        <HeavyComponent3031 config={{ level1: { level2: { level3: { value: "p1980", count: 1980, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
