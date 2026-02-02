import Component468 from '@/generated/components/Component468';
import Component469 from '@/generated/components/Component469';
import Component470 from '@/generated/components/Component470';
import Component471 from '@/generated/components/Component471';
import Component472 from '@/generated/components/Component472';
import Component473 from '@/generated/components/Component473';
import Component474 from '@/generated/components/Component474';
import Component475 from '@/generated/components/Component475';
import Component476 from '@/generated/components/Component476';
import Component477 from '@/generated/components/Component477';
import Component478 from '@/generated/components/Component478';
import Component479 from '@/generated/components/Component479';
import Component480 from '@/generated/components/Component480';
import Component481 from '@/generated/components/Component481';
import Component482 from '@/generated/components/Component482';
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

const sampleData = {
  id: 'page-18',
  name: 'Benchmark Page 18',
  values: [1, 2, 3, 4, 5],
  nested: { level1: { level2: { level3: { value: 'deep-18' } } } },
};

export default function BenchPage18() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Benchmark Page 18</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component468, Component469, Component470, Component471, Component472, Component473, Component474, Component475, Component476, Component477, Component478, Component479, Component480, Component481, Component482, Component483, Component484, Component485, Component486, Component487, Component488, Component489, Component490, Component491, Component492, Component493].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
