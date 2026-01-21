'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13789<T> = T extends (infer U)[]
  ? DeepReadonlyArray13789<U>
  : T extends object
  ? DeepReadonlyObject13789<T>
  : T;

interface DeepReadonlyArray13789<T> extends ReadonlyArray<DeepReadonly13789<T>> {}

type DeepReadonlyObject13789<T> = {
  readonly [P in keyof T]: DeepReadonly13789<T[P]>;
};

type UnionToIntersection13789<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13789<T> = UnionToIntersection13789<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13789<T extends unknown[], V> = [...T, V];

type TuplifyUnion13789<T, L = LastOf13789<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13789<TuplifyUnion13789<Exclude<T, L>>, L>;

type DeepPartial13789<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13789<T[P]> }
  : T;

type Paths13789<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13789<K, Paths13789<T[K], Prev13789[D]>> : never }[keyof T]
  : never;

type Prev13789 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13789<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13789 {
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

type ConfigPaths13789 = Paths13789<NestedConfig13789>;

interface HeavyProps13789 {
  config: DeepPartial13789<NestedConfig13789>;
  path?: ConfigPaths13789;
}

const HeavyComponent13789 = memo(function HeavyComponent13789({ config }: HeavyProps13789) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13789) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13789 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13789: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13789.displayName = 'HeavyComponent13789';
export default HeavyComponent13789;
