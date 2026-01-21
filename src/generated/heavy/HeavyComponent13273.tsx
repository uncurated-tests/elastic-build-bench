'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13273<T> = T extends (infer U)[]
  ? DeepReadonlyArray13273<U>
  : T extends object
  ? DeepReadonlyObject13273<T>
  : T;

interface DeepReadonlyArray13273<T> extends ReadonlyArray<DeepReadonly13273<T>> {}

type DeepReadonlyObject13273<T> = {
  readonly [P in keyof T]: DeepReadonly13273<T[P]>;
};

type UnionToIntersection13273<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13273<T> = UnionToIntersection13273<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13273<T extends unknown[], V> = [...T, V];

type TuplifyUnion13273<T, L = LastOf13273<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13273<TuplifyUnion13273<Exclude<T, L>>, L>;

type DeepPartial13273<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13273<T[P]> }
  : T;

type Paths13273<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13273<K, Paths13273<T[K], Prev13273[D]>> : never }[keyof T]
  : never;

type Prev13273 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13273<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13273 {
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

type ConfigPaths13273 = Paths13273<NestedConfig13273>;

interface HeavyProps13273 {
  config: DeepPartial13273<NestedConfig13273>;
  path?: ConfigPaths13273;
}

const HeavyComponent13273 = memo(function HeavyComponent13273({ config }: HeavyProps13273) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13273) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13273 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13273: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13273.displayName = 'HeavyComponent13273';
export default HeavyComponent13273;
