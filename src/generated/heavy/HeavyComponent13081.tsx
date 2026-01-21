'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13081<T> = T extends (infer U)[]
  ? DeepReadonlyArray13081<U>
  : T extends object
  ? DeepReadonlyObject13081<T>
  : T;

interface DeepReadonlyArray13081<T> extends ReadonlyArray<DeepReadonly13081<T>> {}

type DeepReadonlyObject13081<T> = {
  readonly [P in keyof T]: DeepReadonly13081<T[P]>;
};

type UnionToIntersection13081<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13081<T> = UnionToIntersection13081<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13081<T extends unknown[], V> = [...T, V];

type TuplifyUnion13081<T, L = LastOf13081<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13081<TuplifyUnion13081<Exclude<T, L>>, L>;

type DeepPartial13081<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13081<T[P]> }
  : T;

type Paths13081<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13081<K, Paths13081<T[K], Prev13081[D]>> : never }[keyof T]
  : never;

type Prev13081 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13081<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13081 {
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

type ConfigPaths13081 = Paths13081<NestedConfig13081>;

interface HeavyProps13081 {
  config: DeepPartial13081<NestedConfig13081>;
  path?: ConfigPaths13081;
}

const HeavyComponent13081 = memo(function HeavyComponent13081({ config }: HeavyProps13081) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13081) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13081 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13081: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13081.displayName = 'HeavyComponent13081';
export default HeavyComponent13081;
