import Component275 from '@/generated/components/Component275';
import Component276 from '@/generated/components/Component276';
import Component277 from '@/generated/components/Component277';
import Component278 from '@/generated/components/Component278';
import Component279 from '@/generated/components/Component279';
import Component280 from '@/generated/components/Component280';
import Component281 from '@/generated/components/Component281';
import Component282 from '@/generated/components/Component282';
import Component283 from '@/generated/components/Component283';
import Component284 from '@/generated/components/Component284';
import Component285 from '@/generated/components/Component285';

const sampleData = {
  id: 'page-25',
  name: 'Benchmark Page 25',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-25',
          computed: 37.5,
          metadata: { page: 25 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 3.5 },
    },
  },
};

export default function BenchPage25() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 25
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 11 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component275, Component276, Component277, Component278, Component279, Component280, Component281, Component282, Component283, Component284, Component285].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
