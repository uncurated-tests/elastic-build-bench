import Component187 from '@/generated/components/Component187';
import Component188 from '@/generated/components/Component188';
import Component189 from '@/generated/components/Component189';
import Component190 from '@/generated/components/Component190';
import Component191 from '@/generated/components/Component191';
import Component192 from '@/generated/components/Component192';
import Component193 from '@/generated/components/Component193';
import Component194 from '@/generated/components/Component194';
import Component195 from '@/generated/components/Component195';
import Component196 from '@/generated/components/Component196';
import Component197 from '@/generated/components/Component197';

const sampleData = {
  id: 'page-17',
  name: 'Benchmark Page 17',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-17',
          computed: 25.5,
          metadata: { page: 17 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 2.7 },
    },
  },
};

export default function BenchPage17() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 17
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 11 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component187, Component188, Component189, Component190, Component191, Component192, Component193, Component194, Component195, Component196, Component197].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
