import Component99 from '@/generated/components/Component99';
import Component100 from '@/generated/components/Component100';
import Component101 from '@/generated/components/Component101';
import Component102 from '@/generated/components/Component102';
import Component103 from '@/generated/components/Component103';
import Component104 from '@/generated/components/Component104';
import Component105 from '@/generated/components/Component105';
import Component106 from '@/generated/components/Component106';
import Component107 from '@/generated/components/Component107';
import Component108 from '@/generated/components/Component108';
import Component109 from '@/generated/components/Component109';

const sampleData = {
  id: 'page-9',
  name: 'Benchmark Page 9',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-9',
          computed: 13.5,
          metadata: { page: 9 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 1.9 },
    },
  },
};

export default function BenchPage9() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 9
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 11 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component99, Component100, Component101, Component102, Component103, Component104, Component105, Component106, Component107, Component108, Component109].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
