'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12298<T> = T extends (infer U)[]
  ? DeepReadonlyArray12298<U>
  : T extends object
  ? DeepReadonlyObject12298<T>
  : T;

interface DeepReadonlyArray12298<T> extends ReadonlyArray<DeepReadonly12298<T>> {}

type DeepReadonlyObject12298<T> = {
  readonly [P in keyof T]: DeepReadonly12298<T[P]>;
};

type UnionToIntersection12298<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12298<T> = UnionToIntersection12298<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12298<T extends unknown[], V> = [...T, V];

type TuplifyUnion12298<T, L = LastOf12298<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12298<TuplifyUnion12298<Exclude<T, L>>, L>;

type DeepPartial12298<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12298<T[P]> }
  : T;

type Paths12298<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12298<K, Paths12298<T[K], Prev12298[D]>> : never }[keyof T]
  : never;

type Prev12298 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12298<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12298 {
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

type ConfigPaths12298 = Paths12298<NestedConfig12298>;

interface HeavyProps12298 {
  config: DeepPartial12298<NestedConfig12298>;
  path?: ConfigPaths12298;
}

const HeavyComponent12298 = memo(function HeavyComponent12298({ config }: HeavyProps12298) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12298) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12298 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12298: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12298.displayName = 'HeavyComponent12298';
export default HeavyComponent12298;
