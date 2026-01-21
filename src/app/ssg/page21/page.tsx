// SSG Page 21
import '@/generated/styles/page21.css';
import SharedComponent147 from '@/generated/components/SharedComponent147';
import SharedComponent148 from '@/generated/components/SharedComponent148';
import SharedComponent149 from '@/generated/components/SharedComponent149';
import SharedComponent150 from '@/generated/components/SharedComponent150';
import SharedComponent151 from '@/generated/components/SharedComponent151';
import SharedComponent152 from '@/generated/components/SharedComponent152';
import SharedComponent153 from '@/generated/components/SharedComponent153';
import SharedComponent154 from '@/generated/components/SharedComponent154';
import SharedComponent155 from '@/generated/components/SharedComponent155';
import SharedComponent156 from '@/generated/components/SharedComponent156';
import MuiIconComponent21 from '@/generated/barrel-components/MuiIconComponent21';

export default async function SSGPage21() {
  return (
    <div className="page-21 p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-21-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 21
      </h1>
      <div className="page-21-content grid grid-cols-2 md:grid-cols-4 gap-2">
        <SharedComponent147 id="21-0" value={2100} label="Item" />
        <SharedComponent148 id="21-1" value={2101} label="Item" />
        <SharedComponent149 id="21-2" value={2102} label="Item" />
        <SharedComponent150 id="21-3" value={2103} label="Item" />
        <SharedComponent151 id="21-4" value={2104} label="Item" />
        <SharedComponent152 id="21-5" value={2105} label="Item" />
        <SharedComponent153 id="21-6" value={2106} label="Item" />
        <SharedComponent154 id="21-7" value={2107} label="Item" />
        <SharedComponent155 id="21-8" value={2108} label="Item" />
        <SharedComponent156 id="21-9" value={2109} label="Item" />
        <MuiIconComponent21 size={20} color="#1976d2" />
      </div>
    </div>
  );
}
