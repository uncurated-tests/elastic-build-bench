'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13023<T> = T extends (infer U)[]
  ? DeepReadonlyArray13023<U>
  : T extends object
  ? DeepReadonlyObject13023<T>
  : T;

interface DeepReadonlyArray13023<T> extends ReadonlyArray<DeepReadonly13023<T>> {}

type DeepReadonlyObject13023<T> = {
  readonly [P in keyof T]: DeepReadonly13023<T[P]>;
};

type UnionToIntersection13023<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13023<T> = UnionToIntersection13023<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13023<T extends unknown[], V> = [...T, V];

type TuplifyUnion13023<T, L = LastOf13023<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13023<TuplifyUnion13023<Exclude<T, L>>, L>;

type DeepPartial13023<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13023<T[P]> }
  : T;

type Paths13023<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13023<K, Paths13023<T[K], Prev13023[D]>> : never }[keyof T]
  : never;

type Prev13023 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13023<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13023 {
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

type ConfigPaths13023 = Paths13023<NestedConfig13023>;

interface HeavyProps13023 {
  config: DeepPartial13023<NestedConfig13023>;
  path?: ConfigPaths13023;
}

const HeavyComponent13023 = memo(function HeavyComponent13023({ config }: HeavyProps13023) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13023) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13023 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13023: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13023.displayName = 'HeavyComponent13023';
export default HeavyComponent13023;
