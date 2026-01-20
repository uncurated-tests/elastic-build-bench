import Component1378 from '@/generated/components/Component1378';
import Component1379 from '@/generated/components/Component1379';
import Component1380 from '@/generated/components/Component1380';
import Component1381 from '@/generated/components/Component1381';
import Component1382 from '@/generated/components/Component1382';
import Component1383 from '@/generated/components/Component1383';
import Component1384 from '@/generated/components/Component1384';
import Component1385 from '@/generated/components/Component1385';
import Component1386 from '@/generated/components/Component1386';
import Component1387 from '@/generated/components/Component1387';
import Component1388 from '@/generated/components/Component1388';
import Component1389 from '@/generated/components/Component1389';
import Component1390 from '@/generated/components/Component1390';
import Component1391 from '@/generated/components/Component1391';
import Component1392 from '@/generated/components/Component1392';
import Component1393 from '@/generated/components/Component1393';
import Component1394 from '@/generated/components/Component1394';
import Component1395 from '@/generated/components/Component1395';
import Component1396 from '@/generated/components/Component1396';
import Component1397 from '@/generated/components/Component1397';
import Component1398 from '@/generated/components/Component1398';
import Component1399 from '@/generated/components/Component1399';
import Component1400 from '@/generated/components/Component1400';
import Component1401 from '@/generated/components/Component1401';
import Component1402 from '@/generated/components/Component1402';
import Component1403 from '@/generated/components/Component1403';

const sampleData = {
  id: 'page-53',
  name: 'Benchmark Page 53',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-53',
          computed: 79.5,
          metadata: { page: 53 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 6.300000000000001 },
    },
  },
};

export default function BenchPage53() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 53
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 26 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component1378, Component1379, Component1380, Component1381, Component1382, Component1383, Component1384, Component1385, Component1386, Component1387, Component1388, Component1389, Component1390, Component1391, Component1392, Component1393, Component1394, Component1395, Component1396, Component1397, Component1398, Component1399, Component1400, Component1401, Component1402, Component1403].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
