import Component231 from '@/generated/components/Component231';
import Component232 from '@/generated/components/Component232';
import Component233 from '@/generated/components/Component233';
import Component234 from '@/generated/components/Component234';
import Component235 from '@/generated/components/Component235';
import Component236 from '@/generated/components/Component236';
import Component237 from '@/generated/components/Component237';
import Component238 from '@/generated/components/Component238';
import Component239 from '@/generated/components/Component239';
import Component240 from '@/generated/components/Component240';
import Component241 from '@/generated/components/Component241';

const sampleData = {
  id: 'page-21',
  name: 'Benchmark Page 21',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-21',
          computed: 31.5,
          metadata: { page: 21 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 3.1 },
    },
  },
};

export default function BenchPage21() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 21
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 11 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component231, Component232, Component233, Component234, Component235, Component236, Component237, Component238, Component239, Component240, Component241].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
