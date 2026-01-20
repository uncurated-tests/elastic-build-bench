import Component363 from '@/generated/components/Component363';
import Component364 from '@/generated/components/Component364';
import Component365 from '@/generated/components/Component365';
import Component366 from '@/generated/components/Component366';
import Component367 from '@/generated/components/Component367';
import Component368 from '@/generated/components/Component368';
import Component369 from '@/generated/components/Component369';
import Component370 from '@/generated/components/Component370';
import Component371 from '@/generated/components/Component371';
import Component372 from '@/generated/components/Component372';
import Component373 from '@/generated/components/Component373';

const sampleData = {
  id: 'page-33',
  name: 'Benchmark Page 33',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-33',
          computed: 49.5,
          metadata: { page: 33 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 4.300000000000001 },
    },
  },
};

export default function BenchPage33() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 33
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 11 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component363, Component364, Component365, Component366, Component367, Component368, Component369, Component370, Component371, Component372, Component373].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
