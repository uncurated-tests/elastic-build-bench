'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13541<T> = T extends (infer U)[]
  ? DeepReadonlyArray13541<U>
  : T extends object
  ? DeepReadonlyObject13541<T>
  : T;

interface DeepReadonlyArray13541<T> extends ReadonlyArray<DeepReadonly13541<T>> {}

type DeepReadonlyObject13541<T> = {
  readonly [P in keyof T]: DeepReadonly13541<T[P]>;
};

type UnionToIntersection13541<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13541<T> = UnionToIntersection13541<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13541<T extends unknown[], V> = [...T, V];

type TuplifyUnion13541<T, L = LastOf13541<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13541<TuplifyUnion13541<Exclude<T, L>>, L>;

type DeepPartial13541<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13541<T[P]> }
  : T;

type Paths13541<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13541<K, Paths13541<T[K], Prev13541[D]>> : never }[keyof T]
  : never;

type Prev13541 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13541<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13541 {
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

type ConfigPaths13541 = Paths13541<NestedConfig13541>;

interface HeavyProps13541 {
  config: DeepPartial13541<NestedConfig13541>;
  path?: ConfigPaths13541;
}

const HeavyComponent13541 = memo(function HeavyComponent13541({ config }: HeavyProps13541) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13541) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13541 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13541: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13541.displayName = 'HeavyComponent13541';
export default HeavyComponent13541;
