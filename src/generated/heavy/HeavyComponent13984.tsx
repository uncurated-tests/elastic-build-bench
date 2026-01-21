'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13984<T> = T extends (infer U)[]
  ? DeepReadonlyArray13984<U>
  : T extends object
  ? DeepReadonlyObject13984<T>
  : T;

interface DeepReadonlyArray13984<T> extends ReadonlyArray<DeepReadonly13984<T>> {}

type DeepReadonlyObject13984<T> = {
  readonly [P in keyof T]: DeepReadonly13984<T[P]>;
};

type UnionToIntersection13984<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13984<T> = UnionToIntersection13984<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13984<T extends unknown[], V> = [...T, V];

type TuplifyUnion13984<T, L = LastOf13984<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13984<TuplifyUnion13984<Exclude<T, L>>, L>;

type DeepPartial13984<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13984<T[P]> }
  : T;

type Paths13984<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13984<K, Paths13984<T[K], Prev13984[D]>> : never }[keyof T]
  : never;

type Prev13984 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13984<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13984 {
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

type ConfigPaths13984 = Paths13984<NestedConfig13984>;

interface HeavyProps13984 {
  config: DeepPartial13984<NestedConfig13984>;
  path?: ConfigPaths13984;
}

const HeavyComponent13984 = memo(function HeavyComponent13984({ config }: HeavyProps13984) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13984) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13984 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13984: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13984.displayName = 'HeavyComponent13984';
export default HeavyComponent13984;
