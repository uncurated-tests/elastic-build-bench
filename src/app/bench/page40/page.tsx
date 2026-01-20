import Component1040 from '@/generated/components/Component1040';
import Component1041 from '@/generated/components/Component1041';
import Component1042 from '@/generated/components/Component1042';
import Component1043 from '@/generated/components/Component1043';
import Component1044 from '@/generated/components/Component1044';
import Component1045 from '@/generated/components/Component1045';
import Component1046 from '@/generated/components/Component1046';
import Component1047 from '@/generated/components/Component1047';
import Component1048 from '@/generated/components/Component1048';
import Component1049 from '@/generated/components/Component1049';
import Component1050 from '@/generated/components/Component1050';
import Component1051 from '@/generated/components/Component1051';
import Component1052 from '@/generated/components/Component1052';
import Component1053 from '@/generated/components/Component1053';
import Component1054 from '@/generated/components/Component1054';
import Component1055 from '@/generated/components/Component1055';
import Component1056 from '@/generated/components/Component1056';
import Component1057 from '@/generated/components/Component1057';
import Component1058 from '@/generated/components/Component1058';
import Component1059 from '@/generated/components/Component1059';
import Component1060 from '@/generated/components/Component1060';
import Component1061 from '@/generated/components/Component1061';
import Component1062 from '@/generated/components/Component1062';
import Component1063 from '@/generated/components/Component1063';
import Component1064 from '@/generated/components/Component1064';
import Component1065 from '@/generated/components/Component1065';

const sampleData = {
  id: 'page-40',
  name: 'Benchmark Page 40',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-40',
          computed: 60,
          metadata: { page: 40 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 5 },
    },
  },
};

export default function BenchPage40() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 40
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 26 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component1040, Component1041, Component1042, Component1043, Component1044, Component1045, Component1046, Component1047, Component1048, Component1049, Component1050, Component1051, Component1052, Component1053, Component1054, Component1055, Component1056, Component1057, Component1058, Component1059, Component1060, Component1061, Component1062, Component1063, Component1064, Component1065].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
