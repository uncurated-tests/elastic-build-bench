'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13304<T> = T extends (infer U)[]
  ? DeepReadonlyArray13304<U>
  : T extends object
  ? DeepReadonlyObject13304<T>
  : T;

interface DeepReadonlyArray13304<T> extends ReadonlyArray<DeepReadonly13304<T>> {}

type DeepReadonlyObject13304<T> = {
  readonly [P in keyof T]: DeepReadonly13304<T[P]>;
};

type UnionToIntersection13304<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13304<T> = UnionToIntersection13304<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13304<T extends unknown[], V> = [...T, V];

type TuplifyUnion13304<T, L = LastOf13304<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13304<TuplifyUnion13304<Exclude<T, L>>, L>;

type DeepPartial13304<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13304<T[P]> }
  : T;

type Paths13304<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13304<K, Paths13304<T[K], Prev13304[D]>> : never }[keyof T]
  : never;

type Prev13304 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13304<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13304 {
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

type ConfigPaths13304 = Paths13304<NestedConfig13304>;

interface HeavyProps13304 {
  config: DeepPartial13304<NestedConfig13304>;
  path?: ConfigPaths13304;
}

const HeavyComponent13304 = memo(function HeavyComponent13304({ config }: HeavyProps13304) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13304) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13304 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13304: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13304.displayName = 'HeavyComponent13304';
export default HeavyComponent13304;
