import Component407 from '@/generated/components/Component407';
import Component408 from '@/generated/components/Component408';
import Component409 from '@/generated/components/Component409';
import Component410 from '@/generated/components/Component410';
import Component411 from '@/generated/components/Component411';
import Component412 from '@/generated/components/Component412';
import Component413 from '@/generated/components/Component413';
import Component414 from '@/generated/components/Component414';
import Component415 from '@/generated/components/Component415';
import Component416 from '@/generated/components/Component416';
import Component417 from '@/generated/components/Component417';

const sampleData = {
  id: 'page-37',
  name: 'Benchmark Page 37',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-37',
          computed: 55.5,
          metadata: { page: 37 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 4.7 },
    },
  },
};

export default function BenchPage37() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 37
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 11 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component407, Component408, Component409, Component410, Component411, Component412, Component413, Component414, Component415, Component416, Component417].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
