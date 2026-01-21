'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13115<T> = T extends (infer U)[]
  ? DeepReadonlyArray13115<U>
  : T extends object
  ? DeepReadonlyObject13115<T>
  : T;

interface DeepReadonlyArray13115<T> extends ReadonlyArray<DeepReadonly13115<T>> {}

type DeepReadonlyObject13115<T> = {
  readonly [P in keyof T]: DeepReadonly13115<T[P]>;
};

type UnionToIntersection13115<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13115<T> = UnionToIntersection13115<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13115<T extends unknown[], V> = [...T, V];

type TuplifyUnion13115<T, L = LastOf13115<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13115<TuplifyUnion13115<Exclude<T, L>>, L>;

type DeepPartial13115<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13115<T[P]> }
  : T;

type Paths13115<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13115<K, Paths13115<T[K], Prev13115[D]>> : never }[keyof T]
  : never;

type Prev13115 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13115<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13115 {
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

type ConfigPaths13115 = Paths13115<NestedConfig13115>;

interface HeavyProps13115 {
  config: DeepPartial13115<NestedConfig13115>;
  path?: ConfigPaths13115;
}

const HeavyComponent13115 = memo(function HeavyComponent13115({ config }: HeavyProps13115) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13115) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13115 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13115: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13115.displayName = 'HeavyComponent13115';
export default HeavyComponent13115;
