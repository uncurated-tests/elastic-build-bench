import Component42 from '@/generated/components/Component42';
import Component43 from '@/generated/components/Component43';
import Component44 from '@/generated/components/Component44';
import Component45 from '@/generated/components/Component45';
import Component46 from '@/generated/components/Component46';
import Component47 from '@/generated/components/Component47';
import Component48 from '@/generated/components/Component48';
import Component49 from '@/generated/components/Component49';
import Component50 from '@/generated/components/Component50';
import Component51 from '@/generated/components/Component51';
import Component52 from '@/generated/components/Component52';
import Component53 from '@/generated/components/Component53';
import Component54 from '@/generated/components/Component54';
import Component55 from '@/generated/components/Component55';
import Component56 from '@/generated/components/Component56';
import Component57 from '@/generated/components/Component57';
import Component58 from '@/generated/components/Component58';
import Component59 from '@/generated/components/Component59';
import Component60 from '@/generated/components/Component60';
import Component61 from '@/generated/components/Component61';
import Component62 from '@/generated/components/Component62';

const sampleData = {
  id: 'page-2',
  name: 'Benchmark Page 2',
  values: [1, 2, 3, 4, 5],
  nested: { level1: { level2: { level3: { value: 'deep-2' } } } },
};

export default function BenchPage2() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Benchmark Page 2</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component42, Component43, Component44, Component45, Component46, Component47, Component48, Component49, Component50, Component51, Component52, Component53, Component54, Component55, Component56, Component57, Component58, Component59, Component60, Component61, Component62].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
