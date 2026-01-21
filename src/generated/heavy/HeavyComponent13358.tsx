'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13358<T> = T extends (infer U)[]
  ? DeepReadonlyArray13358<U>
  : T extends object
  ? DeepReadonlyObject13358<T>
  : T;

interface DeepReadonlyArray13358<T> extends ReadonlyArray<DeepReadonly13358<T>> {}

type DeepReadonlyObject13358<T> = {
  readonly [P in keyof T]: DeepReadonly13358<T[P]>;
};

type UnionToIntersection13358<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13358<T> = UnionToIntersection13358<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13358<T extends unknown[], V> = [...T, V];

type TuplifyUnion13358<T, L = LastOf13358<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13358<TuplifyUnion13358<Exclude<T, L>>, L>;

type DeepPartial13358<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13358<T[P]> }
  : T;

type Paths13358<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13358<K, Paths13358<T[K], Prev13358[D]>> : never }[keyof T]
  : never;

type Prev13358 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13358<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13358 {
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

type ConfigPaths13358 = Paths13358<NestedConfig13358>;

interface HeavyProps13358 {
  config: DeepPartial13358<NestedConfig13358>;
  path?: ConfigPaths13358;
}

const HeavyComponent13358 = memo(function HeavyComponent13358({ config }: HeavyProps13358) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13358) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13358 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13358: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13358.displayName = 'HeavyComponent13358';
export default HeavyComponent13358;
