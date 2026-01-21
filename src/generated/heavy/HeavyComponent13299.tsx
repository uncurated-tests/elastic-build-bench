'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13299<T> = T extends (infer U)[]
  ? DeepReadonlyArray13299<U>
  : T extends object
  ? DeepReadonlyObject13299<T>
  : T;

interface DeepReadonlyArray13299<T> extends ReadonlyArray<DeepReadonly13299<T>> {}

type DeepReadonlyObject13299<T> = {
  readonly [P in keyof T]: DeepReadonly13299<T[P]>;
};

type UnionToIntersection13299<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13299<T> = UnionToIntersection13299<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13299<T extends unknown[], V> = [...T, V];

type TuplifyUnion13299<T, L = LastOf13299<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13299<TuplifyUnion13299<Exclude<T, L>>, L>;

type DeepPartial13299<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13299<T[P]> }
  : T;

type Paths13299<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13299<K, Paths13299<T[K], Prev13299[D]>> : never }[keyof T]
  : never;

type Prev13299 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13299<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13299 {
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

type ConfigPaths13299 = Paths13299<NestedConfig13299>;

interface HeavyProps13299 {
  config: DeepPartial13299<NestedConfig13299>;
  path?: ConfigPaths13299;
}

const HeavyComponent13299 = memo(function HeavyComponent13299({ config }: HeavyProps13299) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13299) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13299 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13299: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13299.displayName = 'HeavyComponent13299';
export default HeavyComponent13299;
