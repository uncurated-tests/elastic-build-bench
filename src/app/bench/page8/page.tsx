import Component88 from '@/generated/components/Component88';
import Component89 from '@/generated/components/Component89';
import Component90 from '@/generated/components/Component90';
import Component91 from '@/generated/components/Component91';
import Component92 from '@/generated/components/Component92';
import Component93 from '@/generated/components/Component93';
import Component94 from '@/generated/components/Component94';
import Component95 from '@/generated/components/Component95';
import Component96 from '@/generated/components/Component96';
import Component97 from '@/generated/components/Component97';
import Component98 from '@/generated/components/Component98';

const sampleData = {
  id: 'page-8',
  name: 'Benchmark Page 8',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-8',
          computed: 12,
          metadata: { page: 8 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 1.8 },
    },
  },
};

export default function BenchPage8() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 8
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 11 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component88, Component89, Component90, Component91, Component92, Component93, Component94, Component95, Component96, Component97, Component98].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
