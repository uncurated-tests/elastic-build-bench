'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13921<T> = T extends (infer U)[]
  ? DeepReadonlyArray13921<U>
  : T extends object
  ? DeepReadonlyObject13921<T>
  : T;

interface DeepReadonlyArray13921<T> extends ReadonlyArray<DeepReadonly13921<T>> {}

type DeepReadonlyObject13921<T> = {
  readonly [P in keyof T]: DeepReadonly13921<T[P]>;
};

type UnionToIntersection13921<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13921<T> = UnionToIntersection13921<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13921<T extends unknown[], V> = [...T, V];

type TuplifyUnion13921<T, L = LastOf13921<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13921<TuplifyUnion13921<Exclude<T, L>>, L>;

type DeepPartial13921<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13921<T[P]> }
  : T;

type Paths13921<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13921<K, Paths13921<T[K], Prev13921[D]>> : never }[keyof T]
  : never;

type Prev13921 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13921<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13921 {
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

type ConfigPaths13921 = Paths13921<NestedConfig13921>;

interface HeavyProps13921 {
  config: DeepPartial13921<NestedConfig13921>;
  path?: ConfigPaths13921;
}

const HeavyComponent13921 = memo(function HeavyComponent13921({ config }: HeavyProps13921) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13921) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13921 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13921: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13921.displayName = 'HeavyComponent13921';
export default HeavyComponent13921;
