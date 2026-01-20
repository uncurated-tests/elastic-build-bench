import Component847 from '@/generated/components/Component847';
import Component848 from '@/generated/components/Component848';
import Component849 from '@/generated/components/Component849';

const sampleData = {
  id: 'page-77',
  name: 'Benchmark Page 77',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-77',
          computed: 115.5,
          metadata: { page: 77 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 8.7 },
    },
  },
};

export default function BenchPage77() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 77
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 3 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component847, Component848, Component849].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
