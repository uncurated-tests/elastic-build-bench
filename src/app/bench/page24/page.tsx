import Component264 from '@/generated/components/Component264';
import Component265 from '@/generated/components/Component265';
import Component266 from '@/generated/components/Component266';
import Component267 from '@/generated/components/Component267';
import Component268 from '@/generated/components/Component268';
import Component269 from '@/generated/components/Component269';
import Component270 from '@/generated/components/Component270';
import Component271 from '@/generated/components/Component271';
import Component272 from '@/generated/components/Component272';
import Component273 from '@/generated/components/Component273';
import Component274 from '@/generated/components/Component274';

const sampleData = {
  id: 'page-24',
  name: 'Benchmark Page 24',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-24',
          computed: 36,
          metadata: { page: 24 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 3.4000000000000004 },
    },
  },
};

export default function BenchPage24() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 24
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 11 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component264, Component265, Component266, Component267, Component268, Component269, Component270, Component271, Component272, Component273, Component274].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
