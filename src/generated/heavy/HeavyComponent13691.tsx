'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13691<T> = T extends (infer U)[]
  ? DeepReadonlyArray13691<U>
  : T extends object
  ? DeepReadonlyObject13691<T>
  : T;

interface DeepReadonlyArray13691<T> extends ReadonlyArray<DeepReadonly13691<T>> {}

type DeepReadonlyObject13691<T> = {
  readonly [P in keyof T]: DeepReadonly13691<T[P]>;
};

type UnionToIntersection13691<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13691<T> = UnionToIntersection13691<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13691<T extends unknown[], V> = [...T, V];

type TuplifyUnion13691<T, L = LastOf13691<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13691<TuplifyUnion13691<Exclude<T, L>>, L>;

type DeepPartial13691<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13691<T[P]> }
  : T;

type Paths13691<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13691<K, Paths13691<T[K], Prev13691[D]>> : never }[keyof T]
  : never;

type Prev13691 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13691<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13691 {
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

type ConfigPaths13691 = Paths13691<NestedConfig13691>;

interface HeavyProps13691 {
  config: DeepPartial13691<NestedConfig13691>;
  path?: ConfigPaths13691;
}

const HeavyComponent13691 = memo(function HeavyComponent13691({ config }: HeavyProps13691) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13691) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13691 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13691: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13691.displayName = 'HeavyComponent13691';
export default HeavyComponent13691;
