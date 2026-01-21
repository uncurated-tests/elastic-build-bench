// Static SSG Page 10 - v13
import '@/generated/styles/p10_m0.css';
import SharedComponent70 from '@/generated/components/SharedComponent70';
import SharedComponent71 from '@/generated/components/SharedComponent71';
import SharedComponent72 from '@/generated/components/SharedComponent72';
import SharedComponent73 from '@/generated/components/SharedComponent73';
import SharedComponent74 from '@/generated/components/SharedComponent74';

export default function SSGPage10() {
  return (
    <div className="p10-m0-s0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Static Page 10</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent70 id="10-0" value={1000} label="S" />
        <SharedComponent71 id="10-1" value={1001} label="S" />
        <SharedComponent72 id="10-2" value={1002} label="S" />
        <SharedComponent73 id="10-3" value={1003} label="S" />
        <SharedComponent74 id="10-4" value={1004} label="S" />
      </div>
    </div>
  );
}
