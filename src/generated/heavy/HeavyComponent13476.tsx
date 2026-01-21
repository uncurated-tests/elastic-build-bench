'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13476<T> = T extends (infer U)[]
  ? DeepReadonlyArray13476<U>
  : T extends object
  ? DeepReadonlyObject13476<T>
  : T;

interface DeepReadonlyArray13476<T> extends ReadonlyArray<DeepReadonly13476<T>> {}

type DeepReadonlyObject13476<T> = {
  readonly [P in keyof T]: DeepReadonly13476<T[P]>;
};

type UnionToIntersection13476<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13476<T> = UnionToIntersection13476<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13476<T extends unknown[], V> = [...T, V];

type TuplifyUnion13476<T, L = LastOf13476<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13476<TuplifyUnion13476<Exclude<T, L>>, L>;

type DeepPartial13476<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13476<T[P]> }
  : T;

type Paths13476<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13476<K, Paths13476<T[K], Prev13476[D]>> : never }[keyof T]
  : never;

type Prev13476 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13476<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13476 {
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

type ConfigPaths13476 = Paths13476<NestedConfig13476>;

interface HeavyProps13476 {
  config: DeepPartial13476<NestedConfig13476>;
  path?: ConfigPaths13476;
}

const HeavyComponent13476 = memo(function HeavyComponent13476({ config }: HeavyProps13476) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13476) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13476 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13476: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13476.displayName = 'HeavyComponent13476';
export default HeavyComponent13476;
