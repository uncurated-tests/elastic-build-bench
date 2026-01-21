'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12861<T> = T extends (infer U)[]
  ? DeepReadonlyArray12861<U>
  : T extends object
  ? DeepReadonlyObject12861<T>
  : T;

interface DeepReadonlyArray12861<T> extends ReadonlyArray<DeepReadonly12861<T>> {}

type DeepReadonlyObject12861<T> = {
  readonly [P in keyof T]: DeepReadonly12861<T[P]>;
};

type UnionToIntersection12861<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12861<T> = UnionToIntersection12861<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12861<T extends unknown[], V> = [...T, V];

type TuplifyUnion12861<T, L = LastOf12861<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12861<TuplifyUnion12861<Exclude<T, L>>, L>;

type DeepPartial12861<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12861<T[P]> }
  : T;

type Paths12861<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12861<K, Paths12861<T[K], Prev12861[D]>> : never }[keyof T]
  : never;

type Prev12861 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12861<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12861 {
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

type ConfigPaths12861 = Paths12861<NestedConfig12861>;

interface HeavyProps12861 {
  config: DeepPartial12861<NestedConfig12861>;
  path?: ConfigPaths12861;
}

const HeavyComponent12861 = memo(function HeavyComponent12861({ config }: HeavyProps12861) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12861) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12861 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12861: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12861.displayName = 'HeavyComponent12861';
export default HeavyComponent12861;
