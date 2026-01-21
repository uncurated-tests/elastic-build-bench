// Static SSG Page 333 - v13
import '@/generated/styles/p333_m0.css';
import SharedComponent331 from '@/generated/components/SharedComponent331';
import SharedComponent332 from '@/generated/components/SharedComponent332';
import SharedComponent333 from '@/generated/components/SharedComponent333';
import SharedComponent334 from '@/generated/components/SharedComponent334';
import SharedComponent335 from '@/generated/components/SharedComponent335';

export default function SSGPage333() {
  return (
    <div className="p333-m0-s0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Static Page 333</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent331 id="333-0" value={33300} label="S" />
        <SharedComponent332 id="333-1" value={33301} label="S" />
        <SharedComponent333 id="333-2" value={33302} label="S" />
        <SharedComponent334 id="333-3" value={33303} label="S" />
        <SharedComponent335 id="333-4" value={33304} label="S" />
      </div>
    </div>
  );
}
