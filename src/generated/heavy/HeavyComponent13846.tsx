'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13846<T> = T extends (infer U)[]
  ? DeepReadonlyArray13846<U>
  : T extends object
  ? DeepReadonlyObject13846<T>
  : T;

interface DeepReadonlyArray13846<T> extends ReadonlyArray<DeepReadonly13846<T>> {}

type DeepReadonlyObject13846<T> = {
  readonly [P in keyof T]: DeepReadonly13846<T[P]>;
};

type UnionToIntersection13846<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13846<T> = UnionToIntersection13846<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13846<T extends unknown[], V> = [...T, V];

type TuplifyUnion13846<T, L = LastOf13846<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13846<TuplifyUnion13846<Exclude<T, L>>, L>;

type DeepPartial13846<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13846<T[P]> }
  : T;

type Paths13846<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13846<K, Paths13846<T[K], Prev13846[D]>> : never }[keyof T]
  : never;

type Prev13846 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13846<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13846 {
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

type ConfigPaths13846 = Paths13846<NestedConfig13846>;

interface HeavyProps13846 {
  config: DeepPartial13846<NestedConfig13846>;
  path?: ConfigPaths13846;
}

const HeavyComponent13846 = memo(function HeavyComponent13846({ config }: HeavyProps13846) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13846) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13846 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13846: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13846.displayName = 'HeavyComponent13846';
export default HeavyComponent13846;
