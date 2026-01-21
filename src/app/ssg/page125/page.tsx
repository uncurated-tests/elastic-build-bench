// SSG Page 125
import '@/generated/styles/page125.css';
import SharedComponent375 from '@/generated/components/SharedComponent375';
import SharedComponent376 from '@/generated/components/SharedComponent376';
import SharedComponent377 from '@/generated/components/SharedComponent377';
import SharedComponent378 from '@/generated/components/SharedComponent378';
import SharedComponent379 from '@/generated/components/SharedComponent379';
import SharedComponent380 from '@/generated/components/SharedComponent380';
import SharedComponent381 from '@/generated/components/SharedComponent381';
import SharedComponent382 from '@/generated/components/SharedComponent382';
import SharedComponent383 from '@/generated/components/SharedComponent383';
import SharedComponent384 from '@/generated/components/SharedComponent384';
import SharedComponent385 from '@/generated/components/SharedComponent385';
import SharedComponent386 from '@/generated/components/SharedComponent386';
import SharedComponent387 from '@/generated/components/SharedComponent387';
import SharedComponent388 from '@/generated/components/SharedComponent388';
import SharedComponent389 from '@/generated/components/SharedComponent389';
import SharedComponent390 from '@/generated/components/SharedComponent390';
import SharedComponent391 from '@/generated/components/SharedComponent391';
import SharedComponent392 from '@/generated/components/SharedComponent392';
import SharedComponent393 from '@/generated/components/SharedComponent393';
import SharedComponent394 from '@/generated/components/SharedComponent394';

export default async function SSGPage125() {
  const data = {
    pageId: 125,
    generatedAt: new Date().toISOString(),
  };
  
  const items = Array.from({ length: 20 }, (_, i) => ({
    id: `${125}-${i}`,
    value: 125 * 100 + i,
    label: `Page 125 Item`,
  }));
  
  return (
    <div className="page-125 p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-125-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 125 
      </h1>
      <p className="text-sm text-zinc-500 mb-4">
        Generated: {data.generatedAt}
      </p>
      <div className="page-125-content grid grid-cols-2 md:grid-cols-4 gap-2">
        {[SharedComponent375, SharedComponent376, SharedComponent377, SharedComponent378, SharedComponent379, SharedComponent380, SharedComponent381, SharedComponent382, SharedComponent383, SharedComponent384, SharedComponent385, SharedComponent386, SharedComponent387, SharedComponent388, SharedComponent389, SharedComponent390, SharedComponent391, SharedComponent392, SharedComponent393, SharedComponent394].map((Component, idx) => (
          <Component key={idx} {...items[idx]} />
        ))}
      </div>
    </div>
  );
}
