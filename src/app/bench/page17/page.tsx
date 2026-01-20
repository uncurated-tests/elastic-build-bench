import Component357 from '@/generated/components/Component357';
import Component358 from '@/generated/components/Component358';
import Component359 from '@/generated/components/Component359';
import Component360 from '@/generated/components/Component360';
import Component361 from '@/generated/components/Component361';
import Component362 from '@/generated/components/Component362';
import Component363 from '@/generated/components/Component363';
import Component364 from '@/generated/components/Component364';
import Component365 from '@/generated/components/Component365';
import Component366 from '@/generated/components/Component366';
import Component367 from '@/generated/components/Component367';
import Component368 from '@/generated/components/Component368';
import Component369 from '@/generated/components/Component369';
import Component370 from '@/generated/components/Component370';
import Component371 from '@/generated/components/Component371';
import Component372 from '@/generated/components/Component372';
import Component373 from '@/generated/components/Component373';
import Component374 from '@/generated/components/Component374';
import Component375 from '@/generated/components/Component375';
import Component376 from '@/generated/components/Component376';
import Component377 from '@/generated/components/Component377';

const sampleData = {
  id: 'page-17',
  name: 'Benchmark Page 17',
  values: [1, 2, 3, 4, 5],
  nested: { level1: { level2: { level3: { value: 'deep-17' } } } },
};

export default function BenchPage17() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Benchmark Page 17</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component357, Component358, Component359, Component360, Component361, Component362, Component363, Component364, Component365, Component366, Component367, Component368, Component369, Component370, Component371, Component372, Component373, Component374, Component375, Component376, Component377].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
