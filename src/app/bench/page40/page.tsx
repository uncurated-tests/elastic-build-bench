import Component840 from '@/generated/components/Component840';
import Component841 from '@/generated/components/Component841';
import Component842 from '@/generated/components/Component842';
import Component843 from '@/generated/components/Component843';
import Component844 from '@/generated/components/Component844';
import Component845 from '@/generated/components/Component845';
import Component846 from '@/generated/components/Component846';
import Component847 from '@/generated/components/Component847';
import Component848 from '@/generated/components/Component848';
import Component849 from '@/generated/components/Component849';
import Component850 from '@/generated/components/Component850';
import Component851 from '@/generated/components/Component851';
import Component852 from '@/generated/components/Component852';
import Component853 from '@/generated/components/Component853';
import Component854 from '@/generated/components/Component854';
import Component855 from '@/generated/components/Component855';
import Component856 from '@/generated/components/Component856';
import Component857 from '@/generated/components/Component857';
import Component858 from '@/generated/components/Component858';
import Component859 from '@/generated/components/Component859';
import Component860 from '@/generated/components/Component860';

const sampleData = {
  id: 'page-40',
  name: 'Benchmark Page 40',
  values: [1, 2, 3, 4, 5],
  nested: { level1: { level2: { level3: { value: 'deep-40' } } } },
};

export default function BenchPage40() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Benchmark Page 40</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component840, Component841, Component842, Component843, Component844, Component845, Component846, Component847, Component848, Component849, Component850, Component851, Component852, Component853, Component854, Component855, Component856, Component857, Component858, Component859, Component860].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
