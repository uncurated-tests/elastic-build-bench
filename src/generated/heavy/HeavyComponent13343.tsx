'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13343<T> = T extends (infer U)[]
  ? DeepReadonlyArray13343<U>
  : T extends object
  ? DeepReadonlyObject13343<T>
  : T;

interface DeepReadonlyArray13343<T> extends ReadonlyArray<DeepReadonly13343<T>> {}

type DeepReadonlyObject13343<T> = {
  readonly [P in keyof T]: DeepReadonly13343<T[P]>;
};

type UnionToIntersection13343<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13343<T> = UnionToIntersection13343<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13343<T extends unknown[], V> = [...T, V];

type TuplifyUnion13343<T, L = LastOf13343<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13343<TuplifyUnion13343<Exclude<T, L>>, L>;

type DeepPartial13343<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13343<T[P]> }
  : T;

type Paths13343<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13343<K, Paths13343<T[K], Prev13343[D]>> : never }[keyof T]
  : never;

type Prev13343 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13343<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13343 {
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

type ConfigPaths13343 = Paths13343<NestedConfig13343>;

interface HeavyProps13343 {
  config: DeepPartial13343<NestedConfig13343>;
  path?: ConfigPaths13343;
}

const HeavyComponent13343 = memo(function HeavyComponent13343({ config }: HeavyProps13343) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13343) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13343 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13343: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13343.displayName = 'HeavyComponent13343';
export default HeavyComponent13343;
