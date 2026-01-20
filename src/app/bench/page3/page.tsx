import Component63 from '@/generated/components/Component63';
import Component64 from '@/generated/components/Component64';
import Component65 from '@/generated/components/Component65';
import Component66 from '@/generated/components/Component66';
import Component67 from '@/generated/components/Component67';
import Component68 from '@/generated/components/Component68';
import Component69 from '@/generated/components/Component69';
import Component70 from '@/generated/components/Component70';
import Component71 from '@/generated/components/Component71';
import Component72 from '@/generated/components/Component72';
import Component73 from '@/generated/components/Component73';
import Component74 from '@/generated/components/Component74';
import Component75 from '@/generated/components/Component75';
import Component76 from '@/generated/components/Component76';
import Component77 from '@/generated/components/Component77';
import Component78 from '@/generated/components/Component78';
import Component79 from '@/generated/components/Component79';
import Component80 from '@/generated/components/Component80';
import Component81 from '@/generated/components/Component81';
import Component82 from '@/generated/components/Component82';
import Component83 from '@/generated/components/Component83';

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
        {[Component63, Component64, Component65, Component66, Component67, Component68, Component69, Component70, Component71, Component72, Component73, Component74, Component75, Component76, Component77, Component78, Component79, Component80, Component81, Component82, Component83].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
