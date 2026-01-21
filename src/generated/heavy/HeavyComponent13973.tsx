'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13973<T> = T extends (infer U)[]
  ? DeepReadonlyArray13973<U>
  : T extends object
  ? DeepReadonlyObject13973<T>
  : T;

interface DeepReadonlyArray13973<T> extends ReadonlyArray<DeepReadonly13973<T>> {}

type DeepReadonlyObject13973<T> = {
  readonly [P in keyof T]: DeepReadonly13973<T[P]>;
};

type UnionToIntersection13973<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13973<T> = UnionToIntersection13973<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13973<T extends unknown[], V> = [...T, V];

type TuplifyUnion13973<T, L = LastOf13973<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13973<TuplifyUnion13973<Exclude<T, L>>, L>;

type DeepPartial13973<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13973<T[P]> }
  : T;

type Paths13973<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13973<K, Paths13973<T[K], Prev13973[D]>> : never }[keyof T]
  : never;

type Prev13973 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13973<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13973 {
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

type ConfigPaths13973 = Paths13973<NestedConfig13973>;

interface HeavyProps13973 {
  config: DeepPartial13973<NestedConfig13973>;
  path?: ConfigPaths13973;
}

const HeavyComponent13973 = memo(function HeavyComponent13973({ config }: HeavyProps13973) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13973) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13973 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13973: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13973.displayName = 'HeavyComponent13973';
export default HeavyComponent13973;
