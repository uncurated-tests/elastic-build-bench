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
import Component357 from '@/generated/components/Component357';
import Component358 from '@/generated/components/Component358';
import Component359 from '@/generated/components/Component359';
import Component360 from '@/generated/components/Component360';
import Component361 from '@/generated/components/Component361';
import Component362 from '@/generated/components/Component362';
import Component363 from '@/generated/components/Component363';

const sampleData = {
  id: 'page-13',
  name: 'Benchmark Page 13',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-13',
          computed: 19.5,
          metadata: { page: 13 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 2.3 },
    },
  },
};

export default function BenchPage13() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 13
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 26 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component338, Component339, Component340, Component341, Component342, Component343, Component344, Component345, Component346, Component347, Component348, Component349, Component350, Component351, Component352, Component353, Component354, Component355, Component356, Component357, Component358, Component359, Component360, Component361, Component362, Component363].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
