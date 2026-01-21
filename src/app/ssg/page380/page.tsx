// SSG Page 380
import '@/generated/styles/page380.css';
import SharedComponent160 from '@/generated/components/SharedComponent160';
import SharedComponent161 from '@/generated/components/SharedComponent161';
import SharedComponent162 from '@/generated/components/SharedComponent162';
import SharedComponent163 from '@/generated/components/SharedComponent163';
import SharedComponent164 from '@/generated/components/SharedComponent164';
import SharedComponent165 from '@/generated/components/SharedComponent165';
import SharedComponent166 from '@/generated/components/SharedComponent166';
import SharedComponent167 from '@/generated/components/SharedComponent167';
import SharedComponent168 from '@/generated/components/SharedComponent168';
import SharedComponent169 from '@/generated/components/SharedComponent169';
import SharedComponent170 from '@/generated/components/SharedComponent170';
import SharedComponent171 from '@/generated/components/SharedComponent171';
import SharedComponent172 from '@/generated/components/SharedComponent172';
import SharedComponent173 from '@/generated/components/SharedComponent173';
import SharedComponent174 from '@/generated/components/SharedComponent174';
import SharedComponent175 from '@/generated/components/SharedComponent175';
import SharedComponent176 from '@/generated/components/SharedComponent176';
import SharedComponent177 from '@/generated/components/SharedComponent177';
import SharedComponent178 from '@/generated/components/SharedComponent178';
import SharedComponent179 from '@/generated/components/SharedComponent179';

function computePageData(pageId: number) {
  let result = pageId;
  for (let i = 0; i < 1000; i++) {
    result = Math.sin(result + i * 0.001) * Math.cos(result) + Math.sqrt(Math.abs(result) + 1);
  }
  return {
    pageId,
    checksum: result,
    generatedAt: new Date().toISOString(),
  };
}

export default async function SSGPage380() {
  const data = computePageData(380);
  
  const items = Array.from({ length: 20 }, (_, i) => ({
    id: `${380}-${i}`,
    value: 380 * 100 + i,
    label: `Page 380 Item`,
  }));
  
  return (
    <div className="page-380 p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-380-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page 380
      </h1>
      <p className="text-sm text-zinc-500 mb-4">
        Generated: {data.generatedAt} | Checksum: {data.checksum.toFixed(4)}
      </p>
      <div className="page-380-content grid grid-cols-2 md:grid-cols-4 gap-2">
        {[SharedComponent160, SharedComponent161, SharedComponent162, SharedComponent163, SharedComponent164, SharedComponent165, SharedComponent166, SharedComponent167, SharedComponent168, SharedComponent169, SharedComponent170, SharedComponent171, SharedComponent172, SharedComponent173, SharedComponent174, SharedComponent175, SharedComponent176, SharedComponent177, SharedComponent178, SharedComponent179].map((Component, idx) => (
          <Component key={idx} {...items[idx]} />
        ))}
      </div>
    </div>
  );
}
