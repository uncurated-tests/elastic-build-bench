// Static SSG Page 73 - v13
import '@/generated/styles/p73_m0.css';
import SharedComponent11 from '@/generated/components/SharedComponent11';
import SharedComponent12 from '@/generated/components/SharedComponent12';
import SharedComponent13 from '@/generated/components/SharedComponent13';
import SharedComponent14 from '@/generated/components/SharedComponent14';
import SharedComponent15 from '@/generated/components/SharedComponent15';

export default function SSGPage73() {
  return (
    <div className="p73-m0-s0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Static Page 73</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent11 id="73-0" value={7300} label="S" />
        <SharedComponent12 id="73-1" value={7301} label="S" />
        <SharedComponent13 id="73-2" value={7302} label="S" />
        <SharedComponent14 id="73-3" value={7303} label="S" />
        <SharedComponent15 id="73-4" value={7304} label="S" />
      </div>
    </div>
  );
}
