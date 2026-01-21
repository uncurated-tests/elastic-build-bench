'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13696<T> = T extends (infer U)[]
  ? DeepReadonlyArray13696<U>
  : T extends object
  ? DeepReadonlyObject13696<T>
  : T;

interface DeepReadonlyArray13696<T> extends ReadonlyArray<DeepReadonly13696<T>> {}

type DeepReadonlyObject13696<T> = {
  readonly [P in keyof T]: DeepReadonly13696<T[P]>;
};

type UnionToIntersection13696<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13696<T> = UnionToIntersection13696<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13696<T extends unknown[], V> = [...T, V];

type TuplifyUnion13696<T, L = LastOf13696<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13696<TuplifyUnion13696<Exclude<T, L>>, L>;

type DeepPartial13696<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13696<T[P]> }
  : T;

type Paths13696<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13696<K, Paths13696<T[K], Prev13696[D]>> : never }[keyof T]
  : never;

type Prev13696 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13696<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13696 {
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

type ConfigPaths13696 = Paths13696<NestedConfig13696>;

interface HeavyProps13696 {
  config: DeepPartial13696<NestedConfig13696>;
  path?: ConfigPaths13696;
}

const HeavyComponent13696 = memo(function HeavyComponent13696({ config }: HeavyProps13696) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13696) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13696 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13696: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13696.displayName = 'HeavyComponent13696';
export default HeavyComponent13696;
