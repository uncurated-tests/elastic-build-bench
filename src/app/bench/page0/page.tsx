import Component0 from '@/generated/components/Component0';
import Component1 from '@/generated/components/Component1';
import Component2 from '@/generated/components/Component2';
import Component3 from '@/generated/components/Component3';
import Component4 from '@/generated/components/Component4';
import Component5 from '@/generated/components/Component5';
import Component6 from '@/generated/components/Component6';
import Component7 from '@/generated/components/Component7';
import Component8 from '@/generated/components/Component8';
import Component9 from '@/generated/components/Component9';
import Component10 from '@/generated/components/Component10';

const sampleData = {
  id: 'page-0',
  name: 'Benchmark Page 0',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-0',
          computed: 0,
          metadata: { page: 0 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 1 },
    },
  },
};

export default function BenchPage0() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 0
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 11 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component0, Component1, Component2, Component3, Component4, Component5, Component6, Component7, Component8, Component9, Component10].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
