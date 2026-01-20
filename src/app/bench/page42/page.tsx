import Component462 from '@/generated/components/Component462';
import Component463 from '@/generated/components/Component463';
import Component464 from '@/generated/components/Component464';
import Component465 from '@/generated/components/Component465';
import Component466 from '@/generated/components/Component466';
import Component467 from '@/generated/components/Component467';
import Component468 from '@/generated/components/Component468';
import Component469 from '@/generated/components/Component469';
import Component470 from '@/generated/components/Component470';
import Component471 from '@/generated/components/Component471';
import Component472 from '@/generated/components/Component472';

const sampleData = {
  id: 'page-42',
  name: 'Benchmark Page 42',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-42',
          computed: 63,
          metadata: { page: 42 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 5.2 },
    },
  },
};

export default function BenchPage42() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 42
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 11 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component462, Component463, Component464, Component465, Component466, Component467, Component468, Component469, Component470, Component471, Component472].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
