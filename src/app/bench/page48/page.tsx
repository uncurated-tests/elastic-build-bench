import Component1248 from '@/generated/components/Component1248';
import Component1249 from '@/generated/components/Component1249';
import Component1250 from '@/generated/components/Component1250';
import Component1251 from '@/generated/components/Component1251';
import Component1252 from '@/generated/components/Component1252';
import Component1253 from '@/generated/components/Component1253';
import Component1254 from '@/generated/components/Component1254';
import Component1255 from '@/generated/components/Component1255';
import Component1256 from '@/generated/components/Component1256';
import Component1257 from '@/generated/components/Component1257';
import Component1258 from '@/generated/components/Component1258';
import Component1259 from '@/generated/components/Component1259';
import Component1260 from '@/generated/components/Component1260';
import Component1261 from '@/generated/components/Component1261';
import Component1262 from '@/generated/components/Component1262';
import Component1263 from '@/generated/components/Component1263';
import Component1264 from '@/generated/components/Component1264';
import Component1265 from '@/generated/components/Component1265';
import Component1266 from '@/generated/components/Component1266';
import Component1267 from '@/generated/components/Component1267';
import Component1268 from '@/generated/components/Component1268';
import Component1269 from '@/generated/components/Component1269';
import Component1270 from '@/generated/components/Component1270';
import Component1271 from '@/generated/components/Component1271';
import Component1272 from '@/generated/components/Component1272';
import Component1273 from '@/generated/components/Component1273';

const sampleData = {
  id: 'page-48',
  name: 'Benchmark Page 48',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-48',
          computed: 72,
          metadata: { page: 48 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 5.800000000000001 },
    },
  },
};

export default function BenchPage48() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 48
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 26 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component1248, Component1249, Component1250, Component1251, Component1252, Component1253, Component1254, Component1255, Component1256, Component1257, Component1258, Component1259, Component1260, Component1261, Component1262, Component1263, Component1264, Component1265, Component1266, Component1267, Component1268, Component1269, Component1270, Component1271, Component1272, Component1273].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
