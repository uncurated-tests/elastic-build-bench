'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13482<T> = T extends (infer U)[]
  ? DeepReadonlyArray13482<U>
  : T extends object
  ? DeepReadonlyObject13482<T>
  : T;

interface DeepReadonlyArray13482<T> extends ReadonlyArray<DeepReadonly13482<T>> {}

type DeepReadonlyObject13482<T> = {
  readonly [P in keyof T]: DeepReadonly13482<T[P]>;
};

type UnionToIntersection13482<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13482<T> = UnionToIntersection13482<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13482<T extends unknown[], V> = [...T, V];

type TuplifyUnion13482<T, L = LastOf13482<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13482<TuplifyUnion13482<Exclude<T, L>>, L>;

type DeepPartial13482<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13482<T[P]> }
  : T;

type Paths13482<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13482<K, Paths13482<T[K], Prev13482[D]>> : never }[keyof T]
  : never;

type Prev13482 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13482<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13482 {
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

type ConfigPaths13482 = Paths13482<NestedConfig13482>;

interface HeavyProps13482 {
  config: DeepPartial13482<NestedConfig13482>;
  path?: ConfigPaths13482;
}

const HeavyComponent13482 = memo(function HeavyComponent13482({ config }: HeavyProps13482) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13482) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13482 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13482: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13482.displayName = 'HeavyComponent13482';
export default HeavyComponent13482;
