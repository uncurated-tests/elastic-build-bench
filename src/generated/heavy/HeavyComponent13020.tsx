'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13020<T> = T extends (infer U)[]
  ? DeepReadonlyArray13020<U>
  : T extends object
  ? DeepReadonlyObject13020<T>
  : T;

interface DeepReadonlyArray13020<T> extends ReadonlyArray<DeepReadonly13020<T>> {}

type DeepReadonlyObject13020<T> = {
  readonly [P in keyof T]: DeepReadonly13020<T[P]>;
};

type UnionToIntersection13020<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13020<T> = UnionToIntersection13020<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13020<T extends unknown[], V> = [...T, V];

type TuplifyUnion13020<T, L = LastOf13020<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13020<TuplifyUnion13020<Exclude<T, L>>, L>;

type DeepPartial13020<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13020<T[P]> }
  : T;

type Paths13020<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13020<K, Paths13020<T[K], Prev13020[D]>> : never }[keyof T]
  : never;

type Prev13020 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13020<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13020 {
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

type ConfigPaths13020 = Paths13020<NestedConfig13020>;

interface HeavyProps13020 {
  config: DeepPartial13020<NestedConfig13020>;
  path?: ConfigPaths13020;
}

const HeavyComponent13020 = memo(function HeavyComponent13020({ config }: HeavyProps13020) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13020) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13020 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13020: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13020.displayName = 'HeavyComponent13020';
export default HeavyComponent13020;
