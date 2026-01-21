// Static SSG Page 83 - v13
import '@/generated/styles/p83_m0.css';
import SharedComponent81 from '@/generated/components/SharedComponent81';
import SharedComponent82 from '@/generated/components/SharedComponent82';
import SharedComponent83 from '@/generated/components/SharedComponent83';
import SharedComponent84 from '@/generated/components/SharedComponent84';
import SharedComponent85 from '@/generated/components/SharedComponent85';

export default function SSGPage83() {
  return (
    <div className="p83-m0-s0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Static Page 83</h1>
      <div className="grid grid-cols-2 gap-1">
        <SharedComponent81 id="83-0" value={8300} label="S" />
        <SharedComponent82 id="83-1" value={8301} label="S" />
        <SharedComponent83 id="83-2" value={8302} label="S" />
        <SharedComponent84 id="83-3" value={8303} label="S" />
        <SharedComponent85 id="83-4" value={8304} label="S" />
      </div>
    </div>
  );
}
