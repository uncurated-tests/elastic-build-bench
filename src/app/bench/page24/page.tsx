import Component504 from '@/generated/components/Component504';
import Component505 from '@/generated/components/Component505';
import Component506 from '@/generated/components/Component506';
import Component507 from '@/generated/components/Component507';
import Component508 from '@/generated/components/Component508';
import Component509 from '@/generated/components/Component509';
import Component510 from '@/generated/components/Component510';
import Component511 from '@/generated/components/Component511';
import Component512 from '@/generated/components/Component512';
import Component513 from '@/generated/components/Component513';
import Component514 from '@/generated/components/Component514';
import Component515 from '@/generated/components/Component515';
import Component516 from '@/generated/components/Component516';
import Component517 from '@/generated/components/Component517';
import Component518 from '@/generated/components/Component518';
import Component519 from '@/generated/components/Component519';
import Component520 from '@/generated/components/Component520';
import Component521 from '@/generated/components/Component521';
import Component522 from '@/generated/components/Component522';
import Component523 from '@/generated/components/Component523';
import Component524 from '@/generated/components/Component524';

const sampleData = {
  id: 'page-24',
  name: 'Benchmark Page 24',
  values: [1, 2, 3, 4, 5],
  nested: { level1: { level2: { level3: { value: 'deep-24' } } } },
};

export default function BenchPage24() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Benchmark Page 24</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component504, Component505, Component506, Component507, Component508, Component509, Component510, Component511, Component512, Component513, Component514, Component515, Component516, Component517, Component518, Component519, Component520, Component521, Component522, Component523, Component524].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
