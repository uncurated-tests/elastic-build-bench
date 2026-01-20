import Component988 from '@/generated/components/Component988';
import Component989 from '@/generated/components/Component989';
import Component990 from '@/generated/components/Component990';
import Component991 from '@/generated/components/Component991';
import Component992 from '@/generated/components/Component992';
import Component993 from '@/generated/components/Component993';
import Component994 from '@/generated/components/Component994';
import Component995 from '@/generated/components/Component995';
import Component996 from '@/generated/components/Component996';
import Component997 from '@/generated/components/Component997';
import Component998 from '@/generated/components/Component998';
import Component999 from '@/generated/components/Component999';
import Component1000 from '@/generated/components/Component1000';
import Component1001 from '@/generated/components/Component1001';
import Component1002 from '@/generated/components/Component1002';
import Component1003 from '@/generated/components/Component1003';
import Component1004 from '@/generated/components/Component1004';
import Component1005 from '@/generated/components/Component1005';
import Component1006 from '@/generated/components/Component1006';
import Component1007 from '@/generated/components/Component1007';
import Component1008 from '@/generated/components/Component1008';
import Component1009 from '@/generated/components/Component1009';
import Component1010 from '@/generated/components/Component1010';
import Component1011 from '@/generated/components/Component1011';
import Component1012 from '@/generated/components/Component1012';
import Component1013 from '@/generated/components/Component1013';

const sampleData = {
  id: 'page-38',
  name: 'Benchmark Page 38',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-38',
          computed: 57,
          metadata: { page: 38 },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: 4.800000000000001 },
    },
  },
};

export default function BenchPage38() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page 38
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports 26 components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[Component988, Component989, Component990, Component991, Component992, Component993, Component994, Component995, Component996, Component997, Component998, Component999, Component1000, Component1001, Component1002, Component1003, Component1004, Component1005, Component1006, Component1007, Component1008, Component1009, Component1010, Component1011, Component1012, Component1013].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
