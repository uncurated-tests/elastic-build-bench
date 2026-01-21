// Static SSG Page 480 - v13
import '@/generated/styles/p480_m0.css';
import SharedComponent360 from '@/generated/components/SharedComponent360';
import SharedComponent361 from '@/generated/components/SharedComponent361';
import SharedComponent362 from '@/generated/components/SharedComponent362';
import SharedComponent363 from '@/generated/components/SharedComponent363';
import SharedComponent364 from '@/generated/components/SharedComponent364';

export default function SSGPage480() {
  return (
    <div className="p480-m0-s0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Static Page 480</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent360 id="480-0" value={48000} label="S" />
        <SharedComponent361 id="480-1" value={48001} label="S" />
        <SharedComponent362 id="480-2" value={48002} label="S" />
        <SharedComponent363 id="480-3" value={48003} label="S" />
        <SharedComponent364 id="480-4" value={48004} label="S" />
      </div>
    </div>
  );
}
