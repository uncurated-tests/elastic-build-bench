'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13740<T> = T extends (infer U)[]
  ? DeepReadonlyArray13740<U>
  : T extends object
  ? DeepReadonlyObject13740<T>
  : T;

interface DeepReadonlyArray13740<T> extends ReadonlyArray<DeepReadonly13740<T>> {}

type DeepReadonlyObject13740<T> = {
  readonly [P in keyof T]: DeepReadonly13740<T[P]>;
};

type UnionToIntersection13740<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13740<T> = UnionToIntersection13740<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13740<T extends unknown[], V> = [...T, V];

type TuplifyUnion13740<T, L = LastOf13740<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13740<TuplifyUnion13740<Exclude<T, L>>, L>;

type DeepPartial13740<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13740<T[P]> }
  : T;

type Paths13740<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13740<K, Paths13740<T[K], Prev13740[D]>> : never }[keyof T]
  : never;

type Prev13740 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13740<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13740 {
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

type ConfigPaths13740 = Paths13740<NestedConfig13740>;

interface HeavyProps13740 {
  config: DeepPartial13740<NestedConfig13740>;
  path?: ConfigPaths13740;
}

const HeavyComponent13740 = memo(function HeavyComponent13740({ config }: HeavyProps13740) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13740) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13740 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13740: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13740.displayName = 'HeavyComponent13740';
export default HeavyComponent13740;
