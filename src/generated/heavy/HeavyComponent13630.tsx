'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13630<T> = T extends (infer U)[]
  ? DeepReadonlyArray13630<U>
  : T extends object
  ? DeepReadonlyObject13630<T>
  : T;

interface DeepReadonlyArray13630<T> extends ReadonlyArray<DeepReadonly13630<T>> {}

type DeepReadonlyObject13630<T> = {
  readonly [P in keyof T]: DeepReadonly13630<T[P]>;
};

type UnionToIntersection13630<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13630<T> = UnionToIntersection13630<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13630<T extends unknown[], V> = [...T, V];

type TuplifyUnion13630<T, L = LastOf13630<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13630<TuplifyUnion13630<Exclude<T, L>>, L>;

type DeepPartial13630<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13630<T[P]> }
  : T;

type Paths13630<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13630<K, Paths13630<T[K], Prev13630[D]>> : never }[keyof T]
  : never;

type Prev13630 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13630<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13630 {
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

type ConfigPaths13630 = Paths13630<NestedConfig13630>;

interface HeavyProps13630 {
  config: DeepPartial13630<NestedConfig13630>;
  path?: ConfigPaths13630;
}

const HeavyComponent13630 = memo(function HeavyComponent13630({ config }: HeavyProps13630) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13630) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13630 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13630: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13630.displayName = 'HeavyComponent13630';
export default HeavyComponent13630;
