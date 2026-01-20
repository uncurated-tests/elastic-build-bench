import Component132 from '@/generated/components/Component132';
import Component133 from '@/generated/components/Component133';
import Component134 from '@/generated/components/Component134';
import Component135 from '@/generated/components/Component135';
import Component136 from '@/generated/components/Component136';
import Component137 from '@/generated/components/Component137';
import Component138 from '@/generated/components/Component138';
import Component139 from '@/generated/components/Component139';
import Component140 from '@/generated/components/Component140';
import Component141 from '@/generated/components/Component141';
import Component142 from '@/generated/components/Component142';

const sampleData = {
  id: 'page-12',
  name: 'Benchmark Page 12',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-12',
          computed: 18,
          metadata: { page: 12 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 2.2 },
    },
  },
};

export default function BenchPage12() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 12
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 11 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component132, Component133, Component134, Component135, Component136, Component137, Component138, Component139, Component140, Component141, Component142].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
