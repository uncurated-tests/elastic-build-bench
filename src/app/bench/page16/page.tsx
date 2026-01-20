import Component336 from '@/generated/components/Component336';
import Component337 from '@/generated/components/Component337';
import Component338 from '@/generated/components/Component338';
import Component339 from '@/generated/components/Component339';
import Component340 from '@/generated/components/Component340';
import Component341 from '@/generated/components/Component341';
import Component342 from '@/generated/components/Component342';
import Component343 from '@/generated/components/Component343';
import Component344 from '@/generated/components/Component344';
import Component345 from '@/generated/components/Component345';
import Component346 from '@/generated/components/Component346';
import Component347 from '@/generated/components/Component347';
import Component348 from '@/generated/components/Component348';
import Component349 from '@/generated/components/Component349';
import Component350 from '@/generated/components/Component350';
import Component351 from '@/generated/components/Component351';
import Component352 from '@/generated/components/Component352';
import Component353 from '@/generated/components/Component353';
import Component354 from '@/generated/components/Component354';
import Component355 from '@/generated/components/Component355';
import Component356 from '@/generated/components/Component356';

const sampleData = {
  id: 'page-16',
  name: 'Benchmark Page 16',
  values: [1, 2, 3, 4, 5],
  nested: { level1: { level2: { level3: { value: 'deep-16' } } } },
};

export default function BenchPage16() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Benchmark Page 16</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component336, Component337, Component338, Component339, Component340, Component341, Component342, Component343, Component344, Component345, Component346, Component347, Component348, Component349, Component350, Component351, Component352, Component353, Component354, Component355, Component356].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
