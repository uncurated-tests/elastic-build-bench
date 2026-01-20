import Component462 from '@/generated/components/Component462';
import Component463 from '@/generated/components/Component463';
import Component464 from '@/generated/components/Component464';
import Component465 from '@/generated/components/Component465';
import Component466 from '@/generated/components/Component466';
import Component467 from '@/generated/components/Component467';
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

const sampleData = {
  id: 'page-22',
  name: 'Benchmark Page 22',
  values: [1, 2, 3, 4, 5],
  nested: { level1: { level2: { level3: { value: 'deep-22' } } } },
};

export default function BenchPage22() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Benchmark Page 22</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component462, Component463, Component464, Component465, Component466, Component467, Component468, Component469, Component470, Component471, Component472, Component473, Component474, Component475, Component476, Component477, Component478, Component479, Component480, Component481, Component482].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
