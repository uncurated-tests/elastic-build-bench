import Component598 from '@/generated/components/Component598';
import Component599 from '@/generated/components/Component599';
import Component600 from '@/generated/components/Component600';
import Component601 from '@/generated/components/Component601';
import Component602 from '@/generated/components/Component602';
import Component603 from '@/generated/components/Component603';
import Component604 from '@/generated/components/Component604';
import Component605 from '@/generated/components/Component605';
import Component606 from '@/generated/components/Component606';
import Component607 from '@/generated/components/Component607';
import Component608 from '@/generated/components/Component608';
import Component609 from '@/generated/components/Component609';
import Component610 from '@/generated/components/Component610';
import Component611 from '@/generated/components/Component611';
import Component612 from '@/generated/components/Component612';
import Component613 from '@/generated/components/Component613';
import Component614 from '@/generated/components/Component614';
import Component615 from '@/generated/components/Component615';
import Component616 from '@/generated/components/Component616';
import Component617 from '@/generated/components/Component617';
import Component618 from '@/generated/components/Component618';
import Component619 from '@/generated/components/Component619';
import Component620 from '@/generated/components/Component620';
import Component621 from '@/generated/components/Component621';
import Component622 from '@/generated/components/Component622';
import Component623 from '@/generated/components/Component623';

const sampleData = {
  id: 'page-23',
  name: 'Benchmark Page 23',
  values: [1, 2, 3, 4, 5],
  nested: { level1: { level2: { level3: { value: 'deep-23' } } } },
};

export default function BenchPage23() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Benchmark Page 23</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component598, Component599, Component600, Component601, Component602, Component603, Component604, Component605, Component606, Component607, Component608, Component609, Component610, Component611, Component612, Component613, Component614, Component615, Component616, Component617, Component618, Component619, Component620, Component621, Component622, Component623].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
