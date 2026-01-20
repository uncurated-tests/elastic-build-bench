import Component550 from '@/generated/components/Component550';
import Component551 from '@/generated/components/Component551';
import Component552 from '@/generated/components/Component552';
import Component553 from '@/generated/components/Component553';
import Component554 from '@/generated/components/Component554';
import Component555 from '@/generated/components/Component555';
import Component556 from '@/generated/components/Component556';
import Component557 from '@/generated/components/Component557';
import Component558 from '@/generated/components/Component558';
import Component559 from '@/generated/components/Component559';
import Component560 from '@/generated/components/Component560';

const sampleData = {
  id: 'page-50',
  name: 'Benchmark Page 50',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-50',
          computed: 75,
          metadata: { page: 50 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 6 },
    },
  },
};

export default function BenchPage50() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 50
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 11 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component550, Component551, Component552, Component553, Component554, Component555, Component556, Component557, Component558, Component559, Component560].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
