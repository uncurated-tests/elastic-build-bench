'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13406<T> = T extends (infer U)[]
  ? DeepReadonlyArray13406<U>
  : T extends object
  ? DeepReadonlyObject13406<T>
  : T;

interface DeepReadonlyArray13406<T> extends ReadonlyArray<DeepReadonly13406<T>> {}

type DeepReadonlyObject13406<T> = {
  readonly [P in keyof T]: DeepReadonly13406<T[P]>;
};

type UnionToIntersection13406<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13406<T> = UnionToIntersection13406<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13406<T extends unknown[], V> = [...T, V];

type TuplifyUnion13406<T, L = LastOf13406<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13406<TuplifyUnion13406<Exclude<T, L>>, L>;

type DeepPartial13406<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13406<T[P]> }
  : T;

type Paths13406<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13406<K, Paths13406<T[K], Prev13406[D]>> : never }[keyof T]
  : never;

type Prev13406 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13406<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13406 {
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

type ConfigPaths13406 = Paths13406<NestedConfig13406>;

interface HeavyProps13406 {
  config: DeepPartial13406<NestedConfig13406>;
  path?: ConfigPaths13406;
}

const HeavyComponent13406 = memo(function HeavyComponent13406({ config }: HeavyProps13406) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13406) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13406 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13406: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13406.displayName = 'HeavyComponent13406';
export default HeavyComponent13406;
