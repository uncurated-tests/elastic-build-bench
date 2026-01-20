import Component308 from '@/generated/components/Component308';
import Component309 from '@/generated/components/Component309';
import Component310 from '@/generated/components/Component310';
import Component311 from '@/generated/components/Component311';
import Component312 from '@/generated/components/Component312';
import Component313 from '@/generated/components/Component313';
import Component314 from '@/generated/components/Component314';
import Component315 from '@/generated/components/Component315';
import Component316 from '@/generated/components/Component316';
import Component317 from '@/generated/components/Component317';
import Component318 from '@/generated/components/Component318';

const sampleData = {
  id: 'page-28',
  name: 'Benchmark Page 28',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-28',
          computed: 42,
          metadata: { page: 28 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 3.8000000000000003 },
    },
  },
};

export default function BenchPage28() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 28
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 11 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component308, Component309, Component310, Component311, Component312, Component313, Component314, Component315, Component316, Component317, Component318].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
