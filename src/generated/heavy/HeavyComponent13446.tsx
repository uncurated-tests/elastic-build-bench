'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13446<T> = T extends (infer U)[]
  ? DeepReadonlyArray13446<U>
  : T extends object
  ? DeepReadonlyObject13446<T>
  : T;

interface DeepReadonlyArray13446<T> extends ReadonlyArray<DeepReadonly13446<T>> {}

type DeepReadonlyObject13446<T> = {
  readonly [P in keyof T]: DeepReadonly13446<T[P]>;
};

type UnionToIntersection13446<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13446<T> = UnionToIntersection13446<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13446<T extends unknown[], V> = [...T, V];

type TuplifyUnion13446<T, L = LastOf13446<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13446<TuplifyUnion13446<Exclude<T, L>>, L>;

type DeepPartial13446<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13446<T[P]> }
  : T;

type Paths13446<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13446<K, Paths13446<T[K], Prev13446[D]>> : never }[keyof T]
  : never;

type Prev13446 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13446<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13446 {
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

type ConfigPaths13446 = Paths13446<NestedConfig13446>;

interface HeavyProps13446 {
  config: DeepPartial13446<NestedConfig13446>;
  path?: ConfigPaths13446;
}

const HeavyComponent13446 = memo(function HeavyComponent13446({ config }: HeavyProps13446) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13446) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13446 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13446: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13446.displayName = 'HeavyComponent13446';
export default HeavyComponent13446;
