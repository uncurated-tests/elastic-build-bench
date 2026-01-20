import Component210 from '@/generated/components/Component210';
import Component211 from '@/generated/components/Component211';
import Component212 from '@/generated/components/Component212';
import Component213 from '@/generated/components/Component213';
import Component214 from '@/generated/components/Component214';
import Component215 from '@/generated/components/Component215';
import Component216 from '@/generated/components/Component216';
import Component217 from '@/generated/components/Component217';
import Component218 from '@/generated/components/Component218';
import Component219 from '@/generated/components/Component219';
import Component220 from '@/generated/components/Component220';
import Component221 from '@/generated/components/Component221';
import Component222 from '@/generated/components/Component222';
import Component223 from '@/generated/components/Component223';
import Component224 from '@/generated/components/Component224';
import Component225 from '@/generated/components/Component225';
import Component226 from '@/generated/components/Component226';
import Component227 from '@/generated/components/Component227';
import Component228 from '@/generated/components/Component228';
import Component229 from '@/generated/components/Component229';
import Component230 from '@/generated/components/Component230';

const sampleData = {
  id: 'page-10',
  name: 'Benchmark Page 10',
  values: [1, 2, 3, 4, 5],
  nested: { level1: { level2: { level3: { value: 'deep-10' } } } },
};

export default function BenchPage10() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Benchmark Page 10</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component210, Component211, Component212, Component213, Component214, Component215, Component216, Component217, Component218, Component219, Component220, Component221, Component222, Component223, Component224, Component225, Component226, Component227, Component228, Component229, Component230].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
