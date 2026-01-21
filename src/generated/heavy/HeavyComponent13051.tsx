'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13051<T> = T extends (infer U)[]
  ? DeepReadonlyArray13051<U>
  : T extends object
  ? DeepReadonlyObject13051<T>
  : T;

interface DeepReadonlyArray13051<T> extends ReadonlyArray<DeepReadonly13051<T>> {}

type DeepReadonlyObject13051<T> = {
  readonly [P in keyof T]: DeepReadonly13051<T[P]>;
};

type UnionToIntersection13051<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13051<T> = UnionToIntersection13051<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13051<T extends unknown[], V> = [...T, V];

type TuplifyUnion13051<T, L = LastOf13051<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13051<TuplifyUnion13051<Exclude<T, L>>, L>;

type DeepPartial13051<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13051<T[P]> }
  : T;

type Paths13051<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13051<K, Paths13051<T[K], Prev13051[D]>> : never }[keyof T]
  : never;

type Prev13051 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13051<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13051 {
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

type ConfigPaths13051 = Paths13051<NestedConfig13051>;

interface HeavyProps13051 {
  config: DeepPartial13051<NestedConfig13051>;
  path?: ConfigPaths13051;
}

const HeavyComponent13051 = memo(function HeavyComponent13051({ config }: HeavyProps13051) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13051) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13051 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13051: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13051.displayName = 'HeavyComponent13051';
export default HeavyComponent13051;
