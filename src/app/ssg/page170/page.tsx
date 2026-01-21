// SSG Page 170
import '@/generated/styles/page170.css';
import SharedComponent190 from '@/generated/components/SharedComponent190';
import SharedComponent191 from '@/generated/components/SharedComponent191';
import SharedComponent192 from '@/generated/components/SharedComponent192';
import SharedComponent193 from '@/generated/components/SharedComponent193';
import SharedComponent194 from '@/generated/components/SharedComponent194';
import SharedComponent195 from '@/generated/components/SharedComponent195';
import SharedComponent196 from '@/generated/components/SharedComponent196';
import SharedComponent197 from '@/generated/components/SharedComponent197';
import SharedComponent198 from '@/generated/components/SharedComponent198';
import SharedComponent199 from '@/generated/components/SharedComponent199';

export default async function SSGPage170() {
  return (
    <div className="page-170 p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-170-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 170
      </h1>
      <div className="page-170-content grid grid-cols-2 md:grid-cols-4 gap-2">
        <SharedComponent190 id="170-0" value={17000} label="Item" />
        <SharedComponent191 id="170-1" value={17001} label="Item" />
        <SharedComponent192 id="170-2" value={17002} label="Item" />
        <SharedComponent193 id="170-3" value={17003} label="Item" />
        <SharedComponent194 id="170-4" value={17004} label="Item" />
        <SharedComponent195 id="170-5" value={17005} label="Item" />
        <SharedComponent196 id="170-6" value={17006} label="Item" />
        <SharedComponent197 id="170-7" value={17007} label="Item" />
        <SharedComponent198 id="170-8" value={17008} label="Item" />
        <SharedComponent199 id="170-9" value={17009} label="Item" />
      </div>
    </div>
  );
}
