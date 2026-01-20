import Component253 from '@/generated/components/Component253';
import Component254 from '@/generated/components/Component254';
import Component255 from '@/generated/components/Component255';
import Component256 from '@/generated/components/Component256';
import Component257 from '@/generated/components/Component257';
import Component258 from '@/generated/components/Component258';
import Component259 from '@/generated/components/Component259';
import Component260 from '@/generated/components/Component260';
import Component261 from '@/generated/components/Component261';
import Component262 from '@/generated/components/Component262';
import Component263 from '@/generated/components/Component263';

const sampleData = {
  id: 'page-23',
  name: 'Benchmark Page 23',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-23',
          computed: 34.5,
          metadata: { page: 23 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 3.3000000000000003 },
    },
  },
};

export default function BenchPage23() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 23
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 11 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component253, Component254, Component255, Component256, Component257, Component258, Component259, Component260, Component261, Component262, Component263].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
