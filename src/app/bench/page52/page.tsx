import Component572 from '@/generated/components/Component572';
import Component573 from '@/generated/components/Component573';
import Component574 from '@/generated/components/Component574';
import Component575 from '@/generated/components/Component575';
import Component576 from '@/generated/components/Component576';
import Component577 from '@/generated/components/Component577';
import Component578 from '@/generated/components/Component578';
import Component579 from '@/generated/components/Component579';
import Component580 from '@/generated/components/Component580';
import Component581 from '@/generated/components/Component581';
import Component582 from '@/generated/components/Component582';

const sampleData = {
  id: 'page-52',
  name: 'Benchmark Page 52',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-52',
          computed: 78,
          metadata: { page: 52 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 6.2 },
    },
  },
};

export default function BenchPage52() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 52
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 11 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component572, Component573, Component574, Component575, Component576, Component577, Component578, Component579, Component580, Component581, Component582].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
