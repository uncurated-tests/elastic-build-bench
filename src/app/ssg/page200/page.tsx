// Static SSG Page 200 - v13
import '@/generated/styles/p200_m0.css';
import SharedComponent400 from '@/generated/components/SharedComponent400';
import SharedComponent401 from '@/generated/components/SharedComponent401';
import SharedComponent402 from '@/generated/components/SharedComponent402';
import SharedComponent403 from '@/generated/components/SharedComponent403';
import SharedComponent404 from '@/generated/components/SharedComponent404';

export default function SSGPage200() {
  return (
    <div className="p200-m0-s0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Static Page 200</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent400 id="200-0" value={20000} label="S" />
        <SharedComponent401 id="200-1" value={20001} label="S" />
        <SharedComponent402 id="200-2" value={20002} label="S" />
        <SharedComponent403 id="200-3" value={20003} label="S" />
        <SharedComponent404 id="200-4" value={20004} label="S" />
      </div>
    </div>
  );
}
