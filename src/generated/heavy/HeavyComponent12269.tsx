'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12269<T> = T extends (infer U)[]
  ? DeepReadonlyArray12269<U>
  : T extends object
  ? DeepReadonlyObject12269<T>
  : T;

interface DeepReadonlyArray12269<T> extends ReadonlyArray<DeepReadonly12269<T>> {}

type DeepReadonlyObject12269<T> = {
  readonly [P in keyof T]: DeepReadonly12269<T[P]>;
};

type UnionToIntersection12269<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12269<T> = UnionToIntersection12269<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12269<T extends unknown[], V> = [...T, V];

type TuplifyUnion12269<T, L = LastOf12269<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12269<TuplifyUnion12269<Exclude<T, L>>, L>;

type DeepPartial12269<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12269<T[P]> }
  : T;

type Paths12269<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12269<K, Paths12269<T[K], Prev12269[D]>> : never }[keyof T]
  : never;

type Prev12269 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12269<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12269 {
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

type ConfigPaths12269 = Paths12269<NestedConfig12269>;

interface HeavyProps12269 {
  config: DeepPartial12269<NestedConfig12269>;
  path?: ConfigPaths12269;
}

const HeavyComponent12269 = memo(function HeavyComponent12269({ config }: HeavyProps12269) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12269) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12269 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12269: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12269.displayName = 'HeavyComponent12269';
export default HeavyComponent12269;
