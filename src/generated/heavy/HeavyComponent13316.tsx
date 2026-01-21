'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13316<T> = T extends (infer U)[]
  ? DeepReadonlyArray13316<U>
  : T extends object
  ? DeepReadonlyObject13316<T>
  : T;

interface DeepReadonlyArray13316<T> extends ReadonlyArray<DeepReadonly13316<T>> {}

type DeepReadonlyObject13316<T> = {
  readonly [P in keyof T]: DeepReadonly13316<T[P]>;
};

type UnionToIntersection13316<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13316<T> = UnionToIntersection13316<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13316<T extends unknown[], V> = [...T, V];

type TuplifyUnion13316<T, L = LastOf13316<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13316<TuplifyUnion13316<Exclude<T, L>>, L>;

type DeepPartial13316<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13316<T[P]> }
  : T;

type Paths13316<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13316<K, Paths13316<T[K], Prev13316[D]>> : never }[keyof T]
  : never;

type Prev13316 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13316<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13316 {
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

type ConfigPaths13316 = Paths13316<NestedConfig13316>;

interface HeavyProps13316 {
  config: DeepPartial13316<NestedConfig13316>;
  path?: ConfigPaths13316;
}

const HeavyComponent13316 = memo(function HeavyComponent13316({ config }: HeavyProps13316) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13316) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13316 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13316: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13316.displayName = 'HeavyComponent13316';
export default HeavyComponent13316;
