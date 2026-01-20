import Component546 from '@/generated/components/Component546';
import Component547 from '@/generated/components/Component547';
import Component548 from '@/generated/components/Component548';
import Component549 from '@/generated/components/Component549';
import Component550 from '@/generated/components/Component550';
import Component551 from '@/generated/components/Component551';
import Component552 from '@/generated/components/Component552';
import Component553 from '@/generated/components/Component553';
import Component554 from '@/generated/components/Component554';
import Component555 from '@/generated/components/Component555';
import Component556 from '@/generated/components/Component556';
import Component557 from '@/generated/components/Component557';
import Component558 from '@/generated/components/Component558';
import Component559 from '@/generated/components/Component559';
import Component560 from '@/generated/components/Component560';
import Component561 from '@/generated/components/Component561';
import Component562 from '@/generated/components/Component562';
import Component563 from '@/generated/components/Component563';
import Component564 from '@/generated/components/Component564';
import Component565 from '@/generated/components/Component565';
import Component566 from '@/generated/components/Component566';

const sampleData = {
  id: 'page-26',
  name: 'Benchmark Page 26',
  values: [1, 2, 3, 4, 5],
  nested: { level1: { level2: { level3: { value: 'deep-26' } } } },
};

export default function BenchPage26() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Benchmark Page 26</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component546, Component547, Component548, Component549, Component550, Component551, Component552, Component553, Component554, Component555, Component556, Component557, Component558, Component559, Component560, Component561, Component562, Component563, Component564, Component565, Component566].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
