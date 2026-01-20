import Component451 from '@/generated/components/Component451';
import Component452 from '@/generated/components/Component452';
import Component453 from '@/generated/components/Component453';
import Component454 from '@/generated/components/Component454';
import Component455 from '@/generated/components/Component455';
import Component456 from '@/generated/components/Component456';
import Component457 from '@/generated/components/Component457';
import Component458 from '@/generated/components/Component458';
import Component459 from '@/generated/components/Component459';
import Component460 from '@/generated/components/Component460';
import Component461 from '@/generated/components/Component461';

const sampleData = {
  id: 'page-41',
  name: 'Benchmark Page 41',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-41',
          computed: 61.5,
          metadata: { page: 41 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 5.1000000000000005 },
    },
  },
};

export default function BenchPage41() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 41
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 11 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component451, Component452, Component453, Component454, Component455, Component456, Component457, Component458, Component459, Component460, Component461].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
