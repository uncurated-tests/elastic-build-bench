'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13477<T> = T extends (infer U)[]
  ? DeepReadonlyArray13477<U>
  : T extends object
  ? DeepReadonlyObject13477<T>
  : T;

interface DeepReadonlyArray13477<T> extends ReadonlyArray<DeepReadonly13477<T>> {}

type DeepReadonlyObject13477<T> = {
  readonly [P in keyof T]: DeepReadonly13477<T[P]>;
};

type UnionToIntersection13477<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13477<T> = UnionToIntersection13477<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13477<T extends unknown[], V> = [...T, V];

type TuplifyUnion13477<T, L = LastOf13477<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13477<TuplifyUnion13477<Exclude<T, L>>, L>;

type DeepPartial13477<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13477<T[P]> }
  : T;

type Paths13477<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13477<K, Paths13477<T[K], Prev13477[D]>> : never }[keyof T]
  : never;

type Prev13477 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13477<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13477 {
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

type ConfigPaths13477 = Paths13477<NestedConfig13477>;

interface HeavyProps13477 {
  config: DeepPartial13477<NestedConfig13477>;
  path?: ConfigPaths13477;
}

const HeavyComponent13477 = memo(function HeavyComponent13477({ config }: HeavyProps13477) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13477) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13477 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13477: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13477.displayName = 'HeavyComponent13477';
export default HeavyComponent13477;
