'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13240<T> = T extends (infer U)[]
  ? DeepReadonlyArray13240<U>
  : T extends object
  ? DeepReadonlyObject13240<T>
  : T;

interface DeepReadonlyArray13240<T> extends ReadonlyArray<DeepReadonly13240<T>> {}

type DeepReadonlyObject13240<T> = {
  readonly [P in keyof T]: DeepReadonly13240<T[P]>;
};

type UnionToIntersection13240<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13240<T> = UnionToIntersection13240<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13240<T extends unknown[], V> = [...T, V];

type TuplifyUnion13240<T, L = LastOf13240<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13240<TuplifyUnion13240<Exclude<T, L>>, L>;

type DeepPartial13240<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13240<T[P]> }
  : T;

type Paths13240<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13240<K, Paths13240<T[K], Prev13240[D]>> : never }[keyof T]
  : never;

type Prev13240 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13240<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13240 {
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

type ConfigPaths13240 = Paths13240<NestedConfig13240>;

interface HeavyProps13240 {
  config: DeepPartial13240<NestedConfig13240>;
  path?: ConfigPaths13240;
}

const HeavyComponent13240 = memo(function HeavyComponent13240({ config }: HeavyProps13240) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13240) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13240 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13240: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13240.displayName = 'HeavyComponent13240';
export default HeavyComponent13240;
