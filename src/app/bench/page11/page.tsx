import Component121 from '@/generated/components/Component121';
import Component122 from '@/generated/components/Component122';
import Component123 from '@/generated/components/Component123';
import Component124 from '@/generated/components/Component124';
import Component125 from '@/generated/components/Component125';
import Component126 from '@/generated/components/Component126';
import Component127 from '@/generated/components/Component127';
import Component128 from '@/generated/components/Component128';
import Component129 from '@/generated/components/Component129';
import Component130 from '@/generated/components/Component130';
import Component131 from '@/generated/components/Component131';

const sampleData = {
  id: 'page-11',
  name: 'Benchmark Page 11',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-11',
          computed: 16.5,
          metadata: { page: 11 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 2.1 },
    },
  },
};

export default function BenchPage11() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 11
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 11 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component121, Component122, Component123, Component124, Component125, Component126, Component127, Component128, Component129, Component130, Component131].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
