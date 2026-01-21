'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13286<T> = T extends (infer U)[]
  ? DeepReadonlyArray13286<U>
  : T extends object
  ? DeepReadonlyObject13286<T>
  : T;

interface DeepReadonlyArray13286<T> extends ReadonlyArray<DeepReadonly13286<T>> {}

type DeepReadonlyObject13286<T> = {
  readonly [P in keyof T]: DeepReadonly13286<T[P]>;
};

type UnionToIntersection13286<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13286<T> = UnionToIntersection13286<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13286<T extends unknown[], V> = [...T, V];

type TuplifyUnion13286<T, L = LastOf13286<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13286<TuplifyUnion13286<Exclude<T, L>>, L>;

type DeepPartial13286<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13286<T[P]> }
  : T;

type Paths13286<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13286<K, Paths13286<T[K], Prev13286[D]>> : never }[keyof T]
  : never;

type Prev13286 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13286<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13286 {
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

type ConfigPaths13286 = Paths13286<NestedConfig13286>;

interface HeavyProps13286 {
  config: DeepPartial13286<NestedConfig13286>;
  path?: ConfigPaths13286;
}

const HeavyComponent13286 = memo(function HeavyComponent13286({ config }: HeavyProps13286) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13286) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13286 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13286: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13286.displayName = 'HeavyComponent13286';
export default HeavyComponent13286;
