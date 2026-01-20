import Component936 from '@/generated/components/Component936';
import Component937 from '@/generated/components/Component937';
import Component938 from '@/generated/components/Component938';
import Component939 from '@/generated/components/Component939';
import Component940 from '@/generated/components/Component940';
import Component941 from '@/generated/components/Component941';
import Component942 from '@/generated/components/Component942';
import Component943 from '@/generated/components/Component943';
import Component944 from '@/generated/components/Component944';
import Component945 from '@/generated/components/Component945';
import Component946 from '@/generated/components/Component946';
import Component947 from '@/generated/components/Component947';
import Component948 from '@/generated/components/Component948';
import Component949 from '@/generated/components/Component949';
import Component950 from '@/generated/components/Component950';
import Component951 from '@/generated/components/Component951';
import Component952 from '@/generated/components/Component952';
import Component953 from '@/generated/components/Component953';
import Component954 from '@/generated/components/Component954';
import Component955 from '@/generated/components/Component955';
import Component956 from '@/generated/components/Component956';
import Component957 from '@/generated/components/Component957';
import Component958 from '@/generated/components/Component958';
import Component959 from '@/generated/components/Component959';
import Component960 from '@/generated/components/Component960';
import Component961 from '@/generated/components/Component961';

const sampleData = {
  id: 'page-36',
  name: 'Benchmark Page 36',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-36',
          computed: 54,
          metadata: { page: 36 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 4.6 },
    },
  },
};

export default function BenchPage36() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 36
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 26 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component936, Component937, Component938, Component939, Component940, Component941, Component942, Component943, Component944, Component945, Component946, Component947, Component948, Component949, Component950, Component951, Component952, Component953, Component954, Component955, Component956, Component957, Component958, Component959, Component960, Component961].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
