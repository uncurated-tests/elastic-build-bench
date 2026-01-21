'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13029<T> = T extends (infer U)[]
  ? DeepReadonlyArray13029<U>
  : T extends object
  ? DeepReadonlyObject13029<T>
  : T;

interface DeepReadonlyArray13029<T> extends ReadonlyArray<DeepReadonly13029<T>> {}

type DeepReadonlyObject13029<T> = {
  readonly [P in keyof T]: DeepReadonly13029<T[P]>;
};

type UnionToIntersection13029<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13029<T> = UnionToIntersection13029<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13029<T extends unknown[], V> = [...T, V];

type TuplifyUnion13029<T, L = LastOf13029<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13029<TuplifyUnion13029<Exclude<T, L>>, L>;

type DeepPartial13029<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13029<T[P]> }
  : T;

type Paths13029<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13029<K, Paths13029<T[K], Prev13029[D]>> : never }[keyof T]
  : never;

type Prev13029 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13029<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13029 {
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

type ConfigPaths13029 = Paths13029<NestedConfig13029>;

interface HeavyProps13029 {
  config: DeepPartial13029<NestedConfig13029>;
  path?: ConfigPaths13029;
}

const HeavyComponent13029 = memo(function HeavyComponent13029({ config }: HeavyProps13029) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13029) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13029 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13029: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13029.displayName = 'HeavyComponent13029';
export default HeavyComponent13029;
