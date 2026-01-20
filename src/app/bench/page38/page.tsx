import Component418 from '@/generated/components/Component418';
import Component419 from '@/generated/components/Component419';
import Component420 from '@/generated/components/Component420';
import Component421 from '@/generated/components/Component421';
import Component422 from '@/generated/components/Component422';
import Component423 from '@/generated/components/Component423';
import Component424 from '@/generated/components/Component424';
import Component425 from '@/generated/components/Component425';
import Component426 from '@/generated/components/Component426';
import Component427 from '@/generated/components/Component427';
import Component428 from '@/generated/components/Component428';

const sampleData = {
  id: 'page-38',
  name: 'Benchmark Page 38',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-38',
          computed: 57,
          metadata: { page: 38 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 4.800000000000001 },
    },
  },
};

export default function BenchPage38() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 38
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 11 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component418, Component419, Component420, Component421, Component422, Component423, Component424, Component425, Component426, Component427, Component428].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
