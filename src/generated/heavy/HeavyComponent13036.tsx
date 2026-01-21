'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13036<T> = T extends (infer U)[]
  ? DeepReadonlyArray13036<U>
  : T extends object
  ? DeepReadonlyObject13036<T>
  : T;

interface DeepReadonlyArray13036<T> extends ReadonlyArray<DeepReadonly13036<T>> {}

type DeepReadonlyObject13036<T> = {
  readonly [P in keyof T]: DeepReadonly13036<T[P]>;
};

type UnionToIntersection13036<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13036<T> = UnionToIntersection13036<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13036<T extends unknown[], V> = [...T, V];

type TuplifyUnion13036<T, L = LastOf13036<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13036<TuplifyUnion13036<Exclude<T, L>>, L>;

type DeepPartial13036<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13036<T[P]> }
  : T;

type Paths13036<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13036<K, Paths13036<T[K], Prev13036[D]>> : never }[keyof T]
  : never;

type Prev13036 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13036<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13036 {
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

type ConfigPaths13036 = Paths13036<NestedConfig13036>;

interface HeavyProps13036 {
  config: DeepPartial13036<NestedConfig13036>;
  path?: ConfigPaths13036;
}

const HeavyComponent13036 = memo(function HeavyComponent13036({ config }: HeavyProps13036) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13036) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13036 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13036: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13036.displayName = 'HeavyComponent13036';
export default HeavyComponent13036;
