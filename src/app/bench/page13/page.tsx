import Component273 from '@/generated/components/Component273';
import Component274 from '@/generated/components/Component274';
import Component275 from '@/generated/components/Component275';
import Component276 from '@/generated/components/Component276';
import Component277 from '@/generated/components/Component277';
import Component278 from '@/generated/components/Component278';
import Component279 from '@/generated/components/Component279';
import Component280 from '@/generated/components/Component280';
import Component281 from '@/generated/components/Component281';
import Component282 from '@/generated/components/Component282';
import Component283 from '@/generated/components/Component283';
import Component284 from '@/generated/components/Component284';
import Component285 from '@/generated/components/Component285';
import Component286 from '@/generated/components/Component286';
import Component287 from '@/generated/components/Component287';
import Component288 from '@/generated/components/Component288';
import Component289 from '@/generated/components/Component289';
import Component290 from '@/generated/components/Component290';
import Component291 from '@/generated/components/Component291';
import Component292 from '@/generated/components/Component292';
import Component293 from '@/generated/components/Component293';

const sampleData = {
  id: 'page-13',
  name: 'Benchmark Page 13',
  values: [1, 2, 3, 4, 5],
  nested: { level1: { level2: { level3: { value: 'deep-13' } } } },
};

export default function BenchPage13() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Benchmark Page 13</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component273, Component274, Component275, Component276, Component277, Component278, Component279, Component280, Component281, Component282, Component283, Component284, Component285, Component286, Component287, Component288, Component289, Component290, Component291, Component292, Component293].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
