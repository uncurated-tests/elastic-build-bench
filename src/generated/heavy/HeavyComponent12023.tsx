'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12023<T> = T extends (infer U)[]
  ? DeepReadonlyArray12023<U>
  : T extends object
  ? DeepReadonlyObject12023<T>
  : T;

interface DeepReadonlyArray12023<T> extends ReadonlyArray<DeepReadonly12023<T>> {}

type DeepReadonlyObject12023<T> = {
  readonly [P in keyof T]: DeepReadonly12023<T[P]>;
};

type UnionToIntersection12023<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12023<T> = UnionToIntersection12023<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12023<T extends unknown[], V> = [...T, V];

type TuplifyUnion12023<T, L = LastOf12023<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12023<TuplifyUnion12023<Exclude<T, L>>, L>;

type DeepPartial12023<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12023<T[P]> }
  : T;

type Paths12023<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12023<K, Paths12023<T[K], Prev12023[D]>> : never }[keyof T]
  : never;

type Prev12023 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12023<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12023 {
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

type ConfigPaths12023 = Paths12023<NestedConfig12023>;

interface HeavyProps12023 {
  config: DeepPartial12023<NestedConfig12023>;
  path?: ConfigPaths12023;
}

const HeavyComponent12023 = memo(function HeavyComponent12023({ config }: HeavyProps12023) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12023) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12023 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12023: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12023.displayName = 'HeavyComponent12023';
export default HeavyComponent12023;
