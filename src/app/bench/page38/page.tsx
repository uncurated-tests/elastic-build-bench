import Component798 from '@/generated/components/Component798';
import Component799 from '@/generated/components/Component799';
import Component800 from '@/generated/components/Component800';
import Component801 from '@/generated/components/Component801';
import Component802 from '@/generated/components/Component802';
import Component803 from '@/generated/components/Component803';
import Component804 from '@/generated/components/Component804';
import Component805 from '@/generated/components/Component805';
import Component806 from '@/generated/components/Component806';
import Component807 from '@/generated/components/Component807';
import Component808 from '@/generated/components/Component808';
import Component809 from '@/generated/components/Component809';
import Component810 from '@/generated/components/Component810';
import Component811 from '@/generated/components/Component811';
import Component812 from '@/generated/components/Component812';
import Component813 from '@/generated/components/Component813';
import Component814 from '@/generated/components/Component814';
import Component815 from '@/generated/components/Component815';
import Component816 from '@/generated/components/Component816';
import Component817 from '@/generated/components/Component817';
import Component818 from '@/generated/components/Component818';

const sampleData = {
  id: 'page-38',
  name: 'Benchmark Page 38',
  values: [1, 2, 3, 4, 5],
  nested: { level1: { level2: { level3: { value: 'deep-38' } } } },
};

export default function BenchPage38() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Benchmark Page 38</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component798, Component799, Component800, Component801, Component802, Component803, Component804, Component805, Component806, Component807, Component808, Component809, Component810, Component811, Component812, Component813, Component814, Component815, Component816, Component817, Component818].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
