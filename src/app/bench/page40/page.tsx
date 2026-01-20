import Component440 from '@/generated/components/Component440';
import Component441 from '@/generated/components/Component441';
import Component442 from '@/generated/components/Component442';
import Component443 from '@/generated/components/Component443';
import Component444 from '@/generated/components/Component444';
import Component445 from '@/generated/components/Component445';
import Component446 from '@/generated/components/Component446';
import Component447 from '@/generated/components/Component447';
import Component448 from '@/generated/components/Component448';
import Component449 from '@/generated/components/Component449';
import Component450 from '@/generated/components/Component450';

const sampleData = {
  id: 'page-40',
  name: 'Benchmark Page 40',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-40',
          computed: 60,
          metadata: { page: 40 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 5 },
    },
  },
};

export default function BenchPage40() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 40
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 11 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component440, Component441, Component442, Component443, Component444, Component445, Component446, Component447, Component448, Component449, Component450].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
