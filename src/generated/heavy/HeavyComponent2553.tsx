'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2553<T> = T extends (infer U)[]
  ? DeepReadonlyArray2553<U>
  : T extends object
  ? DeepReadonlyObject2553<T>
  : T;

interface DeepReadonlyArray2553<T> extends ReadonlyArray<DeepReadonly2553<T>> {}

type DeepReadonlyObject2553<T> = {
  readonly [P in keyof T]: DeepReadonly2553<T[P]>;
};

type UnionToIntersection2553<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2553<T> = UnionToIntersection2553<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2553<T extends unknown[], V> = [...T, V];

type TuplifyUnion2553<T, L = LastOf2553<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2553<TuplifyUnion2553<Exclude<T, L>>, L>;

type DeepPartial2553<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2553<T[P]> }
  : T;

type Paths2553<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2553<K, Paths2553<T[K], Prev2553[D]>> : never }[keyof T]
  : never;

type Prev2553 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2553<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2553 {
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

type ConfigPaths2553 = Paths2553<NestedConfig2553>;

interface HeavyProps2553 {
  config: DeepPartial2553<NestedConfig2553>;
  path?: ConfigPaths2553;
}

const HeavyComponent2553 = memo(function HeavyComponent2553({ config }: HeavyProps2553) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2553) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2553 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2553: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2553.displayName = 'HeavyComponent2553';
export default HeavyComponent2553;
