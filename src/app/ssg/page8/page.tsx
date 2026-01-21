// SSG Page 8
import '@/generated/styles/page8.css';
import SharedComponent56 from '@/generated/components/SharedComponent56';
import SharedComponent57 from '@/generated/components/SharedComponent57';
import SharedComponent58 from '@/generated/components/SharedComponent58';
import SharedComponent59 from '@/generated/components/SharedComponent59';
import SharedComponent60 from '@/generated/components/SharedComponent60';
import SharedComponent61 from '@/generated/components/SharedComponent61';
import SharedComponent62 from '@/generated/components/SharedComponent62';
import SharedComponent63 from '@/generated/components/SharedComponent63';
import SharedComponent64 from '@/generated/components/SharedComponent64';
import SharedComponent65 from '@/generated/components/SharedComponent65';
import MuiIconComponent8 from '@/generated/barrel-components/MuiIconComponent8';

export default async function SSGPage8() {
  return (
    <div className="page-8 p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-8-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 8
      </h1>
      <div className="page-8-content grid grid-cols-2 md:grid-cols-4 gap-2">
        <SharedComponent56 id="8-0" value={800} label="Item" />
        <SharedComponent57 id="8-1" value={801} label="Item" />
        <SharedComponent58 id="8-2" value={802} label="Item" />
        <SharedComponent59 id="8-3" value={803} label="Item" />
        <SharedComponent60 id="8-4" value={804} label="Item" />
        <SharedComponent61 id="8-5" value={805} label="Item" />
        <SharedComponent62 id="8-6" value={806} label="Item" />
        <SharedComponent63 id="8-7" value={807} label="Item" />
        <SharedComponent64 id="8-8" value={808} label="Item" />
        <SharedComponent65 id="8-9" value={809} label="Item" />
        <MuiIconComponent8 size={20} color="#1976d2" />
      </div>
    </div>
  );
}
