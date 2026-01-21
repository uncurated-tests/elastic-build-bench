'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12859<T> = T extends (infer U)[]
  ? DeepReadonlyArray12859<U>
  : T extends object
  ? DeepReadonlyObject12859<T>
  : T;

interface DeepReadonlyArray12859<T> extends ReadonlyArray<DeepReadonly12859<T>> {}

type DeepReadonlyObject12859<T> = {
  readonly [P in keyof T]: DeepReadonly12859<T[P]>;
};

type UnionToIntersection12859<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12859<T> = UnionToIntersection12859<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12859<T extends unknown[], V> = [...T, V];

type TuplifyUnion12859<T, L = LastOf12859<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12859<TuplifyUnion12859<Exclude<T, L>>, L>;

type DeepPartial12859<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12859<T[P]> }
  : T;

type Paths12859<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12859<K, Paths12859<T[K], Prev12859[D]>> : never }[keyof T]
  : never;

type Prev12859 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12859<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12859 {
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

type ConfigPaths12859 = Paths12859<NestedConfig12859>;

interface HeavyProps12859 {
  config: DeepPartial12859<NestedConfig12859>;
  path?: ConfigPaths12859;
}

const HeavyComponent12859 = memo(function HeavyComponent12859({ config }: HeavyProps12859) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12859) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12859 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12859: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12859.displayName = 'HeavyComponent12859';
export default HeavyComponent12859;
