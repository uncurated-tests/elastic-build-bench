import Component126 from '@/generated/components/Component126';
import Component127 from '@/generated/components/Component127';
import Component128 from '@/generated/components/Component128';
import Component129 from '@/generated/components/Component129';
import Component130 from '@/generated/components/Component130';
import Component131 from '@/generated/components/Component131';
import Component132 from '@/generated/components/Component132';
import Component133 from '@/generated/components/Component133';
import Component134 from '@/generated/components/Component134';
import Component135 from '@/generated/components/Component135';
import Component136 from '@/generated/components/Component136';
import Component137 from '@/generated/components/Component137';
import Component138 from '@/generated/components/Component138';
import Component139 from '@/generated/components/Component139';
import Component140 from '@/generated/components/Component140';
import Component141 from '@/generated/components/Component141';
import Component142 from '@/generated/components/Component142';
import Component143 from '@/generated/components/Component143';
import Component144 from '@/generated/components/Component144';
import Component145 from '@/generated/components/Component145';
import Component146 from '@/generated/components/Component146';

const sampleData = {
  id: 'page-6',
  name: 'Benchmark Page 6',
  values: [1, 2, 3, 4, 5],
  nested: { level1: { level2: { level3: { value: 'deep-6' } } } },
};

export default function BenchPage6() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Benchmark Page 6</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component126, Component127, Component128, Component129, Component130, Component131, Component132, Component133, Component134, Component135, Component136, Component137, Component138, Component139, Component140, Component141, Component142, Component143, Component144, Component145, Component146].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
