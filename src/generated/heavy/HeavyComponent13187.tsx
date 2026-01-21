'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13187<T> = T extends (infer U)[]
  ? DeepReadonlyArray13187<U>
  : T extends object
  ? DeepReadonlyObject13187<T>
  : T;

interface DeepReadonlyArray13187<T> extends ReadonlyArray<DeepReadonly13187<T>> {}

type DeepReadonlyObject13187<T> = {
  readonly [P in keyof T]: DeepReadonly13187<T[P]>;
};

type UnionToIntersection13187<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13187<T> = UnionToIntersection13187<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13187<T extends unknown[], V> = [...T, V];

type TuplifyUnion13187<T, L = LastOf13187<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13187<TuplifyUnion13187<Exclude<T, L>>, L>;

type DeepPartial13187<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13187<T[P]> }
  : T;

type Paths13187<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13187<K, Paths13187<T[K], Prev13187[D]>> : never }[keyof T]
  : never;

type Prev13187 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13187<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13187 {
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

type ConfigPaths13187 = Paths13187<NestedConfig13187>;

interface HeavyProps13187 {
  config: DeepPartial13187<NestedConfig13187>;
  path?: ConfigPaths13187;
}

const HeavyComponent13187 = memo(function HeavyComponent13187({ config }: HeavyProps13187) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13187) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13187 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13187: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13187.displayName = 'HeavyComponent13187';
export default HeavyComponent13187;
