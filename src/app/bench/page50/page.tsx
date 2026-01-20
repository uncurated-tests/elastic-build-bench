import Component1300 from '@/generated/components/Component1300';
import Component1301 from '@/generated/components/Component1301';
import Component1302 from '@/generated/components/Component1302';
import Component1303 from '@/generated/components/Component1303';
import Component1304 from '@/generated/components/Component1304';
import Component1305 from '@/generated/components/Component1305';
import Component1306 from '@/generated/components/Component1306';
import Component1307 from '@/generated/components/Component1307';
import Component1308 from '@/generated/components/Component1308';
import Component1309 from '@/generated/components/Component1309';
import Component1310 from '@/generated/components/Component1310';
import Component1311 from '@/generated/components/Component1311';
import Component1312 from '@/generated/components/Component1312';
import Component1313 from '@/generated/components/Component1313';
import Component1314 from '@/generated/components/Component1314';
import Component1315 from '@/generated/components/Component1315';
import Component1316 from '@/generated/components/Component1316';
import Component1317 from '@/generated/components/Component1317';
import Component1318 from '@/generated/components/Component1318';
import Component1319 from '@/generated/components/Component1319';
import Component1320 from '@/generated/components/Component1320';
import Component1321 from '@/generated/components/Component1321';
import Component1322 from '@/generated/components/Component1322';
import Component1323 from '@/generated/components/Component1323';
import Component1324 from '@/generated/components/Component1324';
import Component1325 from '@/generated/components/Component1325';

const sampleData = {
  id: 'page-50',
  name: 'Benchmark Page 50',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-50',
          computed: 75,
          metadata: { page: 50 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 6 },
    },
  },
};

export default function BenchPage50() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 50
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 26 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component1300, Component1301, Component1302, Component1303, Component1304, Component1305, Component1306, Component1307, Component1308, Component1309, Component1310, Component1311, Component1312, Component1313, Component1314, Component1315, Component1316, Component1317, Component1318, Component1319, Component1320, Component1321, Component1322, Component1323, Component1324, Component1325].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
