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
import Component1274 from '@/generated/components/Component1274';
import Component1275 from '@/generated/components/Component1275';
import Component1276 from '@/generated/components/Component1276';
import Component1277 from '@/generated/components/Component1277';
import Component1278 from '@/generated/components/Component1278';
import Component1279 from '@/generated/components/Component1279';
import Component1280 from '@/generated/components/Component1280';

const sampleData = {
  id: 'page-60',
  name: 'Benchmark Page 60',
  values: [1, 2, 3, 4, 5],
  nested: { level1: { level2: { level3: { value: 'deep-60' } } } },
};

export default function BenchPage60() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Benchmark Page 60</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component1260, Component1261, Component1262, Component1263, Component1264, Component1265, Component1266, Component1267, Component1268, Component1269, Component1270, Component1271, Component1272, Component1273, Component1274, Component1275, Component1276, Component1277, Component1278, Component1279, Component1280].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
