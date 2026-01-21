'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13701<T> = T extends (infer U)[]
  ? DeepReadonlyArray13701<U>
  : T extends object
  ? DeepReadonlyObject13701<T>
  : T;

interface DeepReadonlyArray13701<T> extends ReadonlyArray<DeepReadonly13701<T>> {}

type DeepReadonlyObject13701<T> = {
  readonly [P in keyof T]: DeepReadonly13701<T[P]>;
};

type UnionToIntersection13701<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13701<T> = UnionToIntersection13701<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13701<T extends unknown[], V> = [...T, V];

type TuplifyUnion13701<T, L = LastOf13701<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13701<TuplifyUnion13701<Exclude<T, L>>, L>;

type DeepPartial13701<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13701<T[P]> }
  : T;

type Paths13701<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13701<K, Paths13701<T[K], Prev13701[D]>> : never }[keyof T]
  : never;

type Prev13701 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13701<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13701 {
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

type ConfigPaths13701 = Paths13701<NestedConfig13701>;

interface HeavyProps13701 {
  config: DeepPartial13701<NestedConfig13701>;
  path?: ConfigPaths13701;
}

const HeavyComponent13701 = memo(function HeavyComponent13701({ config }: HeavyProps13701) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13701) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13701 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13701: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13701.displayName = 'HeavyComponent13701';
export default HeavyComponent13701;
