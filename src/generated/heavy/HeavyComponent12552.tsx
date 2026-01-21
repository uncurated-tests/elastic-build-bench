'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12552<T> = T extends (infer U)[]
  ? DeepReadonlyArray12552<U>
  : T extends object
  ? DeepReadonlyObject12552<T>
  : T;

interface DeepReadonlyArray12552<T> extends ReadonlyArray<DeepReadonly12552<T>> {}

type DeepReadonlyObject12552<T> = {
  readonly [P in keyof T]: DeepReadonly12552<T[P]>;
};

type UnionToIntersection12552<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12552<T> = UnionToIntersection12552<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12552<T extends unknown[], V> = [...T, V];

type TuplifyUnion12552<T, L = LastOf12552<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12552<TuplifyUnion12552<Exclude<T, L>>, L>;

type DeepPartial12552<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12552<T[P]> }
  : T;

type Paths12552<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12552<K, Paths12552<T[K], Prev12552[D]>> : never }[keyof T]
  : never;

type Prev12552 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12552<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12552 {
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

type ConfigPaths12552 = Paths12552<NestedConfig12552>;

interface HeavyProps12552 {
  config: DeepPartial12552<NestedConfig12552>;
  path?: ConfigPaths12552;
}

const HeavyComponent12552 = memo(function HeavyComponent12552({ config }: HeavyProps12552) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12552) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12552 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12552: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12552.displayName = 'HeavyComponent12552';
export default HeavyComponent12552;
