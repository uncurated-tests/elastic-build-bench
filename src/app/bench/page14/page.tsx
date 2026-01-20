import Component294 from '@/generated/components/Component294';
import Component295 from '@/generated/components/Component295';
import Component296 from '@/generated/components/Component296';
import Component297 from '@/generated/components/Component297';
import Component298 from '@/generated/components/Component298';
import Component299 from '@/generated/components/Component299';
import Component300 from '@/generated/components/Component300';
import Component301 from '@/generated/components/Component301';
import Component302 from '@/generated/components/Component302';
import Component303 from '@/generated/components/Component303';
import Component304 from '@/generated/components/Component304';
import Component305 from '@/generated/components/Component305';
import Component306 from '@/generated/components/Component306';
import Component307 from '@/generated/components/Component307';
import Component308 from '@/generated/components/Component308';
import Component309 from '@/generated/components/Component309';
import Component310 from '@/generated/components/Component310';
import Component311 from '@/generated/components/Component311';
import Component312 from '@/generated/components/Component312';
import Component313 from '@/generated/components/Component313';
import Component314 from '@/generated/components/Component314';

const sampleData = {
  id: 'page-14',
  name: 'Benchmark Page 14',
  values: [1, 2, 3, 4, 5],
  nested: { level1: { level2: { level3: { value: 'deep-14' } } } },
};

export default function BenchPage14() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Benchmark Page 14</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component294, Component295, Component296, Component297, Component298, Component299, Component300, Component301, Component302, Component303, Component304, Component305, Component306, Component307, Component308, Component309, Component310, Component311, Component312, Component313, Component314].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
