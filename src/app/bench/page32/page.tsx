import Component352 from '@/generated/components/Component352';
import Component353 from '@/generated/components/Component353';
import Component354 from '@/generated/components/Component354';
import Component355 from '@/generated/components/Component355';
import Component356 from '@/generated/components/Component356';
import Component357 from '@/generated/components/Component357';
import Component358 from '@/generated/components/Component358';
import Component359 from '@/generated/components/Component359';
import Component360 from '@/generated/components/Component360';
import Component361 from '@/generated/components/Component361';
import Component362 from '@/generated/components/Component362';

const sampleData = {
  id: 'page-32',
  name: 'Benchmark Page 32',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-32',
          computed: 48,
          metadata: { page: 32 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 4.2 },
    },
  },
};

export default function BenchPage32() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 32
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 11 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component352, Component353, Component354, Component355, Component356, Component357, Component358, Component359, Component360, Component361, Component362].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
