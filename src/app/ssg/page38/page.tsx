// SSG Page 38 - v12
import '@/generated/styles/p38_m0.css';
import SharedComponent266 from '@/generated/components/SharedComponent266';
import SharedComponent267 from '@/generated/components/SharedComponent267';
import SharedComponent268 from '@/generated/components/SharedComponent268';
import SharedComponent269 from '@/generated/components/SharedComponent269';
import SharedComponent270 from '@/generated/components/SharedComponent270';
import HeavyComponent418 from '@/generated/heavy/HeavyComponent418';
import HeavyComponent419 from '@/generated/heavy/HeavyComponent419';

export default function SSGPage38() {
  return (
    <div className="p38-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 38</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent266 id="38-0" value={3800} label="S" />
        <SharedComponent267 id="38-1" value={3801} label="S" />
        <SharedComponent268 id="38-2" value={3802} label="S" />
        <SharedComponent269 id="38-3" value={3803} label="S" />
        <SharedComponent270 id="38-4" value={3804} label="S" />
        <HeavyComponent418 config={{ level1: { level2: { level3: { value: "p38", count: 38, enabled: true, items: [] }}}}} />
        <HeavyComponent419 config={{ level1: { level2: { level3: { value: "p38", count: 38, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
