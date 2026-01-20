import Component220 from '@/generated/components/Component220';
import Component221 from '@/generated/components/Component221';
import Component222 from '@/generated/components/Component222';
import Component223 from '@/generated/components/Component223';
import Component224 from '@/generated/components/Component224';
import Component225 from '@/generated/components/Component225';
import Component226 from '@/generated/components/Component226';
import Component227 from '@/generated/components/Component227';
import Component228 from '@/generated/components/Component228';
import Component229 from '@/generated/components/Component229';
import Component230 from '@/generated/components/Component230';

const sampleData = {
  id: 'page-20',
  name: 'Benchmark Page 20',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-20',
          computed: 30,
          metadata: { page: 20 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 3 },
    },
  },
};

export default function BenchPage20() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 20
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 11 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component220, Component221, Component222, Component223, Component224, Component225, Component226, Component227, Component228, Component229, Component230].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
