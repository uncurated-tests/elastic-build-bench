'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13470<T> = T extends (infer U)[]
  ? DeepReadonlyArray13470<U>
  : T extends object
  ? DeepReadonlyObject13470<T>
  : T;

interface DeepReadonlyArray13470<T> extends ReadonlyArray<DeepReadonly13470<T>> {}

type DeepReadonlyObject13470<T> = {
  readonly [P in keyof T]: DeepReadonly13470<T[P]>;
};

type UnionToIntersection13470<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13470<T> = UnionToIntersection13470<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13470<T extends unknown[], V> = [...T, V];

type TuplifyUnion13470<T, L = LastOf13470<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13470<TuplifyUnion13470<Exclude<T, L>>, L>;

type DeepPartial13470<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13470<T[P]> }
  : T;

type Paths13470<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13470<K, Paths13470<T[K], Prev13470[D]>> : never }[keyof T]
  : never;

type Prev13470 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13470<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13470 {
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

type ConfigPaths13470 = Paths13470<NestedConfig13470>;

interface HeavyProps13470 {
  config: DeepPartial13470<NestedConfig13470>;
  path?: ConfigPaths13470;
}

const HeavyComponent13470 = memo(function HeavyComponent13470({ config }: HeavyProps13470) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13470) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13470 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13470: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13470.displayName = 'HeavyComponent13470';
export default HeavyComponent13470;
