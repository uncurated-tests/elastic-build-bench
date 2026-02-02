import Component182 from '@/generated/components/Component182';
import Component183 from '@/generated/components/Component183';
import Component184 from '@/generated/components/Component184';
import Component185 from '@/generated/components/Component185';
import Component186 from '@/generated/components/Component186';
import Component187 from '@/generated/components/Component187';
import Component188 from '@/generated/components/Component188';
import Component189 from '@/generated/components/Component189';
import Component190 from '@/generated/components/Component190';
import Component191 from '@/generated/components/Component191';
import Component192 from '@/generated/components/Component192';
import Component193 from '@/generated/components/Component193';
import Component194 from '@/generated/components/Component194';
import Component195 from '@/generated/components/Component195';
import Component196 from '@/generated/components/Component196';
import Component197 from '@/generated/components/Component197';
import Component198 from '@/generated/components/Component198';
import Component199 from '@/generated/components/Component199';
import Component200 from '@/generated/components/Component200';
import Component201 from '@/generated/components/Component201';
import Component202 from '@/generated/components/Component202';
import Component203 from '@/generated/components/Component203';
import Component204 from '@/generated/components/Component204';
import Component205 from '@/generated/components/Component205';
import Component206 from '@/generated/components/Component206';
import Component207 from '@/generated/components/Component207';

const sampleData = {
  id: 'page-7',
  name: 'Benchmark Page 7',
  values: [1, 2, 3, 4, 5],
  nested: { level1: { level2: { level3: { value: 'deep-7' } } } },
};

export default function BenchPage7() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Benchmark Page 7</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component182, Component183, Component184, Component185, Component186, Component187, Component188, Component189, Component190, Component191, Component192, Component193, Component194, Component195, Component196, Component197, Component198, Component199, Component200, Component201, Component202, Component203, Component204, Component205, Component206, Component207].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
