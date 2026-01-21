'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13915<T> = T extends (infer U)[]
  ? DeepReadonlyArray13915<U>
  : T extends object
  ? DeepReadonlyObject13915<T>
  : T;

interface DeepReadonlyArray13915<T> extends ReadonlyArray<DeepReadonly13915<T>> {}

type DeepReadonlyObject13915<T> = {
  readonly [P in keyof T]: DeepReadonly13915<T[P]>;
};

type UnionToIntersection13915<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13915<T> = UnionToIntersection13915<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13915<T extends unknown[], V> = [...T, V];

type TuplifyUnion13915<T, L = LastOf13915<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13915<TuplifyUnion13915<Exclude<T, L>>, L>;

type DeepPartial13915<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13915<T[P]> }
  : T;

type Paths13915<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13915<K, Paths13915<T[K], Prev13915[D]>> : never }[keyof T]
  : never;

type Prev13915 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13915<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13915 {
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

type ConfigPaths13915 = Paths13915<NestedConfig13915>;

interface HeavyProps13915 {
  config: DeepPartial13915<NestedConfig13915>;
  path?: ConfigPaths13915;
}

const HeavyComponent13915 = memo(function HeavyComponent13915({ config }: HeavyProps13915) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13915) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13915 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13915: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13915.displayName = 'HeavyComponent13915';
export default HeavyComponent13915;
