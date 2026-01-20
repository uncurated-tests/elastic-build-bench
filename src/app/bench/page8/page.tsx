import Component168 from '@/generated/components/Component168';
import Component169 from '@/generated/components/Component169';
import Component170 from '@/generated/components/Component170';
import Component171 from '@/generated/components/Component171';
import Component172 from '@/generated/components/Component172';
import Component173 from '@/generated/components/Component173';
import Component174 from '@/generated/components/Component174';
import Component175 from '@/generated/components/Component175';
import Component176 from '@/generated/components/Component176';
import Component177 from '@/generated/components/Component177';
import Component178 from '@/generated/components/Component178';
import Component179 from '@/generated/components/Component179';
import Component180 from '@/generated/components/Component180';
import Component181 from '@/generated/components/Component181';
import Component182 from '@/generated/components/Component182';
import Component183 from '@/generated/components/Component183';
import Component184 from '@/generated/components/Component184';
import Component185 from '@/generated/components/Component185';
import Component186 from '@/generated/components/Component186';
import Component187 from '@/generated/components/Component187';
import Component188 from '@/generated/components/Component188';

const sampleData = {
  id: 'page-8',
  name: 'Benchmark Page 8',
  values: [1, 2, 3, 4, 5],
  nested: { level1: { level2: { level3: { value: 'deep-8' } } } },
};

export default function BenchPage8() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Benchmark Page 8</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component168, Component169, Component170, Component171, Component172, Component173, Component174, Component175, Component176, Component177, Component178, Component179, Component180, Component181, Component182, Component183, Component184, Component185, Component186, Component187, Component188].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
