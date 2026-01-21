'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12827<T> = T extends (infer U)[]
  ? DeepReadonlyArray12827<U>
  : T extends object
  ? DeepReadonlyObject12827<T>
  : T;

interface DeepReadonlyArray12827<T> extends ReadonlyArray<DeepReadonly12827<T>> {}

type DeepReadonlyObject12827<T> = {
  readonly [P in keyof T]: DeepReadonly12827<T[P]>;
};

type UnionToIntersection12827<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12827<T> = UnionToIntersection12827<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12827<T extends unknown[], V> = [...T, V];

type TuplifyUnion12827<T, L = LastOf12827<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12827<TuplifyUnion12827<Exclude<T, L>>, L>;

type DeepPartial12827<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12827<T[P]> }
  : T;

type Paths12827<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12827<K, Paths12827<T[K], Prev12827[D]>> : never }[keyof T]
  : never;

type Prev12827 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12827<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12827 {
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

type ConfigPaths12827 = Paths12827<NestedConfig12827>;

interface HeavyProps12827 {
  config: DeepPartial12827<NestedConfig12827>;
  path?: ConfigPaths12827;
}

const HeavyComponent12827 = memo(function HeavyComponent12827({ config }: HeavyProps12827) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12827) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12827 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12827: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12827.displayName = 'HeavyComponent12827';
export default HeavyComponent12827;
