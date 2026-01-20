import Component1008 from '@/generated/components/Component1008';
import Component1009 from '@/generated/components/Component1009';
import Component1010 from '@/generated/components/Component1010';
import Component1011 from '@/generated/components/Component1011';
import Component1012 from '@/generated/components/Component1012';
import Component1013 from '@/generated/components/Component1013';
import Component1014 from '@/generated/components/Component1014';
import Component1015 from '@/generated/components/Component1015';
import Component1016 from '@/generated/components/Component1016';
import Component1017 from '@/generated/components/Component1017';
import Component1018 from '@/generated/components/Component1018';
import Component1019 from '@/generated/components/Component1019';
import Component1020 from '@/generated/components/Component1020';
import Component1021 from '@/generated/components/Component1021';
import Component1022 from '@/generated/components/Component1022';
import Component1023 from '@/generated/components/Component1023';
import Component1024 from '@/generated/components/Component1024';
import Component1025 from '@/generated/components/Component1025';
import Component1026 from '@/generated/components/Component1026';
import Component1027 from '@/generated/components/Component1027';
import Component1028 from '@/generated/components/Component1028';

const sampleData = {
  id: 'page-48',
  name: 'Benchmark Page 48',
  values: [1, 2, 3, 4, 5],
  nested: { level1: { level2: { level3: { value: 'deep-48' } } } },
};

export default function BenchPage48() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Benchmark Page 48</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component1008, Component1009, Component1010, Component1011, Component1012, Component1013, Component1014, Component1015, Component1016, Component1017, Component1018, Component1019, Component1020, Component1021, Component1022, Component1023, Component1024, Component1025, Component1026, Component1027, Component1028].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
