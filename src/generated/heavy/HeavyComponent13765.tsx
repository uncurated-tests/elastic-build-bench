'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13765<T> = T extends (infer U)[]
  ? DeepReadonlyArray13765<U>
  : T extends object
  ? DeepReadonlyObject13765<T>
  : T;

interface DeepReadonlyArray13765<T> extends ReadonlyArray<DeepReadonly13765<T>> {}

type DeepReadonlyObject13765<T> = {
  readonly [P in keyof T]: DeepReadonly13765<T[P]>;
};

type UnionToIntersection13765<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13765<T> = UnionToIntersection13765<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13765<T extends unknown[], V> = [...T, V];

type TuplifyUnion13765<T, L = LastOf13765<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13765<TuplifyUnion13765<Exclude<T, L>>, L>;

type DeepPartial13765<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13765<T[P]> }
  : T;

type Paths13765<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13765<K, Paths13765<T[K], Prev13765[D]>> : never }[keyof T]
  : never;

type Prev13765 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13765<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13765 {
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

type ConfigPaths13765 = Paths13765<NestedConfig13765>;

interface HeavyProps13765 {
  config: DeepPartial13765<NestedConfig13765>;
  path?: ConfigPaths13765;
}

const HeavyComponent13765 = memo(function HeavyComponent13765({ config }: HeavyProps13765) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13765) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13765 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13765: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13765.displayName = 'HeavyComponent13765';
export default HeavyComponent13765;
