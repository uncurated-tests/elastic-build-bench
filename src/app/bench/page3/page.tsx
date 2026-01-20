import Component33 from '@/generated/components/Component33';
import Component34 from '@/generated/components/Component34';
import Component35 from '@/generated/components/Component35';
import Component36 from '@/generated/components/Component36';
import Component37 from '@/generated/components/Component37';
import Component38 from '@/generated/components/Component38';
import Component39 from '@/generated/components/Component39';
import Component40 from '@/generated/components/Component40';
import Component41 from '@/generated/components/Component41';
import Component42 from '@/generated/components/Component42';
import Component43 from '@/generated/components/Component43';

const sampleData = {
  id: 'page-3',
  name: 'Benchmark Page 3',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-3',
          computed: 4.5,
          metadata: { page: 3 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 1.3 },
    },
  },
};

export default function BenchPage3() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 3
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 11 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component33, Component34, Component35, Component36, Component37, Component38, Component39, Component40, Component41, Component42, Component43].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
