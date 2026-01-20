import Component26 from '@/generated/components/Component26';
import Component27 from '@/generated/components/Component27';
import Component28 from '@/generated/components/Component28';
import Component29 from '@/generated/components/Component29';
import Component30 from '@/generated/components/Component30';
import Component31 from '@/generated/components/Component31';
import Component32 from '@/generated/components/Component32';
import Component33 from '@/generated/components/Component33';
import Component34 from '@/generated/components/Component34';
import Component35 from '@/generated/components/Component35';
import Component36 from '@/generated/components/Component36';
import Component37 from '@/generated/components/Component37';
import Component38 from '@/generated/components/Component38';
import Component39 from '@/generated/components/Component39';
import Component40 from '@/generated/components/Component40';
import Component41 from '@/generated/components/Component41';
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

const sampleData = {
  id: 'page-1',
  name: 'Benchmark Page 1',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-1',
          computed: 1.5,
          metadata: { page: 1 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 1.1 },
    },
  },
};

export default function BenchPage1() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 1
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 26 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component26, Component27, Component28, Component29, Component30, Component31, Component32, Component33, Component34, Component35, Component36, Component37, Component38, Component39, Component40, Component41, Component42, Component43, Component44, Component45, Component46, Component47, Component48, Component49, Component50, Component51].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
