// Static SSG Page 286 - v13
import '@/generated/styles/p286_m0.css';
import SharedComponent2 from '@/generated/components/SharedComponent2';
import SharedComponent3 from '@/generated/components/SharedComponent3';
import SharedComponent4 from '@/generated/components/SharedComponent4';
import SharedComponent5 from '@/generated/components/SharedComponent5';
import SharedComponent6 from '@/generated/components/SharedComponent6';

export default function SSGPage286() {
  return (
    <div className="p286-m0-s0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Static Page 286</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent2 id="286-0" value={28600} label="S" />
        <SharedComponent3 id="286-1" value={28601} label="S" />
        <SharedComponent4 id="286-2" value={28602} label="S" />
        <SharedComponent5 id="286-3" value={28603} label="S" />
        <SharedComponent6 id="286-4" value={28604} label="S" />
      </div>
    </div>
  );
}
