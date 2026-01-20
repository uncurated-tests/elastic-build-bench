import Component638 from '@/generated/components/Component638';
import Component639 from '@/generated/components/Component639';
import Component640 from '@/generated/components/Component640';
import Component641 from '@/generated/components/Component641';
import Component642 from '@/generated/components/Component642';
import Component643 from '@/generated/components/Component643';
import Component644 from '@/generated/components/Component644';
import Component645 from '@/generated/components/Component645';
import Component646 from '@/generated/components/Component646';
import Component647 from '@/generated/components/Component647';
import Component648 from '@/generated/components/Component648';

const sampleData = {
  id: 'page-58',
  name: 'Benchmark Page 58',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-58',
          computed: 87,
          metadata: { page: 58 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 6.800000000000001 },
    },
  },
};

export default function BenchPage58() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 58
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 11 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component638, Component639, Component640, Component641, Component642, Component643, Component644, Component645, Component646, Component647, Component648].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
