// SSG Page 25
import '@/generated/styles/page25.css';
import SharedComponent175 from '@/generated/components/SharedComponent175';
import SharedComponent176 from '@/generated/components/SharedComponent176';
import SharedComponent177 from '@/generated/components/SharedComponent177';
import SharedComponent178 from '@/generated/components/SharedComponent178';
import SharedComponent179 from '@/generated/components/SharedComponent179';
import SharedComponent180 from '@/generated/components/SharedComponent180';
import SharedComponent181 from '@/generated/components/SharedComponent181';
import SharedComponent182 from '@/generated/components/SharedComponent182';
import SharedComponent183 from '@/generated/components/SharedComponent183';
import SharedComponent184 from '@/generated/components/SharedComponent184';
import MuiIconComponent25 from '@/generated/barrel-components/MuiIconComponent25';

export default async function SSGPage25() {
  return (
    <div className="page-25 p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-25-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 25
      </h1>
      <div className="page-25-content grid grid-cols-2 md:grid-cols-4 gap-2">
        <SharedComponent175 id="25-0" value={2500} label="Item" />
        <SharedComponent176 id="25-1" value={2501} label="Item" />
        <SharedComponent177 id="25-2" value={2502} label="Item" />
        <SharedComponent178 id="25-3" value={2503} label="Item" />
        <SharedComponent179 id="25-4" value={2504} label="Item" />
        <SharedComponent180 id="25-5" value={2505} label="Item" />
        <SharedComponent181 id="25-6" value={2506} label="Item" />
        <SharedComponent182 id="25-7" value={2507} label="Item" />
        <SharedComponent183 id="25-8" value={2508} label="Item" />
        <SharedComponent184 id="25-9" value={2509} label="Item" />
        <MuiIconComponent25 size={20} color="#1976d2" />
      </div>
    </div>
  );
}
