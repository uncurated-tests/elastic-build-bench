import Component396 from '@/generated/components/Component396';
import Component397 from '@/generated/components/Component397';
import Component398 from '@/generated/components/Component398';
import Component399 from '@/generated/components/Component399';
import Component400 from '@/generated/components/Component400';
import Component401 from '@/generated/components/Component401';
import Component402 from '@/generated/components/Component402';
import Component403 from '@/generated/components/Component403';
import Component404 from '@/generated/components/Component404';
import Component405 from '@/generated/components/Component405';
import Component406 from '@/generated/components/Component406';

const sampleData = {
  id: 'page-36',
  name: 'Benchmark Page 36',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-36',
          computed: 54,
          metadata: { page: 36 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 4.6 },
    },
  },
};

export default function BenchPage36() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 36
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 11 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component396, Component397, Component398, Component399, Component400, Component401, Component402, Component403, Component404, Component405, Component406].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
