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
import Component147 from '@/generated/components/Component147';
import Component148 from '@/generated/components/Component148';
import Component149 from '@/generated/components/Component149';
import Component150 from '@/generated/components/Component150';
import Component151 from '@/generated/components/Component151';
import Component152 from '@/generated/components/Component152';
import Component153 from '@/generated/components/Component153';
import Component154 from '@/generated/components/Component154';
import Component155 from '@/generated/components/Component155';

const sampleData = {
  id: 'page-5',
  name: 'Benchmark Page 5',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-5',
          computed: 7.5,
          metadata: { page: 5 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 1.5 },
    },
  },
};

export default function BenchPage5() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 5
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 26 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component130, Component131, Component132, Component133, Component134, Component135, Component136, Component137, Component138, Component139, Component140, Component141, Component142, Component143, Component144, Component145, Component146, Component147, Component148, Component149, Component150, Component151, Component152, Component153, Component154, Component155].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
