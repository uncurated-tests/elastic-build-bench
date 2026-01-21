'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12116<T> = T extends (infer U)[]
  ? DeepReadonlyArray12116<U>
  : T extends object
  ? DeepReadonlyObject12116<T>
  : T;

interface DeepReadonlyArray12116<T> extends ReadonlyArray<DeepReadonly12116<T>> {}

type DeepReadonlyObject12116<T> = {
  readonly [P in keyof T]: DeepReadonly12116<T[P]>;
};

type UnionToIntersection12116<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12116<T> = UnionToIntersection12116<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12116<T extends unknown[], V> = [...T, V];

type TuplifyUnion12116<T, L = LastOf12116<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12116<TuplifyUnion12116<Exclude<T, L>>, L>;

type DeepPartial12116<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12116<T[P]> }
  : T;

type Paths12116<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12116<K, Paths12116<T[K], Prev12116[D]>> : never }[keyof T]
  : never;

type Prev12116 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12116<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12116 {
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

type ConfigPaths12116 = Paths12116<NestedConfig12116>;

interface HeavyProps12116 {
  config: DeepPartial12116<NestedConfig12116>;
  path?: ConfigPaths12116;
}

const HeavyComponent12116 = memo(function HeavyComponent12116({ config }: HeavyProps12116) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12116) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12116 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12116: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12116.displayName = 'HeavyComponent12116';
export default HeavyComponent12116;
