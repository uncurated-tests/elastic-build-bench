// SSG Page 404
import '@/generated/styles/page404.css';
import SharedComponent328 from '@/generated/components/SharedComponent328';
import SharedComponent329 from '@/generated/components/SharedComponent329';
import SharedComponent330 from '@/generated/components/SharedComponent330';
import SharedComponent331 from '@/generated/components/SharedComponent331';
import SharedComponent332 from '@/generated/components/SharedComponent332';
import SharedComponent333 from '@/generated/components/SharedComponent333';
import SharedComponent334 from '@/generated/components/SharedComponent334';
import SharedComponent335 from '@/generated/components/SharedComponent335';
import SharedComponent336 from '@/generated/components/SharedComponent336';
import SharedComponent337 from '@/generated/components/SharedComponent337';
import SharedComponent338 from '@/generated/components/SharedComponent338';
import SharedComponent339 from '@/generated/components/SharedComponent339';
import SharedComponent340 from '@/generated/components/SharedComponent340';
import SharedComponent341 from '@/generated/components/SharedComponent341';
import SharedComponent342 from '@/generated/components/SharedComponent342';
import SharedComponent343 from '@/generated/components/SharedComponent343';
import SharedComponent344 from '@/generated/components/SharedComponent344';
import SharedComponent345 from '@/generated/components/SharedComponent345';
import SharedComponent346 from '@/generated/components/SharedComponent346';
import SharedComponent347 from '@/generated/components/SharedComponent347';

export default async function SSGPage404() {
  const data = {
    pageId: 404,
    generatedAt: new Date().toISOString(),
  };
  
  const items = Array.from({ length: 20 }, (_, i) => ({
    id: `${404}-${i}`,
    value: 404 * 100 + i,
    label: `Page 404 Item`,
  }));
  
  return (
    <div className="page-404 p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-404-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 404 
      </h1>
      <p className="text-sm text-zinc-500 mb-4">
        Generated: {data.generatedAt}
      </p>
      <div className="page-404-content grid grid-cols-2 md:grid-cols-4 gap-2">
        {[SharedComponent328, SharedComponent329, SharedComponent330, SharedComponent331, SharedComponent332, SharedComponent333, SharedComponent334, SharedComponent335, SharedComponent336, SharedComponent337, SharedComponent338, SharedComponent339, SharedComponent340, SharedComponent341, SharedComponent342, SharedComponent343, SharedComponent344, SharedComponent345, SharedComponent346, SharedComponent347].map((Component, idx) => (
          <Component key={idx} {...items[idx]} />
        ))}
      </div>
    </div>
  );
}
