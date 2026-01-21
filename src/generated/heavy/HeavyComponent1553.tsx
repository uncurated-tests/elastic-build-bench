'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1553<T> = T extends (infer U)[]
  ? DeepReadonlyArray1553<U>
  : T extends object
  ? DeepReadonlyObject1553<T>
  : T;

interface DeepReadonlyArray1553<T> extends ReadonlyArray<DeepReadonly1553<T>> {}

type DeepReadonlyObject1553<T> = {
  readonly [P in keyof T]: DeepReadonly1553<T[P]>;
};

type UnionToIntersection1553<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1553<T> = UnionToIntersection1553<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1553<T extends unknown[], V> = [...T, V];

type TuplifyUnion1553<T, L = LastOf1553<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1553<TuplifyUnion1553<Exclude<T, L>>, L>;

type DeepPartial1553<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1553<T[P]> }
  : T;

type Paths1553<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1553<K, Paths1553<T[K], Prev1553[D]>> : never }[keyof T]
  : never;

type Prev1553 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1553<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1553 {
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

type ConfigPaths1553 = Paths1553<NestedConfig1553>;

interface HeavyProps1553 {
  config: DeepPartial1553<NestedConfig1553>;
  path?: ConfigPaths1553;
}

const HeavyComponent1553 = memo(function HeavyComponent1553({ config }: HeavyProps1553) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1553) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1553 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1553: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1553.displayName = 'HeavyComponent1553';
export default HeavyComponent1553;
