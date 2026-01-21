'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13677<T> = T extends (infer U)[]
  ? DeepReadonlyArray13677<U>
  : T extends object
  ? DeepReadonlyObject13677<T>
  : T;

interface DeepReadonlyArray13677<T> extends ReadonlyArray<DeepReadonly13677<T>> {}

type DeepReadonlyObject13677<T> = {
  readonly [P in keyof T]: DeepReadonly13677<T[P]>;
};

type UnionToIntersection13677<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13677<T> = UnionToIntersection13677<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13677<T extends unknown[], V> = [...T, V];

type TuplifyUnion13677<T, L = LastOf13677<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13677<TuplifyUnion13677<Exclude<T, L>>, L>;

type DeepPartial13677<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13677<T[P]> }
  : T;

type Paths13677<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13677<K, Paths13677<T[K], Prev13677[D]>> : never }[keyof T]
  : never;

type Prev13677 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13677<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13677 {
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

type ConfigPaths13677 = Paths13677<NestedConfig13677>;

interface HeavyProps13677 {
  config: DeepPartial13677<NestedConfig13677>;
  path?: ConfigPaths13677;
}

const HeavyComponent13677 = memo(function HeavyComponent13677({ config }: HeavyProps13677) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13677) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13677 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13677: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13677.displayName = 'HeavyComponent13677';
export default HeavyComponent13677;
