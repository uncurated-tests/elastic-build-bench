import Component286 from '@/generated/components/Component286';
import Component287 from '@/generated/components/Component287';
import Component288 from '@/generated/components/Component288';
import Component289 from '@/generated/components/Component289';
import Component290 from '@/generated/components/Component290';
import Component291 from '@/generated/components/Component291';
import Component292 from '@/generated/components/Component292';
import Component293 from '@/generated/components/Component293';
import Component294 from '@/generated/components/Component294';
import Component295 from '@/generated/components/Component295';
import Component296 from '@/generated/components/Component296';

const sampleData = {
  id: 'page-26',
  name: 'Benchmark Page 26',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-26',
          computed: 39,
          metadata: { page: 26 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 3.6 },
    },
  },
};

export default function BenchPage26() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 26
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 11 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component286, Component287, Component288, Component289, Component290, Component291, Component292, Component293, Component294, Component295, Component296].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
