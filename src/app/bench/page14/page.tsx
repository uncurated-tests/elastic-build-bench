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
import Component374 from '@/generated/components/Component374';
import Component375 from '@/generated/components/Component375';
import Component376 from '@/generated/components/Component376';
import Component377 from '@/generated/components/Component377';
import Component378 from '@/generated/components/Component378';
import Component379 from '@/generated/components/Component379';
import Component380 from '@/generated/components/Component380';
import Component381 from '@/generated/components/Component381';
import Component382 from '@/generated/components/Component382';
import Component383 from '@/generated/components/Component383';
import Component384 from '@/generated/components/Component384';
import Component385 from '@/generated/components/Component385';
import Component386 from '@/generated/components/Component386';
import Component387 from '@/generated/components/Component387';
import Component388 from '@/generated/components/Component388';
import Component389 from '@/generated/components/Component389';

const sampleData = {
  id: 'page-14',
  name: 'Benchmark Page 14',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-14',
          computed: 21,
          metadata: { page: 14 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 2.4000000000000004 },
    },
  },
};

export default function BenchPage14() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 14
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 26 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component364, Component365, Component366, Component367, Component368, Component369, Component370, Component371, Component372, Component373, Component374, Component375, Component376, Component377, Component378, Component379, Component380, Component381, Component382, Component383, Component384, Component385, Component386, Component387, Component388, Component389].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
