import Component104 from '@/generated/components/Component104';
import Component105 from '@/generated/components/Component105';
import Component106 from '@/generated/components/Component106';
import Component107 from '@/generated/components/Component107';
import Component108 from '@/generated/components/Component108';
import Component109 from '@/generated/components/Component109';
import Component110 from '@/generated/components/Component110';
import Component111 from '@/generated/components/Component111';
import Component112 from '@/generated/components/Component112';
import Component113 from '@/generated/components/Component113';
import Component114 from '@/generated/components/Component114';
import Component115 from '@/generated/components/Component115';
import Component116 from '@/generated/components/Component116';
import Component117 from '@/generated/components/Component117';
import Component118 from '@/generated/components/Component118';
import Component119 from '@/generated/components/Component119';
import Component120 from '@/generated/components/Component120';
import Component121 from '@/generated/components/Component121';
import Component122 from '@/generated/components/Component122';
import Component123 from '@/generated/components/Component123';
import Component124 from '@/generated/components/Component124';
import Component125 from '@/generated/components/Component125';
import Component126 from '@/generated/components/Component126';
import Component127 from '@/generated/components/Component127';
import Component128 from '@/generated/components/Component128';
import Component129 from '@/generated/components/Component129';

const sampleData = {
  id: 'page-4',
  name: 'Benchmark Page 4',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-4',
          computed: 6,
          metadata: { page: 4 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 1.4 },
    },
  },
};

export default function BenchPage4() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 4
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 26 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component104, Component105, Component106, Component107, Component108, Component109, Component110, Component111, Component112, Component113, Component114, Component115, Component116, Component117, Component118, Component119, Component120, Component121, Component122, Component123, Component124, Component125, Component126, Component127, Component128, Component129].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
