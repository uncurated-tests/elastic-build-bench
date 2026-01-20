import Component520 from '@/generated/components/Component520';
import Component521 from '@/generated/components/Component521';
import Component522 from '@/generated/components/Component522';
import Component523 from '@/generated/components/Component523';
import Component524 from '@/generated/components/Component524';
import Component525 from '@/generated/components/Component525';
import Component526 from '@/generated/components/Component526';
import Component527 from '@/generated/components/Component527';
import Component528 from '@/generated/components/Component528';
import Component529 from '@/generated/components/Component529';
import Component530 from '@/generated/components/Component530';
import Component531 from '@/generated/components/Component531';
import Component532 from '@/generated/components/Component532';
import Component533 from '@/generated/components/Component533';
import Component534 from '@/generated/components/Component534';
import Component535 from '@/generated/components/Component535';
import Component536 from '@/generated/components/Component536';
import Component537 from '@/generated/components/Component537';
import Component538 from '@/generated/components/Component538';
import Component539 from '@/generated/components/Component539';
import Component540 from '@/generated/components/Component540';
import Component541 from '@/generated/components/Component541';
import Component542 from '@/generated/components/Component542';
import Component543 from '@/generated/components/Component543';
import Component544 from '@/generated/components/Component544';
import Component545 from '@/generated/components/Component545';

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
        This page imports 26 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component520, Component521, Component522, Component523, Component524, Component525, Component526, Component527, Component528, Component529, Component530, Component531, Component532, Component533, Component534, Component535, Component536, Component537, Component538, Component539, Component540, Component541, Component542, Component543, Component544, Component545].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
