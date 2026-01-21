'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13152<T> = T extends (infer U)[]
  ? DeepReadonlyArray13152<U>
  : T extends object
  ? DeepReadonlyObject13152<T>
  : T;

interface DeepReadonlyArray13152<T> extends ReadonlyArray<DeepReadonly13152<T>> {}

type DeepReadonlyObject13152<T> = {
  readonly [P in keyof T]: DeepReadonly13152<T[P]>;
};

type UnionToIntersection13152<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13152<T> = UnionToIntersection13152<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13152<T extends unknown[], V> = [...T, V];

type TuplifyUnion13152<T, L = LastOf13152<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13152<TuplifyUnion13152<Exclude<T, L>>, L>;

type DeepPartial13152<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13152<T[P]> }
  : T;

type Paths13152<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13152<K, Paths13152<T[K], Prev13152[D]>> : never }[keyof T]
  : never;

type Prev13152 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13152<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13152 {
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

type ConfigPaths13152 = Paths13152<NestedConfig13152>;

interface HeavyProps13152 {
  config: DeepPartial13152<NestedConfig13152>;
  path?: ConfigPaths13152;
}

const HeavyComponent13152 = memo(function HeavyComponent13152({ config }: HeavyProps13152) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13152) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13152 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13152: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13152.displayName = 'HeavyComponent13152';
export default HeavyComponent13152;
