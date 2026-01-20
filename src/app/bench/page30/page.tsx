import Component330 from '@/generated/components/Component330';
import Component331 from '@/generated/components/Component331';
import Component332 from '@/generated/components/Component332';
import Component333 from '@/generated/components/Component333';
import Component334 from '@/generated/components/Component334';
import Component335 from '@/generated/components/Component335';
import Component336 from '@/generated/components/Component336';
import Component337 from '@/generated/components/Component337';
import Component338 from '@/generated/components/Component338';
import Component339 from '@/generated/components/Component339';
import Component340 from '@/generated/components/Component340';

const sampleData = {
  id: 'page-30',
  name: 'Benchmark Page 30',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-30',
          computed: 45,
          metadata: { page: 30 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 4 },
    },
  },
};

export default function BenchPage30() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 30
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 11 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component330, Component331, Component332, Component333, Component334, Component335, Component336, Component337, Component338, Component339, Component340].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
