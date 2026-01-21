// Static SSG Page 1000 - v13
import '@/generated/styles/p1000_m0.css';
import SharedComponent0 from '@/generated/components/SharedComponent0';
import SharedComponent1 from '@/generated/components/SharedComponent1';
import SharedComponent2 from '@/generated/components/SharedComponent2';
import SharedComponent3 from '@/generated/components/SharedComponent3';
import SharedComponent4 from '@/generated/components/SharedComponent4';

export default function SSGPage1000() {
  return (
    <div className="p1000-m0-s0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Static Page 1000</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent0 id="1000-0" value={100000} label="S" />
        <SharedComponent1 id="1000-1" value={100001} label="S" />
        <SharedComponent2 id="1000-2" value={100002} label="S" />
        <SharedComponent3 id="1000-3" value={100003} label="S" />
        <SharedComponent4 id="1000-4" value={100004} label="S" />
      </div>
    </div>
  );
}
