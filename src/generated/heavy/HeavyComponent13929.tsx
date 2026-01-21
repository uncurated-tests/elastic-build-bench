'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13929<T> = T extends (infer U)[]
  ? DeepReadonlyArray13929<U>
  : T extends object
  ? DeepReadonlyObject13929<T>
  : T;

interface DeepReadonlyArray13929<T> extends ReadonlyArray<DeepReadonly13929<T>> {}

type DeepReadonlyObject13929<T> = {
  readonly [P in keyof T]: DeepReadonly13929<T[P]>;
};

type UnionToIntersection13929<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13929<T> = UnionToIntersection13929<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13929<T extends unknown[], V> = [...T, V];

type TuplifyUnion13929<T, L = LastOf13929<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13929<TuplifyUnion13929<Exclude<T, L>>, L>;

type DeepPartial13929<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13929<T[P]> }
  : T;

type Paths13929<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13929<K, Paths13929<T[K], Prev13929[D]>> : never }[keyof T]
  : never;

type Prev13929 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13929<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13929 {
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

type ConfigPaths13929 = Paths13929<NestedConfig13929>;

interface HeavyProps13929 {
  config: DeepPartial13929<NestedConfig13929>;
  path?: ConfigPaths13929;
}

const HeavyComponent13929 = memo(function HeavyComponent13929({ config }: HeavyProps13929) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13929) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13929 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13929: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13929.displayName = 'HeavyComponent13929';
export default HeavyComponent13929;
