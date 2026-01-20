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

const sampleData = {
  id: 'page-28',
  name: 'Benchmark Page 28',
  values: [1, 2, 3, 4, 5],
  nested: { level1: { level2: { level3: { value: 'deep-28' } } } },
};

export default function BenchPage28() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Benchmark Page 28</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component588, Component589, Component590, Component591, Component592, Component593, Component594, Component595, Component596, Component597, Component598, Component599, Component600, Component601, Component602, Component603, Component604, Component605, Component606, Component607, Component608].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
