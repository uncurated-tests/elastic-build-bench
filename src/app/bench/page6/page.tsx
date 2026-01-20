import Component156 from '@/generated/components/Component156';
import Component157 from '@/generated/components/Component157';
import Component158 from '@/generated/components/Component158';
import Component159 from '@/generated/components/Component159';
import Component160 from '@/generated/components/Component160';
import Component161 from '@/generated/components/Component161';
import Component162 from '@/generated/components/Component162';
import Component163 from '@/generated/components/Component163';
import Component164 from '@/generated/components/Component164';
import Component165 from '@/generated/components/Component165';
import Component166 from '@/generated/components/Component166';
import Component167 from '@/generated/components/Component167';
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

const sampleData = {
  id: 'page-6',
  name: 'Benchmark Page 6',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-6',
          computed: 9,
          metadata: { page: 6 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 1.6 },
    },
  },
};

export default function BenchPage6() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 6
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 26 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component156, Component157, Component158, Component159, Component160, Component161, Component162, Component163, Component164, Component165, Component166, Component167, Component168, Component169, Component170, Component171, Component172, Component173, Component174, Component175, Component176, Component177, Component178, Component179, Component180, Component181].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
