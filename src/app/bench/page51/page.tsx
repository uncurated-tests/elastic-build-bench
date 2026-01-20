import Component561 from '@/generated/components/Component561';
import Component562 from '@/generated/components/Component562';
import Component563 from '@/generated/components/Component563';
import Component564 from '@/generated/components/Component564';
import Component565 from '@/generated/components/Component565';
import Component566 from '@/generated/components/Component566';
import Component567 from '@/generated/components/Component567';
import Component568 from '@/generated/components/Component568';
import Component569 from '@/generated/components/Component569';
import Component570 from '@/generated/components/Component570';
import Component571 from '@/generated/components/Component571';

const sampleData = {
  id: 'page-51',
  name: 'Benchmark Page 51',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-51',
          computed: 76.5,
          metadata: { page: 51 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 6.1000000000000005 },
    },
  },
};

export default function BenchPage51() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 51
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 11 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component561, Component562, Component563, Component564, Component565, Component566, Component567, Component568, Component569, Component570, Component571].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
