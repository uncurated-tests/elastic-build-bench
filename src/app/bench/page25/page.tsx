import Component650 from '@/generated/components/Component650';
import Component651 from '@/generated/components/Component651';
import Component652 from '@/generated/components/Component652';
import Component653 from '@/generated/components/Component653';
import Component654 from '@/generated/components/Component654';
import Component655 from '@/generated/components/Component655';
import Component656 from '@/generated/components/Component656';
import Component657 from '@/generated/components/Component657';
import Component658 from '@/generated/components/Component658';
import Component659 from '@/generated/components/Component659';
import Component660 from '@/generated/components/Component660';
import Component661 from '@/generated/components/Component661';
import Component662 from '@/generated/components/Component662';
import Component663 from '@/generated/components/Component663';
import Component664 from '@/generated/components/Component664';
import Component665 from '@/generated/components/Component665';
import Component666 from '@/generated/components/Component666';
import Component667 from '@/generated/components/Component667';
import Component668 from '@/generated/components/Component668';
import Component669 from '@/generated/components/Component669';
import Component670 from '@/generated/components/Component670';
import Component671 from '@/generated/components/Component671';
import Component672 from '@/generated/components/Component672';
import Component673 from '@/generated/components/Component673';
import Component674 from '@/generated/components/Component674';
import Component675 from '@/generated/components/Component675';

const sampleData = {
  id: 'page-25',
  name: 'Benchmark Page 25',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-25',
          computed: 37.5,
          metadata: { page: 25 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 3.5 },
    },
  },
};

export default function BenchPage25() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 25
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 26 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component650, Component651, Component652, Component653, Component654, Component655, Component656, Component657, Component658, Component659, Component660, Component661, Component662, Component663, Component664, Component665, Component666, Component667, Component668, Component669, Component670, Component671, Component672, Component673, Component674, Component675].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
