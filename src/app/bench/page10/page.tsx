import Component110 from '@/generated/components/Component110';
import Component111 from '@/generated/components/Component111';
import Component112 from '@/generated/components/Component112';
import Component113 from '@/generated/components/Component113';
import Component114 from '@/generated/components/Component114';
import Component115 from '@/generated/components/Component115';
import Component116 from '@/generated/components/Component116';
import Component117 from '@/generated/components/Component117';
import Component118 from '@/generated/components/Component118';
import Component119 from '@/generated/components/Component119';
import Component120 from '@/generated/components/Component120';

const sampleData = {
  id: 'page-10',
  name: 'Benchmark Page 10',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-10',
          computed: 15,
          metadata: { page: 10 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 2 },
    },
  },
};

export default function BenchPage10() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 10
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 11 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component110, Component111, Component112, Component113, Component114, Component115, Component116, Component117, Component118, Component119, Component120].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
