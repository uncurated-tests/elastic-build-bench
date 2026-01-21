// Static SSG Page 600 - v13
import '@/generated/styles/p600_m0.css';
import SharedComponent200 from '@/generated/components/SharedComponent200';
import SharedComponent201 from '@/generated/components/SharedComponent201';
import SharedComponent202 from '@/generated/components/SharedComponent202';
import SharedComponent203 from '@/generated/components/SharedComponent203';
import SharedComponent204 from '@/generated/components/SharedComponent204';

export default function SSGPage600() {
  return (
    <div className="p600-m0-s0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Static Page 600</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent200 id="600-0" value={60000} label="S" />
        <SharedComponent201 id="600-1" value={60001} label="S" />
        <SharedComponent202 id="600-2" value={60002} label="S" />
        <SharedComponent203 id="600-3" value={60003} label="S" />
        <SharedComponent204 id="600-4" value={60004} label="S" />
      </div>
    </div>
  );
}
