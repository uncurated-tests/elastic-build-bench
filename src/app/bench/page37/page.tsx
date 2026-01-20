import Component962 from '@/generated/components/Component962';
import Component963 from '@/generated/components/Component963';
import Component964 from '@/generated/components/Component964';
import Component965 from '@/generated/components/Component965';
import Component966 from '@/generated/components/Component966';
import Component967 from '@/generated/components/Component967';
import Component968 from '@/generated/components/Component968';
import Component969 from '@/generated/components/Component969';
import Component970 from '@/generated/components/Component970';
import Component971 from '@/generated/components/Component971';
import Component972 from '@/generated/components/Component972';
import Component973 from '@/generated/components/Component973';
import Component974 from '@/generated/components/Component974';
import Component975 from '@/generated/components/Component975';
import Component976 from '@/generated/components/Component976';
import Component977 from '@/generated/components/Component977';
import Component978 from '@/generated/components/Component978';
import Component979 from '@/generated/components/Component979';
import Component980 from '@/generated/components/Component980';
import Component981 from '@/generated/components/Component981';
import Component982 from '@/generated/components/Component982';
import Component983 from '@/generated/components/Component983';
import Component984 from '@/generated/components/Component984';
import Component985 from '@/generated/components/Component985';
import Component986 from '@/generated/components/Component986';
import Component987 from '@/generated/components/Component987';

const sampleData = {
  id: 'page-37',
  name: 'Benchmark Page 37',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-37',
          computed: 55.5,
          metadata: { page: 37 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 4.7 },
    },
  },
};

export default function BenchPage37() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 37
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 26 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component962, Component963, Component964, Component965, Component966, Component967, Component968, Component969, Component970, Component971, Component972, Component973, Component974, Component975, Component976, Component977, Component978, Component979, Component980, Component981, Component982, Component983, Component984, Component985, Component986, Component987].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
