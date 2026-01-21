'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13500<T> = T extends (infer U)[]
  ? DeepReadonlyArray13500<U>
  : T extends object
  ? DeepReadonlyObject13500<T>
  : T;

interface DeepReadonlyArray13500<T> extends ReadonlyArray<DeepReadonly13500<T>> {}

type DeepReadonlyObject13500<T> = {
  readonly [P in keyof T]: DeepReadonly13500<T[P]>;
};

type UnionToIntersection13500<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13500<T> = UnionToIntersection13500<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13500<T extends unknown[], V> = [...T, V];

type TuplifyUnion13500<T, L = LastOf13500<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13500<TuplifyUnion13500<Exclude<T, L>>, L>;

type DeepPartial13500<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13500<T[P]> }
  : T;

type Paths13500<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13500<K, Paths13500<T[K], Prev13500[D]>> : never }[keyof T]
  : never;

type Prev13500 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13500<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13500 {
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

type ConfigPaths13500 = Paths13500<NestedConfig13500>;

interface HeavyProps13500 {
  config: DeepPartial13500<NestedConfig13500>;
  path?: ConfigPaths13500;
}

const HeavyComponent13500 = memo(function HeavyComponent13500({ config }: HeavyProps13500) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13500) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13500 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13500: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13500.displayName = 'HeavyComponent13500';
export default HeavyComponent13500;
