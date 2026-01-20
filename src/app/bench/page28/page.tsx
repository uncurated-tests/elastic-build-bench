import Component728 from '@/generated/components/Component728';
import Component729 from '@/generated/components/Component729';
import Component730 from '@/generated/components/Component730';
import Component731 from '@/generated/components/Component731';
import Component732 from '@/generated/components/Component732';
import Component733 from '@/generated/components/Component733';
import Component734 from '@/generated/components/Component734';
import Component735 from '@/generated/components/Component735';
import Component736 from '@/generated/components/Component736';
import Component737 from '@/generated/components/Component737';
import Component738 from '@/generated/components/Component738';
import Component739 from '@/generated/components/Component739';
import Component740 from '@/generated/components/Component740';
import Component741 from '@/generated/components/Component741';
import Component742 from '@/generated/components/Component742';
import Component743 from '@/generated/components/Component743';
import Component744 from '@/generated/components/Component744';
import Component745 from '@/generated/components/Component745';
import Component746 from '@/generated/components/Component746';
import Component747 from '@/generated/components/Component747';
import Component748 from '@/generated/components/Component748';
import Component749 from '@/generated/components/Component749';
import Component750 from '@/generated/components/Component750';
import Component751 from '@/generated/components/Component751';
import Component752 from '@/generated/components/Component752';
import Component753 from '@/generated/components/Component753';

const sampleData = {
  id: 'page-28',
  name: 'Benchmark Page 28',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-28',
          computed: 42,
          metadata: { page: 28 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 3.8000000000000003 },
    },
  },
};

export default function BenchPage28() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 28
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 26 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component728, Component729, Component730, Component731, Component732, Component733, Component734, Component735, Component736, Component737, Component738, Component739, Component740, Component741, Component742, Component743, Component744, Component745, Component746, Component747, Component748, Component749, Component750, Component751, Component752, Component753].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
