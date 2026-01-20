import Component1196 from '@/generated/components/Component1196';
import Component1197 from '@/generated/components/Component1197';
import Component1198 from '@/generated/components/Component1198';
import Component1199 from '@/generated/components/Component1199';
import Component1200 from '@/generated/components/Component1200';
import Component1201 from '@/generated/components/Component1201';
import Component1202 from '@/generated/components/Component1202';
import Component1203 from '@/generated/components/Component1203';
import Component1204 from '@/generated/components/Component1204';
import Component1205 from '@/generated/components/Component1205';
import Component1206 from '@/generated/components/Component1206';
import Component1207 from '@/generated/components/Component1207';
import Component1208 from '@/generated/components/Component1208';
import Component1209 from '@/generated/components/Component1209';
import Component1210 from '@/generated/components/Component1210';
import Component1211 from '@/generated/components/Component1211';
import Component1212 from '@/generated/components/Component1212';
import Component1213 from '@/generated/components/Component1213';
import Component1214 from '@/generated/components/Component1214';
import Component1215 from '@/generated/components/Component1215';
import Component1216 from '@/generated/components/Component1216';
import Component1217 from '@/generated/components/Component1217';
import Component1218 from '@/generated/components/Component1218';
import Component1219 from '@/generated/components/Component1219';
import Component1220 from '@/generated/components/Component1220';
import Component1221 from '@/generated/components/Component1221';

const sampleData = {
  id: 'page-46',
  name: 'Benchmark Page 46',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-46',
          computed: 69,
          metadata: { page: 46 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 5.6000000000000005 },
    },
  },
};

export default function BenchPage46() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 46
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 26 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component1196, Component1197, Component1198, Component1199, Component1200, Component1201, Component1202, Component1203, Component1204, Component1205, Component1206, Component1207, Component1208, Component1209, Component1210, Component1211, Component1212, Component1213, Component1214, Component1215, Component1216, Component1217, Component1218, Component1219, Component1220, Component1221].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
