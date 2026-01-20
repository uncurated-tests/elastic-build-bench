import Component1404 from '@/generated/components/Component1404';
import Component1405 from '@/generated/components/Component1405';
import Component1406 from '@/generated/components/Component1406';
import Component1407 from '@/generated/components/Component1407';
import Component1408 from '@/generated/components/Component1408';
import Component1409 from '@/generated/components/Component1409';
import Component1410 from '@/generated/components/Component1410';
import Component1411 from '@/generated/components/Component1411';
import Component1412 from '@/generated/components/Component1412';
import Component1413 from '@/generated/components/Component1413';
import Component1414 from '@/generated/components/Component1414';
import Component1415 from '@/generated/components/Component1415';
import Component1416 from '@/generated/components/Component1416';
import Component1417 from '@/generated/components/Component1417';
import Component1418 from '@/generated/components/Component1418';
import Component1419 from '@/generated/components/Component1419';
import Component1420 from '@/generated/components/Component1420';
import Component1421 from '@/generated/components/Component1421';
import Component1422 from '@/generated/components/Component1422';
import Component1423 from '@/generated/components/Component1423';
import Component1424 from '@/generated/components/Component1424';
import Component1425 from '@/generated/components/Component1425';
import Component1426 from '@/generated/components/Component1426';
import Component1427 from '@/generated/components/Component1427';
import Component1428 from '@/generated/components/Component1428';
import Component1429 from '@/generated/components/Component1429';

const sampleData = {
  id: 'page-54',
  name: 'Benchmark Page 54',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-54',
          computed: 81,
          metadata: { page: 54 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 6.4 },
    },
  },
};

export default function BenchPage54() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 54
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 26 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component1404, Component1405, Component1406, Component1407, Component1408, Component1409, Component1410, Component1411, Component1412, Component1413, Component1414, Component1415, Component1416, Component1417, Component1418, Component1419, Component1420, Component1421, Component1422, Component1423, Component1424, Component1425, Component1426, Component1427, Component1428, Component1429].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
