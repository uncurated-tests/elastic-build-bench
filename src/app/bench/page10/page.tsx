import Component260 from '@/generated/components/Component260';
import Component261 from '@/generated/components/Component261';
import Component262 from '@/generated/components/Component262';
import Component263 from '@/generated/components/Component263';
import Component264 from '@/generated/components/Component264';
import Component265 from '@/generated/components/Component265';
import Component266 from '@/generated/components/Component266';
import Component267 from '@/generated/components/Component267';
import Component268 from '@/generated/components/Component268';
import Component269 from '@/generated/components/Component269';
import Component270 from '@/generated/components/Component270';
import Component271 from '@/generated/components/Component271';
import Component272 from '@/generated/components/Component272';
import Component273 from '@/generated/components/Component273';
import Component274 from '@/generated/components/Component274';
import Component275 from '@/generated/components/Component275';
import Component276 from '@/generated/components/Component276';
import Component277 from '@/generated/components/Component277';
import Component278 from '@/generated/components/Component278';
import Component279 from '@/generated/components/Component279';
import Component280 from '@/generated/components/Component280';
import Component281 from '@/generated/components/Component281';
import Component282 from '@/generated/components/Component282';
import Component283 from '@/generated/components/Component283';
import Component284 from '@/generated/components/Component284';
import Component285 from '@/generated/components/Component285';

const sampleData = {
  id: 'page-10',
  name: 'Benchmark Page 10',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-10',
          computed: 15,
          metadata: { page: 10 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 2 },
    },
  },
};

export default function BenchPage10() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 10
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 26 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component260, Component261, Component262, Component263, Component264, Component265, Component266, Component267, Component268, Component269, Component270, Component271, Component272, Component273, Component274, Component275, Component276, Component277, Component278, Component279, Component280, Component281, Component282, Component283, Component284, Component285].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
