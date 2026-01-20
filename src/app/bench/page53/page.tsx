import Component583 from '@/generated/components/Component583';
import Component584 from '@/generated/components/Component584';
import Component585 from '@/generated/components/Component585';
import Component586 from '@/generated/components/Component586';
import Component587 from '@/generated/components/Component587';
import Component588 from '@/generated/components/Component588';
import Component589 from '@/generated/components/Component589';
import Component590 from '@/generated/components/Component590';
import Component591 from '@/generated/components/Component591';
import Component592 from '@/generated/components/Component592';
import Component593 from '@/generated/components/Component593';

const sampleData = {
  id: 'page-53',
  name: 'Benchmark Page 53',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-53',
          computed: 79.5,
          metadata: { page: 53 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 6.300000000000001 },
    },
  },
};

export default function BenchPage53() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 53
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 11 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component583, Component584, Component585, Component586, Component587, Component588, Component589, Component590, Component591, Component592, Component593].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
