import Component483 from '@/generated/components/Component483';
import Component484 from '@/generated/components/Component484';
import Component485 from '@/generated/components/Component485';
import Component486 from '@/generated/components/Component486';
import Component487 from '@/generated/components/Component487';
import Component488 from '@/generated/components/Component488';
import Component489 from '@/generated/components/Component489';
import Component490 from '@/generated/components/Component490';
import Component491 from '@/generated/components/Component491';
import Component492 from '@/generated/components/Component492';
import Component493 from '@/generated/components/Component493';
import Component494 from '@/generated/components/Component494';
import Component495 from '@/generated/components/Component495';
import Component496 from '@/generated/components/Component496';
import Component497 from '@/generated/components/Component497';
import Component498 from '@/generated/components/Component498';
import Component499 from '@/generated/components/Component499';
import Component500 from '@/generated/components/Component500';
import Component501 from '@/generated/components/Component501';
import Component502 from '@/generated/components/Component502';
import Component503 from '@/generated/components/Component503';

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
        {[Component483, Component484, Component485, Component486, Component487, Component488, Component489, Component490, Component491, Component492, Component493, Component494, Component495, Component496, Component497, Component498, Component499, Component500, Component501, Component502, Component503].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
