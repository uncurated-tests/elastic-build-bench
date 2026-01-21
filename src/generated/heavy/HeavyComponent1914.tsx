'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1914<T> = T extends (infer U)[]
  ? DeepReadonlyArray1914<U>
  : T extends object
  ? DeepReadonlyObject1914<T>
  : T;

interface DeepReadonlyArray1914<T> extends ReadonlyArray<DeepReadonly1914<T>> {}

type DeepReadonlyObject1914<T> = {
  readonly [P in keyof T]: DeepReadonly1914<T[P]>;
};

type UnionToIntersection1914<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1914<T> = UnionToIntersection1914<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1914<T extends unknown[], V> = [...T, V];

type TuplifyUnion1914<T, L = LastOf1914<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1914<TuplifyUnion1914<Exclude<T, L>>, L>;

type DeepPartial1914<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1914<T[P]> }
  : T;

type Paths1914<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1914<K, Paths1914<T[K], Prev1914[D]>> : never }[keyof T]
  : never;

type Prev1914 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1914<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1914 {
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

type ConfigPaths1914 = Paths1914<NestedConfig1914>;

interface HeavyProps1914 {
  config: DeepPartial1914<NestedConfig1914>;
  path?: ConfigPaths1914;
}

const HeavyComponent1914 = memo(function HeavyComponent1914({ config }: HeavyProps1914) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1914) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1914 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1914: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1914.displayName = 'HeavyComponent1914';
export default HeavyComponent1914;
