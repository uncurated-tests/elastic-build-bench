import Component11 from '@/generated/components/Component11';
import Component12 from '@/generated/components/Component12';
import Component13 from '@/generated/components/Component13';
import Component14 from '@/generated/components/Component14';
import Component15 from '@/generated/components/Component15';
import Component16 from '@/generated/components/Component16';
import Component17 from '@/generated/components/Component17';
import Component18 from '@/generated/components/Component18';
import Component19 from '@/generated/components/Component19';
import Component20 from '@/generated/components/Component20';
import Component21 from '@/generated/components/Component21';

const sampleData = {
  id: 'page-1',
  name: 'Benchmark Page 1',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-1',
          computed: 1.5,
          metadata: { page: 1 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 1.1 },
    },
  },
};

export default function BenchPage1() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 1
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 11 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component11, Component12, Component13, Component14, Component15, Component16, Component17, Component18, Component19, Component20, Component21].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
