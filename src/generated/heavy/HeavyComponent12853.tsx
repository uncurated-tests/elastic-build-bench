'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12853<T> = T extends (infer U)[]
  ? DeepReadonlyArray12853<U>
  : T extends object
  ? DeepReadonlyObject12853<T>
  : T;

interface DeepReadonlyArray12853<T> extends ReadonlyArray<DeepReadonly12853<T>> {}

type DeepReadonlyObject12853<T> = {
  readonly [P in keyof T]: DeepReadonly12853<T[P]>;
};

type UnionToIntersection12853<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12853<T> = UnionToIntersection12853<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12853<T extends unknown[], V> = [...T, V];

type TuplifyUnion12853<T, L = LastOf12853<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12853<TuplifyUnion12853<Exclude<T, L>>, L>;

type DeepPartial12853<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12853<T[P]> }
  : T;

type Paths12853<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12853<K, Paths12853<T[K], Prev12853[D]>> : never }[keyof T]
  : never;

type Prev12853 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12853<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12853 {
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

type ConfigPaths12853 = Paths12853<NestedConfig12853>;

interface HeavyProps12853 {
  config: DeepPartial12853<NestedConfig12853>;
  path?: ConfigPaths12853;
}

const HeavyComponent12853 = memo(function HeavyComponent12853({ config }: HeavyProps12853) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12853) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12853 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12853: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12853.displayName = 'HeavyComponent12853';
export default HeavyComponent12853;
