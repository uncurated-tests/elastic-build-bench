import Component702 from '@/generated/components/Component702';
import Component703 from '@/generated/components/Component703';
import Component704 from '@/generated/components/Component704';
import Component705 from '@/generated/components/Component705';
import Component706 from '@/generated/components/Component706';
import Component707 from '@/generated/components/Component707';
import Component708 from '@/generated/components/Component708';
import Component709 from '@/generated/components/Component709';
import Component710 from '@/generated/components/Component710';
import Component711 from '@/generated/components/Component711';
import Component712 from '@/generated/components/Component712';
import Component713 from '@/generated/components/Component713';
import Component714 from '@/generated/components/Component714';
import Component715 from '@/generated/components/Component715';
import Component716 from '@/generated/components/Component716';
import Component717 from '@/generated/components/Component717';
import Component718 from '@/generated/components/Component718';
import Component719 from '@/generated/components/Component719';
import Component720 from '@/generated/components/Component720';
import Component721 from '@/generated/components/Component721';
import Component722 from '@/generated/components/Component722';
import Component723 from '@/generated/components/Component723';
import Component724 from '@/generated/components/Component724';
import Component725 from '@/generated/components/Component725';
import Component726 from '@/generated/components/Component726';
import Component727 from '@/generated/components/Component727';

const sampleData = {
  id: 'page-27',
  name: 'Benchmark Page 27',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-27',
          computed: 40.5,
          metadata: { page: 27 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 3.7 },
    },
  },
};

export default function BenchPage27() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 27
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 26 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component702, Component703, Component704, Component705, Component706, Component707, Component708, Component709, Component710, Component711, Component712, Component713, Component714, Component715, Component716, Component717, Component718, Component719, Component720, Component721, Component722, Component723, Component724, Component725, Component726, Component727].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
