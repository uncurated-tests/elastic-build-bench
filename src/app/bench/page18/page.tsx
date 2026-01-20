import Component378 from '@/generated/components/Component378';
import Component379 from '@/generated/components/Component379';
import Component380 from '@/generated/components/Component380';
import Component381 from '@/generated/components/Component381';
import Component382 from '@/generated/components/Component382';
import Component383 from '@/generated/components/Component383';
import Component384 from '@/generated/components/Component384';
import Component385 from '@/generated/components/Component385';
import Component386 from '@/generated/components/Component386';
import Component387 from '@/generated/components/Component387';
import Component388 from '@/generated/components/Component388';
import Component389 from '@/generated/components/Component389';
import Component390 from '@/generated/components/Component390';
import Component391 from '@/generated/components/Component391';
import Component392 from '@/generated/components/Component392';
import Component393 from '@/generated/components/Component393';
import Component394 from '@/generated/components/Component394';
import Component395 from '@/generated/components/Component395';
import Component396 from '@/generated/components/Component396';
import Component397 from '@/generated/components/Component397';
import Component398 from '@/generated/components/Component398';

const sampleData = {
  id: 'page-18',
  name: 'Benchmark Page 18',
  values: [1, 2, 3, 4, 5],
  nested: { level1: { level2: { level3: { value: 'deep-18' } } } },
};

export default function BenchPage18() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Benchmark Page 18</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component378, Component379, Component380, Component381, Component382, Component383, Component384, Component385, Component386, Component387, Component388, Component389, Component390, Component391, Component392, Component393, Component394, Component395, Component396, Component397, Component398].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
