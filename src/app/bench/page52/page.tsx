import Component1352 from '@/generated/components/Component1352';
import Component1353 from '@/generated/components/Component1353';
import Component1354 from '@/generated/components/Component1354';
import Component1355 from '@/generated/components/Component1355';
import Component1356 from '@/generated/components/Component1356';
import Component1357 from '@/generated/components/Component1357';
import Component1358 from '@/generated/components/Component1358';
import Component1359 from '@/generated/components/Component1359';
import Component1360 from '@/generated/components/Component1360';
import Component1361 from '@/generated/components/Component1361';
import Component1362 from '@/generated/components/Component1362';
import Component1363 from '@/generated/components/Component1363';
import Component1364 from '@/generated/components/Component1364';
import Component1365 from '@/generated/components/Component1365';
import Component1366 from '@/generated/components/Component1366';
import Component1367 from '@/generated/components/Component1367';
import Component1368 from '@/generated/components/Component1368';
import Component1369 from '@/generated/components/Component1369';
import Component1370 from '@/generated/components/Component1370';
import Component1371 from '@/generated/components/Component1371';
import Component1372 from '@/generated/components/Component1372';
import Component1373 from '@/generated/components/Component1373';
import Component1374 from '@/generated/components/Component1374';
import Component1375 from '@/generated/components/Component1375';
import Component1376 from '@/generated/components/Component1376';
import Component1377 from '@/generated/components/Component1377';

const sampleData = {
  id: 'page-52',
  name: 'Benchmark Page 52',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-52',
          computed: 78,
          metadata: { page: 52 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 6.2 },
    },
  },
};

export default function BenchPage52() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 52
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 26 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component1352, Component1353, Component1354, Component1355, Component1356, Component1357, Component1358, Component1359, Component1360, Component1361, Component1362, Component1363, Component1364, Component1365, Component1366, Component1367, Component1368, Component1369, Component1370, Component1371, Component1372, Component1373, Component1374, Component1375, Component1376, Component1377].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
