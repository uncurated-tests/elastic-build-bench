'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13854<T> = T extends (infer U)[]
  ? DeepReadonlyArray13854<U>
  : T extends object
  ? DeepReadonlyObject13854<T>
  : T;

interface DeepReadonlyArray13854<T> extends ReadonlyArray<DeepReadonly13854<T>> {}

type DeepReadonlyObject13854<T> = {
  readonly [P in keyof T]: DeepReadonly13854<T[P]>;
};

type UnionToIntersection13854<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13854<T> = UnionToIntersection13854<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13854<T extends unknown[], V> = [...T, V];

type TuplifyUnion13854<T, L = LastOf13854<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13854<TuplifyUnion13854<Exclude<T, L>>, L>;

type DeepPartial13854<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13854<T[P]> }
  : T;

type Paths13854<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13854<K, Paths13854<T[K], Prev13854[D]>> : never }[keyof T]
  : never;

type Prev13854 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13854<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13854 {
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

type ConfigPaths13854 = Paths13854<NestedConfig13854>;

interface HeavyProps13854 {
  config: DeepPartial13854<NestedConfig13854>;
  path?: ConfigPaths13854;
}

const HeavyComponent13854 = memo(function HeavyComponent13854({ config }: HeavyProps13854) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13854) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13854 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13854: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13854.displayName = 'HeavyComponent13854';
export default HeavyComponent13854;
