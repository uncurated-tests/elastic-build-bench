import Component780 from '@/generated/components/Component780';
import Component781 from '@/generated/components/Component781';
import Component782 from '@/generated/components/Component782';
import Component783 from '@/generated/components/Component783';
import Component784 from '@/generated/components/Component784';
import Component785 from '@/generated/components/Component785';
import Component786 from '@/generated/components/Component786';
import Component787 from '@/generated/components/Component787';
import Component788 from '@/generated/components/Component788';
import Component789 from '@/generated/components/Component789';
import Component790 from '@/generated/components/Component790';
import Component791 from '@/generated/components/Component791';
import Component792 from '@/generated/components/Component792';
import Component793 from '@/generated/components/Component793';
import Component794 from '@/generated/components/Component794';
import Component795 from '@/generated/components/Component795';
import Component796 from '@/generated/components/Component796';
import Component797 from '@/generated/components/Component797';
import Component798 from '@/generated/components/Component798';
import Component799 from '@/generated/components/Component799';
import Component800 from '@/generated/components/Component800';
import Component801 from '@/generated/components/Component801';
import Component802 from '@/generated/components/Component802';
import Component803 from '@/generated/components/Component803';
import Component804 from '@/generated/components/Component804';
import Component805 from '@/generated/components/Component805';

const sampleData = {
  id: 'page-30',
  name: 'Benchmark Page 30',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-30',
          computed: 45,
          metadata: { page: 30 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 4 },
    },
  },
};

export default function BenchPage30() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 30
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 26 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component780, Component781, Component782, Component783, Component784, Component785, Component786, Component787, Component788, Component789, Component790, Component791, Component792, Component793, Component794, Component795, Component796, Component797, Component798, Component799, Component800, Component801, Component802, Component803, Component804, Component805].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
