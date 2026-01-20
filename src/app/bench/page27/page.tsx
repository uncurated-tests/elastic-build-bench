import Component297 from '@/generated/components/Component297';
import Component298 from '@/generated/components/Component298';
import Component299 from '@/generated/components/Component299';
import Component300 from '@/generated/components/Component300';
import Component301 from '@/generated/components/Component301';
import Component302 from '@/generated/components/Component302';
import Component303 from '@/generated/components/Component303';
import Component304 from '@/generated/components/Component304';
import Component305 from '@/generated/components/Component305';
import Component306 from '@/generated/components/Component306';
import Component307 from '@/generated/components/Component307';

const sampleData = {
  id: 'page-27',
  name: 'Benchmark Page 27',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-27',
          computed: 40.5,
          metadata: { page: 27 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 3.7 },
    },
  },
};

export default function BenchPage27() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 27
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 11 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component297, Component298, Component299, Component300, Component301, Component302, Component303, Component304, Component305, Component306, Component307].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
