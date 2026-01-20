import Component312 from '@/generated/components/Component312';
import Component313 from '@/generated/components/Component313';
import Component314 from '@/generated/components/Component314';
import Component315 from '@/generated/components/Component315';
import Component316 from '@/generated/components/Component316';
import Component317 from '@/generated/components/Component317';
import Component318 from '@/generated/components/Component318';
import Component319 from '@/generated/components/Component319';
import Component320 from '@/generated/components/Component320';
import Component321 from '@/generated/components/Component321';
import Component322 from '@/generated/components/Component322';
import Component323 from '@/generated/components/Component323';
import Component324 from '@/generated/components/Component324';
import Component325 from '@/generated/components/Component325';
import Component326 from '@/generated/components/Component326';
import Component327 from '@/generated/components/Component327';
import Component328 from '@/generated/components/Component328';
import Component329 from '@/generated/components/Component329';
import Component330 from '@/generated/components/Component330';
import Component331 from '@/generated/components/Component331';
import Component332 from '@/generated/components/Component332';
import Component333 from '@/generated/components/Component333';
import Component334 from '@/generated/components/Component334';
import Component335 from '@/generated/components/Component335';
import Component336 from '@/generated/components/Component336';
import Component337 from '@/generated/components/Component337';

const sampleData = {
  id: 'page-12',
  name: 'Benchmark Page 12',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-12',
          computed: 18,
          metadata: { page: 12 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 2.2 },
    },
  },
};

export default function BenchPage12() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 12
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 26 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component312, Component313, Component314, Component315, Component316, Component317, Component318, Component319, Component320, Component321, Component322, Component323, Component324, Component325, Component326, Component327, Component328, Component329, Component330, Component331, Component332, Component333, Component334, Component335, Component336, Component337].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
