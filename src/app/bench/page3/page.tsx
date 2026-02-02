import Component78 from '@/generated/components/Component78';
import Component79 from '@/generated/components/Component79';
import Component80 from '@/generated/components/Component80';
import Component81 from '@/generated/components/Component81';
import Component82 from '@/generated/components/Component82';
import Component83 from '@/generated/components/Component83';
import Component84 from '@/generated/components/Component84';
import Component85 from '@/generated/components/Component85';
import Component86 from '@/generated/components/Component86';
import Component87 from '@/generated/components/Component87';
import Component88 from '@/generated/components/Component88';
import Component89 from '@/generated/components/Component89';
import Component90 from '@/generated/components/Component90';
import Component91 from '@/generated/components/Component91';
import Component92 from '@/generated/components/Component92';
import Component93 from '@/generated/components/Component93';
import Component94 from '@/generated/components/Component94';
import Component95 from '@/generated/components/Component95';
import Component96 from '@/generated/components/Component96';
import Component97 from '@/generated/components/Component97';
import Component98 from '@/generated/components/Component98';
import Component99 from '@/generated/components/Component99';
import Component100 from '@/generated/components/Component100';
import Component101 from '@/generated/components/Component101';
import Component102 from '@/generated/components/Component102';
import Component103 from '@/generated/components/Component103';

const sampleData = {
  id: 'page-3',
  name: 'Benchmark Page 3',
  values: [1, 2, 3, 4, 5],
  nested: { level1: { level2: { level3: { value: 'deep-3' } } } },
};

export default function BenchPage3() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Benchmark Page 3</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component78, Component79, Component80, Component81, Component82, Component83, Component84, Component85, Component86, Component87, Component88, Component89, Component90, Component91, Component92, Component93, Component94, Component95, Component96, Component97, Component98, Component99, Component100, Component101, Component102, Component103].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
