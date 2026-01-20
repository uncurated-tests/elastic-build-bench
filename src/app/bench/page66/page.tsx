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
import Component1404 from '@/generated/components/Component1404';
import Component1405 from '@/generated/components/Component1405';
import Component1406 from '@/generated/components/Component1406';

const sampleData = {
  id: 'page-66',
  name: 'Benchmark Page 66',
  values: [1, 2, 3, 4, 5],
  nested: { level1: { level2: { level3: { value: 'deep-66' } } } },
};

export default function BenchPage66() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Benchmark Page 66</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component1386, Component1387, Component1388, Component1389, Component1390, Component1391, Component1392, Component1393, Component1394, Component1395, Component1396, Component1397, Component1398, Component1399, Component1400, Component1401, Component1402, Component1403, Component1404, Component1405, Component1406].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
