import Component416 from '@/generated/components/Component416';
import Component417 from '@/generated/components/Component417';
import Component418 from '@/generated/components/Component418';
import Component419 from '@/generated/components/Component419';
import Component420 from '@/generated/components/Component420';
import Component421 from '@/generated/components/Component421';
import Component422 from '@/generated/components/Component422';
import Component423 from '@/generated/components/Component423';
import Component424 from '@/generated/components/Component424';
import Component425 from '@/generated/components/Component425';
import Component426 from '@/generated/components/Component426';
import Component427 from '@/generated/components/Component427';
import Component428 from '@/generated/components/Component428';
import Component429 from '@/generated/components/Component429';
import Component430 from '@/generated/components/Component430';
import Component431 from '@/generated/components/Component431';
import Component432 from '@/generated/components/Component432';
import Component433 from '@/generated/components/Component433';
import Component434 from '@/generated/components/Component434';
import Component435 from '@/generated/components/Component435';
import Component436 from '@/generated/components/Component436';
import Component437 from '@/generated/components/Component437';
import Component438 from '@/generated/components/Component438';
import Component439 from '@/generated/components/Component439';
import Component440 from '@/generated/components/Component440';
import Component441 from '@/generated/components/Component441';

const sampleData = {
  id: 'page-16',
  name: 'Benchmark Page 16',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-16',
          computed: 24,
          metadata: { page: 16 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 2.6 },
    },
  },
};

export default function BenchPage16() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 16
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 26 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component416, Component417, Component418, Component419, Component420, Component421, Component422, Component423, Component424, Component425, Component426, Component427, Component428, Component429, Component430, Component431, Component432, Component433, Component434, Component435, Component436, Component437, Component438, Component439, Component440, Component441].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
