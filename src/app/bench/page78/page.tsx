import Component1638 from '@/generated/components/Component1638';
import Component1639 from '@/generated/components/Component1639';
import Component1640 from '@/generated/components/Component1640';
import Component1641 from '@/generated/components/Component1641';
import Component1642 from '@/generated/components/Component1642';
import Component1643 from '@/generated/components/Component1643';
import Component1644 from '@/generated/components/Component1644';
import Component1645 from '@/generated/components/Component1645';
import Component1646 from '@/generated/components/Component1646';
import Component1647 from '@/generated/components/Component1647';
import Component1648 from '@/generated/components/Component1648';
import Component1649 from '@/generated/components/Component1649';
import Component1650 from '@/generated/components/Component1650';
import Component1651 from '@/generated/components/Component1651';
import Component1652 from '@/generated/components/Component1652';
import Component1653 from '@/generated/components/Component1653';
import Component1654 from '@/generated/components/Component1654';
import Component1655 from '@/generated/components/Component1655';
import Component1656 from '@/generated/components/Component1656';
import Component1657 from '@/generated/components/Component1657';
import Component1658 from '@/generated/components/Component1658';

const sampleData = {
  id: 'page-78',
  name: 'Benchmark Page 78',
  values: [1, 2, 3, 4, 5],
  nested: { level1: { level2: { level3: { value: 'deep-78' } } } },
};

export default function BenchPage78() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Benchmark Page 78</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component1638, Component1639, Component1640, Component1641, Component1642, Component1643, Component1644, Component1645, Component1646, Component1647, Component1648, Component1649, Component1650, Component1651, Component1652, Component1653, Component1654, Component1655, Component1656, Component1657, Component1658].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
