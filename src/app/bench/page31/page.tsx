import Component341 from '@/generated/components/Component341';
import Component342 from '@/generated/components/Component342';
import Component343 from '@/generated/components/Component343';
import Component344 from '@/generated/components/Component344';
import Component345 from '@/generated/components/Component345';
import Component346 from '@/generated/components/Component346';
import Component347 from '@/generated/components/Component347';
import Component348 from '@/generated/components/Component348';
import Component349 from '@/generated/components/Component349';
import Component350 from '@/generated/components/Component350';
import Component351 from '@/generated/components/Component351';

const sampleData = {
  id: 'page-31',
  name: 'Benchmark Page 31',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-31',
          computed: 46.5,
          metadata: { page: 31 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 4.1 },
    },
  },
};

export default function BenchPage31() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 31
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 11 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component341, Component342, Component343, Component344, Component345, Component346, Component347, Component348, Component349, Component350, Component351].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
