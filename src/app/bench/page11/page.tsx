import Component286 from '@/generated/components/Component286';
import Component287 from '@/generated/components/Component287';
import Component288 from '@/generated/components/Component288';
import Component289 from '@/generated/components/Component289';
import Component290 from '@/generated/components/Component290';
import Component291 from '@/generated/components/Component291';
import Component292 from '@/generated/components/Component292';
import Component293 from '@/generated/components/Component293';
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

const sampleData = {
  id: 'page-11',
  name: 'Benchmark Page 11',
  values: [1, 2, 3, 4, 5],
  nested: { level1: { level2: { level3: { value: 'deep-11' } } } },
};

export default function BenchPage11() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Benchmark Page 11</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component286, Component287, Component288, Component289, Component290, Component291, Component292, Component293, Component294, Component295, Component296, Component297, Component298, Component299, Component300, Component301, Component302, Component303, Component304, Component305, Component306, Component307, Component308, Component309, Component310, Component311].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
