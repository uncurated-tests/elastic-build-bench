import Component676 from '@/generated/components/Component676';
import Component677 from '@/generated/components/Component677';
import Component678 from '@/generated/components/Component678';
import Component679 from '@/generated/components/Component679';
import Component680 from '@/generated/components/Component680';
import Component681 from '@/generated/components/Component681';
import Component682 from '@/generated/components/Component682';
import Component683 from '@/generated/components/Component683';
import Component684 from '@/generated/components/Component684';
import Component685 from '@/generated/components/Component685';
import Component686 from '@/generated/components/Component686';
import Component687 from '@/generated/components/Component687';
import Component688 from '@/generated/components/Component688';
import Component689 from '@/generated/components/Component689';
import Component690 from '@/generated/components/Component690';
import Component691 from '@/generated/components/Component691';
import Component692 from '@/generated/components/Component692';
import Component693 from '@/generated/components/Component693';
import Component694 from '@/generated/components/Component694';
import Component695 from '@/generated/components/Component695';
import Component696 from '@/generated/components/Component696';
import Component697 from '@/generated/components/Component697';
import Component698 from '@/generated/components/Component698';
import Component699 from '@/generated/components/Component699';
import Component700 from '@/generated/components/Component700';
import Component701 from '@/generated/components/Component701';

const sampleData = {
  id: 'page-26',
  name: 'Benchmark Page 26',
  values: [1, 2, 3, 4, 5],
  nested: { level1: { level2: { level3: { value: 'deep-26' } } } },
};

export default function BenchPage26() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Benchmark Page 26</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component676, Component677, Component678, Component679, Component680, Component681, Component682, Component683, Component684, Component685, Component686, Component687, Component688, Component689, Component690, Component691, Component692, Component693, Component694, Component695, Component696, Component697, Component698, Component699, Component700, Component701].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
