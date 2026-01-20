import Component1664 from '@/generated/components/Component1664';
import Component1665 from '@/generated/components/Component1665';
import Component1666 from '@/generated/components/Component1666';
import Component1667 from '@/generated/components/Component1667';
import Component1668 from '@/generated/components/Component1668';
import Component1669 from '@/generated/components/Component1669';
import Component1670 from '@/generated/components/Component1670';
import Component1671 from '@/generated/components/Component1671';
import Component1672 from '@/generated/components/Component1672';
import Component1673 from '@/generated/components/Component1673';
import Component1674 from '@/generated/components/Component1674';
import Component1675 from '@/generated/components/Component1675';
import Component1676 from '@/generated/components/Component1676';
import Component1677 from '@/generated/components/Component1677';
import Component1678 from '@/generated/components/Component1678';
import Component1679 from '@/generated/components/Component1679';

const sampleData = {
  id: 'page-64',
  name: 'Benchmark Page 64',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-64',
          computed: 96,
          metadata: { page: 64 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 7.4 },
    },
  },
};

export default function BenchPage64() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 64
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 16 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component1664, Component1665, Component1666, Component1667, Component1668, Component1669, Component1670, Component1671, Component1672, Component1673, Component1674, Component1675, Component1676, Component1677, Component1678, Component1679].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
