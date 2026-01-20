import Component506 from '@/generated/components/Component506';
import Component507 from '@/generated/components/Component507';
import Component508 from '@/generated/components/Component508';
import Component509 from '@/generated/components/Component509';
import Component510 from '@/generated/components/Component510';
import Component511 from '@/generated/components/Component511';
import Component512 from '@/generated/components/Component512';
import Component513 from '@/generated/components/Component513';
import Component514 from '@/generated/components/Component514';
import Component515 from '@/generated/components/Component515';
import Component516 from '@/generated/components/Component516';

const sampleData = {
  id: 'page-46',
  name: 'Benchmark Page 46',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-46',
          computed: 69,
          metadata: { page: 46 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 5.6000000000000005 },
    },
  },
};

export default function BenchPage46() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 46
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 11 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component506, Component507, Component508, Component509, Component510, Component511, Component512, Component513, Component514, Component515, Component516].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
