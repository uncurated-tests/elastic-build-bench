'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13181<T> = T extends (infer U)[]
  ? DeepReadonlyArray13181<U>
  : T extends object
  ? DeepReadonlyObject13181<T>
  : T;

interface DeepReadonlyArray13181<T> extends ReadonlyArray<DeepReadonly13181<T>> {}

type DeepReadonlyObject13181<T> = {
  readonly [P in keyof T]: DeepReadonly13181<T[P]>;
};

type UnionToIntersection13181<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13181<T> = UnionToIntersection13181<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13181<T extends unknown[], V> = [...T, V];

type TuplifyUnion13181<T, L = LastOf13181<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13181<TuplifyUnion13181<Exclude<T, L>>, L>;

type DeepPartial13181<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13181<T[P]> }
  : T;

type Paths13181<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13181<K, Paths13181<T[K], Prev13181[D]>> : never }[keyof T]
  : never;

type Prev13181 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13181<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13181 {
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

type ConfigPaths13181 = Paths13181<NestedConfig13181>;

interface HeavyProps13181 {
  config: DeepPartial13181<NestedConfig13181>;
  path?: ConfigPaths13181;
}

const HeavyComponent13181 = memo(function HeavyComponent13181({ config }: HeavyProps13181) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13181) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13181 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13181: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13181.displayName = 'HeavyComponent13181';
export default HeavyComponent13181;
