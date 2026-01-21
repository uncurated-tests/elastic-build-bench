'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1814<T> = T extends (infer U)[]
  ? DeepReadonlyArray1814<U>
  : T extends object
  ? DeepReadonlyObject1814<T>
  : T;

interface DeepReadonlyArray1814<T> extends ReadonlyArray<DeepReadonly1814<T>> {}

type DeepReadonlyObject1814<T> = {
  readonly [P in keyof T]: DeepReadonly1814<T[P]>;
};

type UnionToIntersection1814<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1814<T> = UnionToIntersection1814<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1814<T extends unknown[], V> = [...T, V];

type TuplifyUnion1814<T, L = LastOf1814<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1814<TuplifyUnion1814<Exclude<T, L>>, L>;

type DeepPartial1814<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1814<T[P]> }
  : T;

type Paths1814<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1814<K, Paths1814<T[K], Prev1814[D]>> : never }[keyof T]
  : never;

type Prev1814 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1814<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1814 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths1814 = Paths1814<NestedConfig1814>;

interface HeavyProps1814 {
  config: DeepPartial1814<NestedConfig1814>;
  path?: ConfigPaths1814;
}

const HeavyComponent1814 = memo(function HeavyComponent1814({ config }: HeavyProps1814) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1814) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1814 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1814: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1814.displayName = 'HeavyComponent1814';
export default HeavyComponent1814;
