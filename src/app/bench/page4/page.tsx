import Component44 from '@/generated/components/Component44';
import Component45 from '@/generated/components/Component45';
import Component46 from '@/generated/components/Component46';
import Component47 from '@/generated/components/Component47';
import Component48 from '@/generated/components/Component48';
import Component49 from '@/generated/components/Component49';
import Component50 from '@/generated/components/Component50';
import Component51 from '@/generated/components/Component51';
import Component52 from '@/generated/components/Component52';
import Component53 from '@/generated/components/Component53';
import Component54 from '@/generated/components/Component54';

const sampleData = {
  id: 'page-4',
  name: 'Benchmark Page 4',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-4',
          computed: 6,
          metadata: { page: 4 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 1.4 },
    },
  },
};

export default function BenchPage4() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 4
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 11 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component44, Component45, Component46, Component47, Component48, Component49, Component50, Component51, Component52, Component53, Component54].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
