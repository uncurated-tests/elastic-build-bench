import Component528 from '@/generated/components/Component528';
import Component529 from '@/generated/components/Component529';
import Component530 from '@/generated/components/Component530';
import Component531 from '@/generated/components/Component531';
import Component532 from '@/generated/components/Component532';
import Component533 from '@/generated/components/Component533';
import Component534 from '@/generated/components/Component534';
import Component535 from '@/generated/components/Component535';
import Component536 from '@/generated/components/Component536';
import Component537 from '@/generated/components/Component537';
import Component538 from '@/generated/components/Component538';

const sampleData = {
  id: 'page-48',
  name: 'Benchmark Page 48',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-48',
          computed: 72,
          metadata: { page: 48 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 5.800000000000001 },
    },
  },
};

export default function BenchPage48() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 48
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 11 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component528, Component529, Component530, Component531, Component532, Component533, Component534, Component535, Component536, Component537, Component538].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
