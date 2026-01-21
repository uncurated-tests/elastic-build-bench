// Static SSG Page 1900 - v13
import '@/generated/styles/p1900_m0.css';
import SharedComponent300 from '@/generated/components/SharedComponent300';
import SharedComponent301 from '@/generated/components/SharedComponent301';
import SharedComponent302 from '@/generated/components/SharedComponent302';
import SharedComponent303 from '@/generated/components/SharedComponent303';
import SharedComponent304 from '@/generated/components/SharedComponent304';

export default function SSGPage1900() {
  return (
    <div className="p1900-m0-s0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Static Page 1900</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent300 id="1900-0" value={190000} label="S" />
        <SharedComponent301 id="1900-1" value={190001} label="S" />
        <SharedComponent302 id="1900-2" value={190002} label="S" />
        <SharedComponent303 id="1900-3" value={190003} label="S" />
        <SharedComponent304 id="1900-4" value={190004} label="S" />
      </div>
    </div>
  );
}
