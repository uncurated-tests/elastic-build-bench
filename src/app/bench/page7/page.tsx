import Component77 from '@/generated/components/Component77';
import Component78 from '@/generated/components/Component78';
import Component79 from '@/generated/components/Component79';
import Component80 from '@/generated/components/Component80';
import Component81 from '@/generated/components/Component81';
import Component82 from '@/generated/components/Component82';
import Component83 from '@/generated/components/Component83';
import Component84 from '@/generated/components/Component84';
import Component85 from '@/generated/components/Component85';
import Component86 from '@/generated/components/Component86';
import Component87 from '@/generated/components/Component87';

const sampleData = {
  id: 'page-7',
  name: 'Benchmark Page 7',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-7',
          computed: 10.5,
          metadata: { page: 7 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 1.7000000000000002 },
    },
  },
};

export default function BenchPage7() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 7
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 11 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component77, Component78, Component79, Component80, Component81, Component82, Component83, Component84, Component85, Component86, Component87].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
