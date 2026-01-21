// SSG Page 18
import '@/generated/styles/page18.css';
import SharedComponent126 from '@/generated/components/SharedComponent126';
import SharedComponent127 from '@/generated/components/SharedComponent127';
import SharedComponent128 from '@/generated/components/SharedComponent128';
import SharedComponent129 from '@/generated/components/SharedComponent129';
import SharedComponent130 from '@/generated/components/SharedComponent130';
import SharedComponent131 from '@/generated/components/SharedComponent131';
import SharedComponent132 from '@/generated/components/SharedComponent132';
import SharedComponent133 from '@/generated/components/SharedComponent133';
import SharedComponent134 from '@/generated/components/SharedComponent134';
import SharedComponent135 from '@/generated/components/SharedComponent135';
import MuiIconComponent18 from '@/generated/barrel-components/MuiIconComponent18';

export default async function SSGPage18() {
  return (
    <div className="page-18 p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-18-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 18
      </h1>
      <div className="page-18-content grid grid-cols-2 md:grid-cols-4 gap-2">
        <SharedComponent126 id="18-0" value={1800} label="Item" />
        <SharedComponent127 id="18-1" value={1801} label="Item" />
        <SharedComponent128 id="18-2" value={1802} label="Item" />
        <SharedComponent129 id="18-3" value={1803} label="Item" />
        <SharedComponent130 id="18-4" value={1804} label="Item" />
        <SharedComponent131 id="18-5" value={1805} label="Item" />
        <SharedComponent132 id="18-6" value={1806} label="Item" />
        <SharedComponent133 id="18-7" value={1807} label="Item" />
        <SharedComponent134 id="18-8" value={1808} label="Item" />
        <SharedComponent135 id="18-9" value={1809} label="Item" />
        <MuiIconComponent18 size={20} color="#1976d2" />
      </div>
    </div>
  );
}
