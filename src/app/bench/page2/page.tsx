import Component22 from '@/generated/components/Component22';
import Component23 from '@/generated/components/Component23';
import Component24 from '@/generated/components/Component24';
import Component25 from '@/generated/components/Component25';
import Component26 from '@/generated/components/Component26';
import Component27 from '@/generated/components/Component27';
import Component28 from '@/generated/components/Component28';
import Component29 from '@/generated/components/Component29';
import Component30 from '@/generated/components/Component30';
import Component31 from '@/generated/components/Component31';
import Component32 from '@/generated/components/Component32';

const sampleData = {
  id: 'page-2',
  name: 'Benchmark Page 2',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-2',
          computed: 3,
          metadata: { page: 2 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 1.2 },
    },
  },
};

export default function BenchPage2() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 2
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 11 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component22, Component23, Component24, Component25, Component26, Component27, Component28, Component29, Component30, Component31, Component32].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
