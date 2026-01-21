// Static SSG Page 90 - v13
import '@/generated/styles/p90_m0.css';
import SharedComponent130 from '@/generated/components/SharedComponent130';
import SharedComponent131 from '@/generated/components/SharedComponent131';
import SharedComponent132 from '@/generated/components/SharedComponent132';
import SharedComponent133 from '@/generated/components/SharedComponent133';
import SharedComponent134 from '@/generated/components/SharedComponent134';

export default function SSGPage90() {
  return (
    <div className="p90-m0-s0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Static Page 90</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent130 id="90-0" value={9000} label="S" />
        <SharedComponent131 id="90-1" value={9001} label="S" />
        <SharedComponent132 id="90-2" value={9002} label="S" />
        <SharedComponent133 id="90-3" value={9003} label="S" />
        <SharedComponent134 id="90-4" value={9004} label="S" />
      </div>
    </div>
  );
}
