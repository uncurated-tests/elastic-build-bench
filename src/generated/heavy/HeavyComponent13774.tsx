'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13774<T> = T extends (infer U)[]
  ? DeepReadonlyArray13774<U>
  : T extends object
  ? DeepReadonlyObject13774<T>
  : T;

interface DeepReadonlyArray13774<T> extends ReadonlyArray<DeepReadonly13774<T>> {}

type DeepReadonlyObject13774<T> = {
  readonly [P in keyof T]: DeepReadonly13774<T[P]>;
};

type UnionToIntersection13774<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13774<T> = UnionToIntersection13774<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13774<T extends unknown[], V> = [...T, V];

type TuplifyUnion13774<T, L = LastOf13774<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13774<TuplifyUnion13774<Exclude<T, L>>, L>;

type DeepPartial13774<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13774<T[P]> }
  : T;

type Paths13774<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13774<K, Paths13774<T[K], Prev13774[D]>> : never }[keyof T]
  : never;

type Prev13774 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13774<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13774 {
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

type ConfigPaths13774 = Paths13774<NestedConfig13774>;

interface HeavyProps13774 {
  config: DeepPartial13774<NestedConfig13774>;
  path?: ConfigPaths13774;
}

const HeavyComponent13774 = memo(function HeavyComponent13774({ config }: HeavyProps13774) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13774) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13774 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13774: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13774.displayName = 'HeavyComponent13774';
export default HeavyComponent13774;
