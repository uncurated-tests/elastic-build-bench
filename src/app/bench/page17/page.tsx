import Component442 from '@/generated/components/Component442';
import Component443 from '@/generated/components/Component443';
import Component444 from '@/generated/components/Component444';
import Component445 from '@/generated/components/Component445';
import Component446 from '@/generated/components/Component446';
import Component447 from '@/generated/components/Component447';
import Component448 from '@/generated/components/Component448';
import Component449 from '@/generated/components/Component449';
import Component450 from '@/generated/components/Component450';
import Component451 from '@/generated/components/Component451';
import Component452 from '@/generated/components/Component452';
import Component453 from '@/generated/components/Component453';
import Component454 from '@/generated/components/Component454';
import Component455 from '@/generated/components/Component455';
import Component456 from '@/generated/components/Component456';
import Component457 from '@/generated/components/Component457';
import Component458 from '@/generated/components/Component458';
import Component459 from '@/generated/components/Component459';
import Component460 from '@/generated/components/Component460';
import Component461 from '@/generated/components/Component461';
import Component462 from '@/generated/components/Component462';
import Component463 from '@/generated/components/Component463';
import Component464 from '@/generated/components/Component464';
import Component465 from '@/generated/components/Component465';
import Component466 from '@/generated/components/Component466';
import Component467 from '@/generated/components/Component467';

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
        This page imports 26 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component442, Component443, Component444, Component445, Component446, Component447, Component448, Component449, Component450, Component451, Component452, Component453, Component454, Component455, Component456, Component457, Component458, Component459, Component460, Component461, Component462, Component463, Component464, Component465, Component466, Component467].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
