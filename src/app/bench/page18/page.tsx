import Component198 from '@/generated/components/Component198';
import Component199 from '@/generated/components/Component199';
import Component200 from '@/generated/components/Component200';
import Component201 from '@/generated/components/Component201';
import Component202 from '@/generated/components/Component202';
import Component203 from '@/generated/components/Component203';
import Component204 from '@/generated/components/Component204';
import Component205 from '@/generated/components/Component205';
import Component206 from '@/generated/components/Component206';
import Component207 from '@/generated/components/Component207';
import Component208 from '@/generated/components/Component208';

const sampleData = {
  id: 'page-18',
  name: 'Benchmark Page 18',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-18',
          computed: 27,
          metadata: { page: 18 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 2.8 },
    },
  },
};

export default function BenchPage18() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 18
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 11 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component198, Component199, Component200, Component201, Component202, Component203, Component204, Component205, Component206, Component207, Component208].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
