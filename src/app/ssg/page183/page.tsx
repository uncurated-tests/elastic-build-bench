// SSG Page 183 - v12
import '@/generated/styles/p183_m0.css';
import SharedComponent281 from '@/generated/components/SharedComponent281';
import SharedComponent282 from '@/generated/components/SharedComponent282';
import SharedComponent283 from '@/generated/components/SharedComponent283';
import SharedComponent284 from '@/generated/components/SharedComponent284';
import SharedComponent285 from '@/generated/components/SharedComponent285';
import HeavyComponent2013 from '@/generated/heavy/HeavyComponent2013';
import HeavyComponent2014 from '@/generated/heavy/HeavyComponent2014';

export default function SSGPage183() {
  return (
    <div className="p183-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 183</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent281 id="183-0" value={18300} label="S" />
        <SharedComponent282 id="183-1" value={18301} label="S" />
        <SharedComponent283 id="183-2" value={18302} label="S" />
        <SharedComponent284 id="183-3" value={18303} label="S" />
        <SharedComponent285 id="183-4" value={18304} label="S" />
        <HeavyComponent2013 config={{ level1: { level2: { level3: { value: "p183", count: 183, enabled: true, items: [] }}}}} />
        <HeavyComponent2014 config={{ level1: { level2: { level3: { value: "p183", count: 183, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
