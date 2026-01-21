// Static SSG Page 400 - v13
import '@/generated/styles/p400_m0.css';
import SharedComponent300 from '@/generated/components/SharedComponent300';
import SharedComponent301 from '@/generated/components/SharedComponent301';
import SharedComponent302 from '@/generated/components/SharedComponent302';
import SharedComponent303 from '@/generated/components/SharedComponent303';
import SharedComponent304 from '@/generated/components/SharedComponent304';

export default function SSGPage400() {
  return (
    <div className="p400-m0-s0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Static Page 400</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent300 id="400-0" value={40000} label="S" />
        <SharedComponent301 id="400-1" value={40001} label="S" />
        <SharedComponent302 id="400-2" value={40002} label="S" />
        <SharedComponent303 id="400-3" value={40003} label="S" />
        <SharedComponent304 id="400-4" value={40004} label="S" />
      </div>
    </div>
  );
}
