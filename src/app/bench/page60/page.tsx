import Component660 from '@/generated/components/Component660';
import Component661 from '@/generated/components/Component661';
import Component662 from '@/generated/components/Component662';
import Component663 from '@/generated/components/Component663';
import Component664 from '@/generated/components/Component664';
import Component665 from '@/generated/components/Component665';
import Component666 from '@/generated/components/Component666';
import Component667 from '@/generated/components/Component667';
import Component668 from '@/generated/components/Component668';
import Component669 from '@/generated/components/Component669';
import Component670 from '@/generated/components/Component670';

const sampleData = {
  id: 'page-60',
  name: 'Benchmark Page 60',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-60',
          computed: 90,
          metadata: { page: 60 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 7 },
    },
  },
};

export default function BenchPage60() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 60
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 11 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component660, Component661, Component662, Component663, Component664, Component665, Component666, Component667, Component668, Component669, Component670].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
