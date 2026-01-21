'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13354<T> = T extends (infer U)[]
  ? DeepReadonlyArray13354<U>
  : T extends object
  ? DeepReadonlyObject13354<T>
  : T;

interface DeepReadonlyArray13354<T> extends ReadonlyArray<DeepReadonly13354<T>> {}

type DeepReadonlyObject13354<T> = {
  readonly [P in keyof T]: DeepReadonly13354<T[P]>;
};

type UnionToIntersection13354<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13354<T> = UnionToIntersection13354<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13354<T extends unknown[], V> = [...T, V];

type TuplifyUnion13354<T, L = LastOf13354<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13354<TuplifyUnion13354<Exclude<T, L>>, L>;

type DeepPartial13354<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13354<T[P]> }
  : T;

type Paths13354<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13354<K, Paths13354<T[K], Prev13354[D]>> : never }[keyof T]
  : never;

type Prev13354 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13354<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13354 {
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

type ConfigPaths13354 = Paths13354<NestedConfig13354>;

interface HeavyProps13354 {
  config: DeepPartial13354<NestedConfig13354>;
  path?: ConfigPaths13354;
}

const HeavyComponent13354 = memo(function HeavyComponent13354({ config }: HeavyProps13354) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13354) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13354 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13354: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13354.displayName = 'HeavyComponent13354';
export default HeavyComponent13354;
