import Component143 from '@/generated/components/Component143';
import Component144 from '@/generated/components/Component144';
import Component145 from '@/generated/components/Component145';
import Component146 from '@/generated/components/Component146';
import Component147 from '@/generated/components/Component147';
import Component148 from '@/generated/components/Component148';
import Component149 from '@/generated/components/Component149';
import Component150 from '@/generated/components/Component150';
import Component151 from '@/generated/components/Component151';
import Component152 from '@/generated/components/Component152';
import Component153 from '@/generated/components/Component153';

const sampleData = {
  id: 'page-13',
  name: 'Benchmark Page 13',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-13',
          computed: 19.5,
          metadata: { page: 13 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 2.3 },
    },
  },
};

export default function BenchPage13() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 13
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 11 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component143, Component144, Component145, Component146, Component147, Component148, Component149, Component150, Component151, Component152, Component153].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
