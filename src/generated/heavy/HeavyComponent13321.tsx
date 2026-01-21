'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13321<T> = T extends (infer U)[]
  ? DeepReadonlyArray13321<U>
  : T extends object
  ? DeepReadonlyObject13321<T>
  : T;

interface DeepReadonlyArray13321<T> extends ReadonlyArray<DeepReadonly13321<T>> {}

type DeepReadonlyObject13321<T> = {
  readonly [P in keyof T]: DeepReadonly13321<T[P]>;
};

type UnionToIntersection13321<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13321<T> = UnionToIntersection13321<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13321<T extends unknown[], V> = [...T, V];

type TuplifyUnion13321<T, L = LastOf13321<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13321<TuplifyUnion13321<Exclude<T, L>>, L>;

type DeepPartial13321<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13321<T[P]> }
  : T;

type Paths13321<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13321<K, Paths13321<T[K], Prev13321[D]>> : never }[keyof T]
  : never;

type Prev13321 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13321<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13321 {
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

type ConfigPaths13321 = Paths13321<NestedConfig13321>;

interface HeavyProps13321 {
  config: DeepPartial13321<NestedConfig13321>;
  path?: ConfigPaths13321;
}

const HeavyComponent13321 = memo(function HeavyComponent13321({ config }: HeavyProps13321) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13321) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13321 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13321: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13321.displayName = 'HeavyComponent13321';
export default HeavyComponent13321;
