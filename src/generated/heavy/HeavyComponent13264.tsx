'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13264<T> = T extends (infer U)[]
  ? DeepReadonlyArray13264<U>
  : T extends object
  ? DeepReadonlyObject13264<T>
  : T;

interface DeepReadonlyArray13264<T> extends ReadonlyArray<DeepReadonly13264<T>> {}

type DeepReadonlyObject13264<T> = {
  readonly [P in keyof T]: DeepReadonly13264<T[P]>;
};

type UnionToIntersection13264<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13264<T> = UnionToIntersection13264<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13264<T extends unknown[], V> = [...T, V];

type TuplifyUnion13264<T, L = LastOf13264<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13264<TuplifyUnion13264<Exclude<T, L>>, L>;

type DeepPartial13264<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13264<T[P]> }
  : T;

type Paths13264<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13264<K, Paths13264<T[K], Prev13264[D]>> : never }[keyof T]
  : never;

type Prev13264 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13264<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13264 {
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

type ConfigPaths13264 = Paths13264<NestedConfig13264>;

interface HeavyProps13264 {
  config: DeepPartial13264<NestedConfig13264>;
  path?: ConfigPaths13264;
}

const HeavyComponent13264 = memo(function HeavyComponent13264({ config }: HeavyProps13264) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13264) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13264 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13264: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13264.displayName = 'HeavyComponent13264';
export default HeavyComponent13264;
