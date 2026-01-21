'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13147<T> = T extends (infer U)[]
  ? DeepReadonlyArray13147<U>
  : T extends object
  ? DeepReadonlyObject13147<T>
  : T;

interface DeepReadonlyArray13147<T> extends ReadonlyArray<DeepReadonly13147<T>> {}

type DeepReadonlyObject13147<T> = {
  readonly [P in keyof T]: DeepReadonly13147<T[P]>;
};

type UnionToIntersection13147<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13147<T> = UnionToIntersection13147<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13147<T extends unknown[], V> = [...T, V];

type TuplifyUnion13147<T, L = LastOf13147<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13147<TuplifyUnion13147<Exclude<T, L>>, L>;

type DeepPartial13147<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13147<T[P]> }
  : T;

type Paths13147<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13147<K, Paths13147<T[K], Prev13147[D]>> : never }[keyof T]
  : never;

type Prev13147 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13147<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13147 {
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

type ConfigPaths13147 = Paths13147<NestedConfig13147>;

interface HeavyProps13147 {
  config: DeepPartial13147<NestedConfig13147>;
  path?: ConfigPaths13147;
}

const HeavyComponent13147 = memo(function HeavyComponent13147({ config }: HeavyProps13147) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13147) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13147 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13147: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13147.displayName = 'HeavyComponent13147';
export default HeavyComponent13147;
