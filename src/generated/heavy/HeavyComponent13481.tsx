'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13481<T> = T extends (infer U)[]
  ? DeepReadonlyArray13481<U>
  : T extends object
  ? DeepReadonlyObject13481<T>
  : T;

interface DeepReadonlyArray13481<T> extends ReadonlyArray<DeepReadonly13481<T>> {}

type DeepReadonlyObject13481<T> = {
  readonly [P in keyof T]: DeepReadonly13481<T[P]>;
};

type UnionToIntersection13481<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13481<T> = UnionToIntersection13481<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13481<T extends unknown[], V> = [...T, V];

type TuplifyUnion13481<T, L = LastOf13481<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13481<TuplifyUnion13481<Exclude<T, L>>, L>;

type DeepPartial13481<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13481<T[P]> }
  : T;

type Paths13481<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13481<K, Paths13481<T[K], Prev13481[D]>> : never }[keyof T]
  : never;

type Prev13481 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13481<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13481 {
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

type ConfigPaths13481 = Paths13481<NestedConfig13481>;

interface HeavyProps13481 {
  config: DeepPartial13481<NestedConfig13481>;
  path?: ConfigPaths13481;
}

const HeavyComponent13481 = memo(function HeavyComponent13481({ config }: HeavyProps13481) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13481) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13481 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13481: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13481.displayName = 'HeavyComponent13481';
export default HeavyComponent13481;
