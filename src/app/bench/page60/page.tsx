import Component1560 from '@/generated/components/Component1560';
import Component1561 from '@/generated/components/Component1561';
import Component1562 from '@/generated/components/Component1562';
import Component1563 from '@/generated/components/Component1563';
import Component1564 from '@/generated/components/Component1564';
import Component1565 from '@/generated/components/Component1565';
import Component1566 from '@/generated/components/Component1566';
import Component1567 from '@/generated/components/Component1567';
import Component1568 from '@/generated/components/Component1568';
import Component1569 from '@/generated/components/Component1569';
import Component1570 from '@/generated/components/Component1570';
import Component1571 from '@/generated/components/Component1571';
import Component1572 from '@/generated/components/Component1572';
import Component1573 from '@/generated/components/Component1573';
import Component1574 from '@/generated/components/Component1574';
import Component1575 from '@/generated/components/Component1575';
import Component1576 from '@/generated/components/Component1576';
import Component1577 from '@/generated/components/Component1577';
import Component1578 from '@/generated/components/Component1578';
import Component1579 from '@/generated/components/Component1579';
import Component1580 from '@/generated/components/Component1580';
import Component1581 from '@/generated/components/Component1581';
import Component1582 from '@/generated/components/Component1582';
import Component1583 from '@/generated/components/Component1583';
import Component1584 from '@/generated/components/Component1584';
import Component1585 from '@/generated/components/Component1585';

const sampleData = {
  id: 'page-60',
  name: 'Benchmark Page 60',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-60',
          computed: 90,
          metadata: { page: 60 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 7 },
    },
  },
};

export default function BenchPage60() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 60
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 26 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component1560, Component1561, Component1562, Component1563, Component1564, Component1565, Component1566, Component1567, Component1568, Component1569, Component1570, Component1571, Component1572, Component1573, Component1574, Component1575, Component1576, Component1577, Component1578, Component1579, Component1580, Component1581, Component1582, Component1583, Component1584, Component1585].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
