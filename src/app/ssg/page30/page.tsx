// Static SSG Page 30 - v13
import '@/generated/styles/p30_m0.css';
import SharedComponent210 from '@/generated/components/SharedComponent210';
import SharedComponent211 from '@/generated/components/SharedComponent211';
import SharedComponent212 from '@/generated/components/SharedComponent212';
import SharedComponent213 from '@/generated/components/SharedComponent213';
import SharedComponent214 from '@/generated/components/SharedComponent214';

export default function SSGPage30() {
  return (
    <div className="p30-m0-s0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Static Page 30</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent210 id="30-0" value={3000} label="S" />
        <SharedComponent211 id="30-1" value={3001} label="S" />
        <SharedComponent212 id="30-2" value={3002} label="S" />
        <SharedComponent213 id="30-3" value={3003} label="S" />
        <SharedComponent214 id="30-4" value={3004} label="S" />
      </div>
    </div>
  );
}
