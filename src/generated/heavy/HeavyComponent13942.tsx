'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13942<T> = T extends (infer U)[]
  ? DeepReadonlyArray13942<U>
  : T extends object
  ? DeepReadonlyObject13942<T>
  : T;

interface DeepReadonlyArray13942<T> extends ReadonlyArray<DeepReadonly13942<T>> {}

type DeepReadonlyObject13942<T> = {
  readonly [P in keyof T]: DeepReadonly13942<T[P]>;
};

type UnionToIntersection13942<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13942<T> = UnionToIntersection13942<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13942<T extends unknown[], V> = [...T, V];

type TuplifyUnion13942<T, L = LastOf13942<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13942<TuplifyUnion13942<Exclude<T, L>>, L>;

type DeepPartial13942<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13942<T[P]> }
  : T;

type Paths13942<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13942<K, Paths13942<T[K], Prev13942[D]>> : never }[keyof T]
  : never;

type Prev13942 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13942<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13942 {
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

type ConfigPaths13942 = Paths13942<NestedConfig13942>;

interface HeavyProps13942 {
  config: DeepPartial13942<NestedConfig13942>;
  path?: ConfigPaths13942;
}

const HeavyComponent13942 = memo(function HeavyComponent13942({ config }: HeavyProps13942) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13942) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13942 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13942: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13942.displayName = 'HeavyComponent13942';
export default HeavyComponent13942;
