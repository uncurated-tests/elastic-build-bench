'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13864<T> = T extends (infer U)[]
  ? DeepReadonlyArray13864<U>
  : T extends object
  ? DeepReadonlyObject13864<T>
  : T;

interface DeepReadonlyArray13864<T> extends ReadonlyArray<DeepReadonly13864<T>> {}

type DeepReadonlyObject13864<T> = {
  readonly [P in keyof T]: DeepReadonly13864<T[P]>;
};

type UnionToIntersection13864<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13864<T> = UnionToIntersection13864<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13864<T extends unknown[], V> = [...T, V];

type TuplifyUnion13864<T, L = LastOf13864<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13864<TuplifyUnion13864<Exclude<T, L>>, L>;

type DeepPartial13864<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13864<T[P]> }
  : T;

type Paths13864<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13864<K, Paths13864<T[K], Prev13864[D]>> : never }[keyof T]
  : never;

type Prev13864 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13864<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13864 {
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

type ConfigPaths13864 = Paths13864<NestedConfig13864>;

interface HeavyProps13864 {
  config: DeepPartial13864<NestedConfig13864>;
  path?: ConfigPaths13864;
}

const HeavyComponent13864 = memo(function HeavyComponent13864({ config }: HeavyProps13864) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13864) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13864 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13864: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13864.displayName = 'HeavyComponent13864';
export default HeavyComponent13864;
