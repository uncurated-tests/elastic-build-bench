'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13376<T> = T extends (infer U)[]
  ? DeepReadonlyArray13376<U>
  : T extends object
  ? DeepReadonlyObject13376<T>
  : T;

interface DeepReadonlyArray13376<T> extends ReadonlyArray<DeepReadonly13376<T>> {}

type DeepReadonlyObject13376<T> = {
  readonly [P in keyof T]: DeepReadonly13376<T[P]>;
};

type UnionToIntersection13376<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13376<T> = UnionToIntersection13376<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13376<T extends unknown[], V> = [...T, V];

type TuplifyUnion13376<T, L = LastOf13376<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13376<TuplifyUnion13376<Exclude<T, L>>, L>;

type DeepPartial13376<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13376<T[P]> }
  : T;

type Paths13376<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13376<K, Paths13376<T[K], Prev13376[D]>> : never }[keyof T]
  : never;

type Prev13376 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13376<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13376 {
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

type ConfigPaths13376 = Paths13376<NestedConfig13376>;

interface HeavyProps13376 {
  config: DeepPartial13376<NestedConfig13376>;
  path?: ConfigPaths13376;
}

const HeavyComponent13376 = memo(function HeavyComponent13376({ config }: HeavyProps13376) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13376) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13376 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13376: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13376.displayName = 'HeavyComponent13376';
export default HeavyComponent13376;
