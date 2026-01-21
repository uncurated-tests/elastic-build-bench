'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13565<T> = T extends (infer U)[]
  ? DeepReadonlyArray13565<U>
  : T extends object
  ? DeepReadonlyObject13565<T>
  : T;

interface DeepReadonlyArray13565<T> extends ReadonlyArray<DeepReadonly13565<T>> {}

type DeepReadonlyObject13565<T> = {
  readonly [P in keyof T]: DeepReadonly13565<T[P]>;
};

type UnionToIntersection13565<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13565<T> = UnionToIntersection13565<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13565<T extends unknown[], V> = [...T, V];

type TuplifyUnion13565<T, L = LastOf13565<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13565<TuplifyUnion13565<Exclude<T, L>>, L>;

type DeepPartial13565<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13565<T[P]> }
  : T;

type Paths13565<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13565<K, Paths13565<T[K], Prev13565[D]>> : never }[keyof T]
  : never;

type Prev13565 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13565<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13565 {
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

type ConfigPaths13565 = Paths13565<NestedConfig13565>;

interface HeavyProps13565 {
  config: DeepPartial13565<NestedConfig13565>;
  path?: ConfigPaths13565;
}

const HeavyComponent13565 = memo(function HeavyComponent13565({ config }: HeavyProps13565) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13565) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13565 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13565: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13565.displayName = 'HeavyComponent13565';
export default HeavyComponent13565;
