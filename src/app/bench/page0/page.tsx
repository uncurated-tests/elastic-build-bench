import Component0 from '@/generated/components/Component0';
import Component1 from '@/generated/components/Component1';
import Component2 from '@/generated/components/Component2';
import Component3 from '@/generated/components/Component3';
import Component4 from '@/generated/components/Component4';
import Component5 from '@/generated/components/Component5';
import Component6 from '@/generated/components/Component6';
import Component7 from '@/generated/components/Component7';
import Component8 from '@/generated/components/Component8';
import Component9 from '@/generated/components/Component9';
import Component10 from '@/generated/components/Component10';
import Component11 from '@/generated/components/Component11';
import Component12 from '@/generated/components/Component12';
import Component13 from '@/generated/components/Component13';
import Component14 from '@/generated/components/Component14';
import Component15 from '@/generated/components/Component15';
import Component16 from '@/generated/components/Component16';
import Component17 from '@/generated/components/Component17';
import Component18 from '@/generated/components/Component18';
import Component19 from '@/generated/components/Component19';
import Component20 from '@/generated/components/Component20';

const sampleData = {
  id: 'page-0',
  name: 'Benchmark Page 0',
  values: [1, 2, 3, 4, 5],
  nested: { level1: { level2: { level3: { value: 'deep-0' } } } },
};

export default function BenchPage0() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Benchmark Page 0</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component0, Component1, Component2, Component3, Component4, Component5, Component6, Component7, Component8, Component9, Component10, Component11, Component12, Component13, Component14, Component15, Component16, Component17, Component18, Component19, Component20].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
