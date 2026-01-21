'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1371<T> = T extends (infer U)[]
  ? DeepReadonlyArray1371<U>
  : T extends object
  ? DeepReadonlyObject1371<T>
  : T;

interface DeepReadonlyArray1371<T> extends ReadonlyArray<DeepReadonly1371<T>> {}

type DeepReadonlyObject1371<T> = {
  readonly [P in keyof T]: DeepReadonly1371<T[P]>;
};

type UnionToIntersection1371<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1371<T> = UnionToIntersection1371<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1371<T extends unknown[], V> = [...T, V];

type TuplifyUnion1371<T, L = LastOf1371<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1371<TuplifyUnion1371<Exclude<T, L>>, L>;

type DeepPartial1371<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1371<T[P]> }
  : T;

type Paths1371<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1371<K, Paths1371<T[K], Prev1371[D]>> : never }[keyof T]
  : never;

type Prev1371 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1371<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1371 {
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

type ConfigPaths1371 = Paths1371<NestedConfig1371>;

interface HeavyProps1371 {
  config: DeepPartial1371<NestedConfig1371>;
  path?: ConfigPaths1371;
}

const HeavyComponent1371 = memo(function HeavyComponent1371({ config }: HeavyProps1371) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1371) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1371 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1371: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1371.displayName = 'HeavyComponent1371';
export default HeavyComponent1371;
