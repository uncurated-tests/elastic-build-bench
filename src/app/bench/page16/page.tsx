import Component176 from '@/generated/components/Component176';
import Component177 from '@/generated/components/Component177';
import Component178 from '@/generated/components/Component178';
import Component179 from '@/generated/components/Component179';
import Component180 from '@/generated/components/Component180';
import Component181 from '@/generated/components/Component181';
import Component182 from '@/generated/components/Component182';
import Component183 from '@/generated/components/Component183';
import Component184 from '@/generated/components/Component184';
import Component185 from '@/generated/components/Component185';
import Component186 from '@/generated/components/Component186';

const sampleData = {
  id: 'page-16',
  name: 'Benchmark Page 16',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-16',
          computed: 24,
          metadata: { page: 16 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 2.6 },
    },
  },
};

export default function BenchPage16() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 16
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 11 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component176, Component177, Component178, Component179, Component180, Component181, Component182, Component183, Component184, Component185, Component186].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
