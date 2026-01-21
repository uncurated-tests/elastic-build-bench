// SSG Page 18 - v12
import '@/generated/styles/p18_m0.css';
import '@/generated/styles/p18_m1.css';
import '@/generated/styles/p18_m2.css';
import '@/generated/styles/p18_m3.css';
import '@/generated/styles/p18_m4.css';
import '@/generated/styles/p18_m5.css';
import '@/generated/styles/p18_m6.css';
import '@/generated/styles/p18_m7.css';
import '@/generated/styles/p18_m8.css';
import '@/generated/styles/p18_m9.css';
import '@/generated/styles/p18_m10.css';
import SharedComponent126 from '@/generated/components/SharedComponent126';
import SharedComponent127 from '@/generated/components/SharedComponent127';
import SharedComponent128 from '@/generated/components/SharedComponent128';
import SharedComponent129 from '@/generated/components/SharedComponent129';
import SharedComponent130 from '@/generated/components/SharedComponent130';
import HeavyComponent198 from '@/generated/heavy/HeavyComponent198';
import HeavyComponent199 from '@/generated/heavy/HeavyComponent199';

export default function SSGPage18() {
  return (
    <div className="p18-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 18</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent126 id="18-0" value={1800} label="S" />
        <SharedComponent127 id="18-1" value={1801} label="S" />
        <SharedComponent128 id="18-2" value={1802} label="S" />
        <SharedComponent129 id="18-3" value={1803} label="S" />
        <SharedComponent130 id="18-4" value={1804} label="S" />
        <HeavyComponent198 config={{ level1: { level2: { level3: { value: "p18", count: 18, enabled: true, items: [] }}}}} />
        <HeavyComponent199 config={{ level1: { level2: { level3: { value: "p18", count: 18, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
