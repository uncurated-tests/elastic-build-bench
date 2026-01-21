'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1846<T> = T extends (infer U)[]
  ? DeepReadonlyArray1846<U>
  : T extends object
  ? DeepReadonlyObject1846<T>
  : T;

interface DeepReadonlyArray1846<T> extends ReadonlyArray<DeepReadonly1846<T>> {}

type DeepReadonlyObject1846<T> = {
  readonly [P in keyof T]: DeepReadonly1846<T[P]>;
};

type UnionToIntersection1846<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1846<T> = UnionToIntersection1846<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1846<T extends unknown[], V> = [...T, V];

type TuplifyUnion1846<T, L = LastOf1846<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1846<TuplifyUnion1846<Exclude<T, L>>, L>;

type DeepPartial1846<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1846<T[P]> }
  : T;

type Paths1846<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1846<K, Paths1846<T[K], Prev1846[D]>> : never }[keyof T]
  : never;

type Prev1846 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1846<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1846 {
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

type ConfigPaths1846 = Paths1846<NestedConfig1846>;

interface HeavyProps1846 {
  config: DeepPartial1846<NestedConfig1846>;
  path?: ConfigPaths1846;
}

const HeavyComponent1846 = memo(function HeavyComponent1846({ config }: HeavyProps1846) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1846) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1846 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1846: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1846.displayName = 'HeavyComponent1846';
export default HeavyComponent1846;
