import Component66 from '@/generated/components/Component66';
import Component67 from '@/generated/components/Component67';
import Component68 from '@/generated/components/Component68';
import Component69 from '@/generated/components/Component69';
import Component70 from '@/generated/components/Component70';
import Component71 from '@/generated/components/Component71';
import Component72 from '@/generated/components/Component72';
import Component73 from '@/generated/components/Component73';
import Component74 from '@/generated/components/Component74';
import Component75 from '@/generated/components/Component75';
import Component76 from '@/generated/components/Component76';

const sampleData = {
  id: 'page-6',
  name: 'Benchmark Page 6',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-6',
          computed: 9,
          metadata: { page: 6 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 1.6 },
    },
  },
};

export default function BenchPage6() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 6
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 11 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component66, Component67, Component68, Component69, Component70, Component71, Component72, Component73, Component74, Component75, Component76].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
