'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2914<T> = T extends (infer U)[]
  ? DeepReadonlyArray2914<U>
  : T extends object
  ? DeepReadonlyObject2914<T>
  : T;

interface DeepReadonlyArray2914<T> extends ReadonlyArray<DeepReadonly2914<T>> {}

type DeepReadonlyObject2914<T> = {
  readonly [P in keyof T]: DeepReadonly2914<T[P]>;
};

type UnionToIntersection2914<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2914<T> = UnionToIntersection2914<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2914<T extends unknown[], V> = [...T, V];

type TuplifyUnion2914<T, L = LastOf2914<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2914<TuplifyUnion2914<Exclude<T, L>>, L>;

type DeepPartial2914<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2914<T[P]> }
  : T;

type Paths2914<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2914<K, Paths2914<T[K], Prev2914[D]>> : never }[keyof T]
  : never;

type Prev2914 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2914<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2914 {
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

type ConfigPaths2914 = Paths2914<NestedConfig2914>;

interface HeavyProps2914 {
  config: DeepPartial2914<NestedConfig2914>;
  path?: ConfigPaths2914;
}

const HeavyComponent2914 = memo(function HeavyComponent2914({ config }: HeavyProps2914) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2914) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2914 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2914: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2914.displayName = 'HeavyComponent2914';
export default HeavyComponent2914;
