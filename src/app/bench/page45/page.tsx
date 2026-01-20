import Component495 from '@/generated/components/Component495';
import Component496 from '@/generated/components/Component496';
import Component497 from '@/generated/components/Component497';
import Component498 from '@/generated/components/Component498';
import Component499 from '@/generated/components/Component499';
import Component500 from '@/generated/components/Component500';
import Component501 from '@/generated/components/Component501';
import Component502 from '@/generated/components/Component502';
import Component503 from '@/generated/components/Component503';
import Component504 from '@/generated/components/Component504';
import Component505 from '@/generated/components/Component505';

const sampleData = {
  id: 'page-45',
  name: 'Benchmark Page 45',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-45',
          computed: 67.5,
          metadata: { page: 45 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 5.5 },
    },
  },
};

export default function BenchPage45() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 45
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 11 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component495, Component496, Component497, Component498, Component499, Component500, Component501, Component502, Component503, Component504, Component505].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
