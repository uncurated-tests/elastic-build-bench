import Component572 from '@/generated/components/Component572';
import Component573 from '@/generated/components/Component573';
import Component574 from '@/generated/components/Component574';
import Component575 from '@/generated/components/Component575';
import Component576 from '@/generated/components/Component576';
import Component577 from '@/generated/components/Component577';
import Component578 from '@/generated/components/Component578';
import Component579 from '@/generated/components/Component579';
import Component580 from '@/generated/components/Component580';
import Component581 from '@/generated/components/Component581';
import Component582 from '@/generated/components/Component582';
import Component583 from '@/generated/components/Component583';
import Component584 from '@/generated/components/Component584';
import Component585 from '@/generated/components/Component585';
import Component586 from '@/generated/components/Component586';
import Component587 from '@/generated/components/Component587';
import Component588 from '@/generated/components/Component588';
import Component589 from '@/generated/components/Component589';
import Component590 from '@/generated/components/Component590';
import Component591 from '@/generated/components/Component591';
import Component592 from '@/generated/components/Component592';
import Component593 from '@/generated/components/Component593';
import Component594 from '@/generated/components/Component594';
import Component595 from '@/generated/components/Component595';
import Component596 from '@/generated/components/Component596';
import Component597 from '@/generated/components/Component597';

const sampleData = {
  id: 'page-22',
  name: 'Benchmark Page 22',
  values: [1, 2, 3, 4, 5],
  nested: { level1: { level2: { level3: { value: 'deep-22' } } } },
};

export default function BenchPage22() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Benchmark Page 22</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component572, Component573, Component574, Component575, Component576, Component577, Component578, Component579, Component580, Component581, Component582, Component583, Component584, Component585, Component586, Component587, Component588, Component589, Component590, Component591, Component592, Component593, Component594, Component595, Component596, Component597].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
