import Component242 from '@/generated/components/Component242';
import Component243 from '@/generated/components/Component243';
import Component244 from '@/generated/components/Component244';
import Component245 from '@/generated/components/Component245';
import Component246 from '@/generated/components/Component246';
import Component247 from '@/generated/components/Component247';
import Component248 from '@/generated/components/Component248';
import Component249 from '@/generated/components/Component249';
import Component250 from '@/generated/components/Component250';
import Component251 from '@/generated/components/Component251';
import Component252 from '@/generated/components/Component252';

const sampleData = {
  id: 'page-22',
  name: 'Benchmark Page 22',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-22',
          computed: 33,
          metadata: { page: 22 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 3.2 },
    },
  },
};

export default function BenchPage22() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 22
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 11 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component242, Component243, Component244, Component245, Component246, Component247, Component248, Component249, Component250, Component251, Component252].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
