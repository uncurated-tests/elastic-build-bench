import Component252 from '@/generated/components/Component252';
import Component253 from '@/generated/components/Component253';
import Component254 from '@/generated/components/Component254';
import Component255 from '@/generated/components/Component255';
import Component256 from '@/generated/components/Component256';
import Component257 from '@/generated/components/Component257';
import Component258 from '@/generated/components/Component258';
import Component259 from '@/generated/components/Component259';
import Component260 from '@/generated/components/Component260';
import Component261 from '@/generated/components/Component261';
import Component262 from '@/generated/components/Component262';
import Component263 from '@/generated/components/Component263';
import Component264 from '@/generated/components/Component264';
import Component265 from '@/generated/components/Component265';
import Component266 from '@/generated/components/Component266';
import Component267 from '@/generated/components/Component267';
import Component268 from '@/generated/components/Component268';
import Component269 from '@/generated/components/Component269';
import Component270 from '@/generated/components/Component270';
import Component271 from '@/generated/components/Component271';
import Component272 from '@/generated/components/Component272';

const sampleData = {
  id: 'page-12',
  name: 'Benchmark Page 12',
  values: [1, 2, 3, 4, 5],
  nested: { level1: { level2: { level3: { value: 'deep-12' } } } },
};

export default function BenchPage12() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Benchmark Page 12</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component252, Component253, Component254, Component255, Component256, Component257, Component258, Component259, Component260, Component261, Component262, Component263, Component264, Component265, Component266, Component267, Component268, Component269, Component270, Component271, Component272].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
