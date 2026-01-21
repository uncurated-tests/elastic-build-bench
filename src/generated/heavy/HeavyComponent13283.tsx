'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13283<T> = T extends (infer U)[]
  ? DeepReadonlyArray13283<U>
  : T extends object
  ? DeepReadonlyObject13283<T>
  : T;

interface DeepReadonlyArray13283<T> extends ReadonlyArray<DeepReadonly13283<T>> {}

type DeepReadonlyObject13283<T> = {
  readonly [P in keyof T]: DeepReadonly13283<T[P]>;
};

type UnionToIntersection13283<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13283<T> = UnionToIntersection13283<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13283<T extends unknown[], V> = [...T, V];

type TuplifyUnion13283<T, L = LastOf13283<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13283<TuplifyUnion13283<Exclude<T, L>>, L>;

type DeepPartial13283<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13283<T[P]> }
  : T;

type Paths13283<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13283<K, Paths13283<T[K], Prev13283[D]>> : never }[keyof T]
  : never;

type Prev13283 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13283<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13283 {
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

type ConfigPaths13283 = Paths13283<NestedConfig13283>;

interface HeavyProps13283 {
  config: DeepPartial13283<NestedConfig13283>;
  path?: ConfigPaths13283;
}

const HeavyComponent13283 = memo(function HeavyComponent13283({ config }: HeavyProps13283) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13283) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13283 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13283: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13283.displayName = 'HeavyComponent13283';
export default HeavyComponent13283;
