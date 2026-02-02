import Component390 from '@/generated/components/Component390';
import Component391 from '@/generated/components/Component391';
import Component392 from '@/generated/components/Component392';
import Component393 from '@/generated/components/Component393';
import Component394 from '@/generated/components/Component394';
import Component395 from '@/generated/components/Component395';
import Component396 from '@/generated/components/Component396';
import Component397 from '@/generated/components/Component397';
import Component398 from '@/generated/components/Component398';
import Component399 from '@/generated/components/Component399';
import Component400 from '@/generated/components/Component400';
import Component401 from '@/generated/components/Component401';
import Component402 from '@/generated/components/Component402';
import Component403 from '@/generated/components/Component403';
import Component404 from '@/generated/components/Component404';
import Component405 from '@/generated/components/Component405';
import Component406 from '@/generated/components/Component406';
import Component407 from '@/generated/components/Component407';
import Component408 from '@/generated/components/Component408';
import Component409 from '@/generated/components/Component409';
import Component410 from '@/generated/components/Component410';
import Component411 from '@/generated/components/Component411';
import Component412 from '@/generated/components/Component412';
import Component413 from '@/generated/components/Component413';
import Component414 from '@/generated/components/Component414';
import Component415 from '@/generated/components/Component415';

const sampleData = {
  id: 'page-15',
  name: 'Benchmark Page 15',
  values: [1, 2, 3, 4, 5],
  nested: { level1: { level2: { level3: { value: 'deep-15' } } } },
};

export default function BenchPage15() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Benchmark Page 15</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component390, Component391, Component392, Component393, Component394, Component395, Component396, Component397, Component398, Component399, Component400, Component401, Component402, Component403, Component404, Component405, Component406, Component407, Component408, Component409, Component410, Component411, Component412, Component413, Component414, Component415].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
