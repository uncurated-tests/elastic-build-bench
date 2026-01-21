// SSG Page 1240 - v12
import '@/generated/styles/p1240_m0.css';
import SharedComponent180 from '@/generated/components/SharedComponent180';
import SharedComponent181 from '@/generated/components/SharedComponent181';
import SharedComponent182 from '@/generated/components/SharedComponent182';
import SharedComponent183 from '@/generated/components/SharedComponent183';
import SharedComponent184 from '@/generated/components/SharedComponent184';
import HeavyComponent4265 from '@/generated/heavy/HeavyComponent4265';
import HeavyComponent4266 from '@/generated/heavy/HeavyComponent4266';

export default function SSGPage1240() {
  return (
    <div className="p1240-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page 1240</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent180 id="1240-0" value={124000} label="S" />
        <SharedComponent181 id="1240-1" value={124001} label="S" />
        <SharedComponent182 id="1240-2" value={124002} label="S" />
        <SharedComponent183 id="1240-3" value={124003} label="S" />
        <SharedComponent184 id="1240-4" value={124004} label="S" />
        <HeavyComponent4265 config={{ level1: { level2: { level3: { value: "p1240", count: 1240, enabled: true, items: [] }}}}} />
        <HeavyComponent4266 config={{ level1: { level2: { level3: { value: "p1240", count: 1240, enabled: true, items: [] }}}}} />
      </div>
    </div>
  );
}
