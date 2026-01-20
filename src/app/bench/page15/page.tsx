import Component165 from '@/generated/components/Component165';
import Component166 from '@/generated/components/Component166';
import Component167 from '@/generated/components/Component167';
import Component168 from '@/generated/components/Component168';
import Component169 from '@/generated/components/Component169';
import Component170 from '@/generated/components/Component170';
import Component171 from '@/generated/components/Component171';
import Component172 from '@/generated/components/Component172';
import Component173 from '@/generated/components/Component173';
import Component174 from '@/generated/components/Component174';
import Component175 from '@/generated/components/Component175';

const sampleData = {
  id: 'page-15',
  name: 'Benchmark Page 15',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-15',
          computed: 22.5,
          metadata: { page: 15 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 2.5 },
    },
  },
};

export default function BenchPage15() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 15
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 11 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component165, Component166, Component167, Component168, Component169, Component170, Component171, Component172, Component173, Component174, Component175].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
