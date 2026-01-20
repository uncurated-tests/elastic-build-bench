import Component1222 from '@/generated/components/Component1222';
import Component1223 from '@/generated/components/Component1223';
import Component1224 from '@/generated/components/Component1224';
import Component1225 from '@/generated/components/Component1225';
import Component1226 from '@/generated/components/Component1226';
import Component1227 from '@/generated/components/Component1227';
import Component1228 from '@/generated/components/Component1228';
import Component1229 from '@/generated/components/Component1229';
import Component1230 from '@/generated/components/Component1230';
import Component1231 from '@/generated/components/Component1231';
import Component1232 from '@/generated/components/Component1232';
import Component1233 from '@/generated/components/Component1233';
import Component1234 from '@/generated/components/Component1234';
import Component1235 from '@/generated/components/Component1235';
import Component1236 from '@/generated/components/Component1236';
import Component1237 from '@/generated/components/Component1237';
import Component1238 from '@/generated/components/Component1238';
import Component1239 from '@/generated/components/Component1239';
import Component1240 from '@/generated/components/Component1240';
import Component1241 from '@/generated/components/Component1241';
import Component1242 from '@/generated/components/Component1242';
import Component1243 from '@/generated/components/Component1243';
import Component1244 from '@/generated/components/Component1244';
import Component1245 from '@/generated/components/Component1245';
import Component1246 from '@/generated/components/Component1246';
import Component1247 from '@/generated/components/Component1247';

const sampleData = {
  id: 'page-47',
  name: 'Benchmark Page 47',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-47',
          computed: 70.5,
          metadata: { page: 47 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 5.7 },
    },
  },
};

export default function BenchPage47() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 47
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 26 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component1222, Component1223, Component1224, Component1225, Component1226, Component1227, Component1228, Component1229, Component1230, Component1231, Component1232, Component1233, Component1234, Component1235, Component1236, Component1237, Component1238, Component1239, Component1240, Component1241, Component1242, Component1243, Component1244, Component1245, Component1246, Component1247].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
