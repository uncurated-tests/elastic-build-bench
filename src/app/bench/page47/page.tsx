import Component517 from '@/generated/components/Component517';
import Component518 from '@/generated/components/Component518';
import Component519 from '@/generated/components/Component519';
import Component520 from '@/generated/components/Component520';
import Component521 from '@/generated/components/Component521';
import Component522 from '@/generated/components/Component522';
import Component523 from '@/generated/components/Component523';
import Component524 from '@/generated/components/Component524';
import Component525 from '@/generated/components/Component525';
import Component526 from '@/generated/components/Component526';
import Component527 from '@/generated/components/Component527';

const sampleData = {
  id: 'page-47',
  name: 'Benchmark Page 47',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-47',
          computed: 70.5,
          metadata: { page: 47 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 5.7 },
    },
  },
};

export default function BenchPage47() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 47
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 11 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component517, Component518, Component519, Component520, Component521, Component522, Component523, Component524, Component525, Component526, Component527].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
