import Component234 from '@/generated/components/Component234';
import Component235 from '@/generated/components/Component235';
import Component236 from '@/generated/components/Component236';
import Component237 from '@/generated/components/Component237';
import Component238 from '@/generated/components/Component238';
import Component239 from '@/generated/components/Component239';
import Component240 from '@/generated/components/Component240';
import Component241 from '@/generated/components/Component241';
import Component242 from '@/generated/components/Component242';
import Component243 from '@/generated/components/Component243';
import Component244 from '@/generated/components/Component244';
import Component245 from '@/generated/components/Component245';
import Component246 from '@/generated/components/Component246';
import Component247 from '@/generated/components/Component247';
import Component248 from '@/generated/components/Component248';
import Component249 from '@/generated/components/Component249';
import Component250 from '@/generated/components/Component250';
import Component251 from '@/generated/components/Component251';
import Component252 from '@/generated/components/Component252';
import Component253 from '@/generated/components/Component253';
import Component254 from '@/generated/components/Component254';
import Component255 from '@/generated/components/Component255';
import Component256 from '@/generated/components/Component256';
import Component257 from '@/generated/components/Component257';
import Component258 from '@/generated/components/Component258';
import Component259 from '@/generated/components/Component259';

const sampleData = {
  id: 'page-9',
  name: 'Benchmark Page 9',
  values: [1, 2, 3, 4, 5],
  nested: { level1: { level2: { level3: { value: 'deep-9' } } } },
};

export default function BenchPage9() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Benchmark Page 9</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component234, Component235, Component236, Component237, Component238, Component239, Component240, Component241, Component242, Component243, Component244, Component245, Component246, Component247, Component248, Component249, Component250, Component251, Component252, Component253, Component254, Component255, Component256, Component257, Component258, Component259].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
