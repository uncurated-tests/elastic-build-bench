import Component315 from '@/generated/components/Component315';
import Component316 from '@/generated/components/Component316';
import Component317 from '@/generated/components/Component317';
import Component318 from '@/generated/components/Component318';
import Component319 from '@/generated/components/Component319';
import Component320 from '@/generated/components/Component320';
import Component321 from '@/generated/components/Component321';
import Component322 from '@/generated/components/Component322';
import Component323 from '@/generated/components/Component323';
import Component324 from '@/generated/components/Component324';
import Component325 from '@/generated/components/Component325';
import Component326 from '@/generated/components/Component326';
import Component327 from '@/generated/components/Component327';
import Component328 from '@/generated/components/Component328';
import Component329 from '@/generated/components/Component329';
import Component330 from '@/generated/components/Component330';
import Component331 from '@/generated/components/Component331';
import Component332 from '@/generated/components/Component332';
import Component333 from '@/generated/components/Component333';
import Component334 from '@/generated/components/Component334';
import Component335 from '@/generated/components/Component335';

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
        {[Component315, Component316, Component317, Component318, Component319, Component320, Component321, Component322, Component323, Component324, Component325, Component326, Component327, Component328, Component329, Component330, Component331, Component332, Component333, Component334, Component335].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
