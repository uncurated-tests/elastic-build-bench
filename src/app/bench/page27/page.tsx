import Component567 from '@/generated/components/Component567';
import Component568 from '@/generated/components/Component568';
import Component569 from '@/generated/components/Component569';
import Component570 from '@/generated/components/Component570';
import Component571 from '@/generated/components/Component571';
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

const sampleData = {
  id: 'page-27',
  name: 'Benchmark Page 27',
  values: [1, 2, 3, 4, 5],
  nested: { level1: { level2: { level3: { value: 'deep-27' } } } },
};

export default function BenchPage27() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Benchmark Page 27</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component567, Component568, Component569, Component570, Component571, Component572, Component573, Component574, Component575, Component576, Component577, Component578, Component579, Component580, Component581, Component582, Component583, Component584, Component585, Component586, Component587].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
