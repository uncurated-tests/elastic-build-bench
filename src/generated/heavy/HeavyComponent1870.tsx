'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1870<T> = T extends (infer U)[]
  ? DeepReadonlyArray1870<U>
  : T extends object
  ? DeepReadonlyObject1870<T>
  : T;

interface DeepReadonlyArray1870<T> extends ReadonlyArray<DeepReadonly1870<T>> {}

type DeepReadonlyObject1870<T> = {
  readonly [P in keyof T]: DeepReadonly1870<T[P]>;
};

type UnionToIntersection1870<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1870<T> = UnionToIntersection1870<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1870<T extends unknown[], V> = [...T, V];

type TuplifyUnion1870<T, L = LastOf1870<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1870<TuplifyUnion1870<Exclude<T, L>>, L>;

type DeepPartial1870<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1870<T[P]> }
  : T;

type Paths1870<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1870<K, Paths1870<T[K], Prev1870[D]>> : never }[keyof T]
  : never;

type Prev1870 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1870<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1870 {
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

type ConfigPaths1870 = Paths1870<NestedConfig1870>;

interface HeavyProps1870 {
  config: DeepPartial1870<NestedConfig1870>;
  path?: ConfigPaths1870;
}

const HeavyComponent1870 = memo(function HeavyComponent1870({ config }: HeavyProps1870) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1870) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1870 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1870: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1870.displayName = 'HeavyComponent1870';
export default HeavyComponent1870;
