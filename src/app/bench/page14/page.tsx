import Component154 from '@/generated/components/Component154';
import Component155 from '@/generated/components/Component155';
import Component156 from '@/generated/components/Component156';
import Component157 from '@/generated/components/Component157';
import Component158 from '@/generated/components/Component158';
import Component159 from '@/generated/components/Component159';
import Component160 from '@/generated/components/Component160';
import Component161 from '@/generated/components/Component161';
import Component162 from '@/generated/components/Component162';
import Component163 from '@/generated/components/Component163';
import Component164 from '@/generated/components/Component164';

const sampleData = {
  id: 'page-14',
  name: 'Benchmark Page 14',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-14',
          computed: 21,
          metadata: { page: 14 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 2.4000000000000004 },
    },
  },
};

export default function BenchPage14() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 14
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 11 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component154, Component155, Component156, Component157, Component158, Component159, Component160, Component161, Component162, Component163, Component164].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
