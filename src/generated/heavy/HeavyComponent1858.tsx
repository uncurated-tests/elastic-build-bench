'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1858<T> = T extends (infer U)[]
  ? DeepReadonlyArray1858<U>
  : T extends object
  ? DeepReadonlyObject1858<T>
  : T;

interface DeepReadonlyArray1858<T> extends ReadonlyArray<DeepReadonly1858<T>> {}

type DeepReadonlyObject1858<T> = {
  readonly [P in keyof T]: DeepReadonly1858<T[P]>;
};

type UnionToIntersection1858<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1858<T> = UnionToIntersection1858<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1858<T extends unknown[], V> = [...T, V];

type TuplifyUnion1858<T, L = LastOf1858<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1858<TuplifyUnion1858<Exclude<T, L>>, L>;

type DeepPartial1858<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1858<T[P]> }
  : T;

type Paths1858<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1858<K, Paths1858<T[K], Prev1858[D]>> : never }[keyof T]
  : never;

type Prev1858 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1858<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1858 {
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

type ConfigPaths1858 = Paths1858<NestedConfig1858>;

interface HeavyProps1858 {
  config: DeepPartial1858<NestedConfig1858>;
  path?: ConfigPaths1858;
}

const HeavyComponent1858 = memo(function HeavyComponent1858({ config }: HeavyProps1858) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1858) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1858 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1858: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1858.displayName = 'HeavyComponent1858';
export default HeavyComponent1858;
