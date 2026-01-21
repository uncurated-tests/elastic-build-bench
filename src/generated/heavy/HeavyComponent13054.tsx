'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13054<T> = T extends (infer U)[]
  ? DeepReadonlyArray13054<U>
  : T extends object
  ? DeepReadonlyObject13054<T>
  : T;

interface DeepReadonlyArray13054<T> extends ReadonlyArray<DeepReadonly13054<T>> {}

type DeepReadonlyObject13054<T> = {
  readonly [P in keyof T]: DeepReadonly13054<T[P]>;
};

type UnionToIntersection13054<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13054<T> = UnionToIntersection13054<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13054<T extends unknown[], V> = [...T, V];

type TuplifyUnion13054<T, L = LastOf13054<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13054<TuplifyUnion13054<Exclude<T, L>>, L>;

type DeepPartial13054<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13054<T[P]> }
  : T;

type Paths13054<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13054<K, Paths13054<T[K], Prev13054[D]>> : never }[keyof T]
  : never;

type Prev13054 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13054<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13054 {
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

type ConfigPaths13054 = Paths13054<NestedConfig13054>;

interface HeavyProps13054 {
  config: DeepPartial13054<NestedConfig13054>;
  path?: ConfigPaths13054;
}

const HeavyComponent13054 = memo(function HeavyComponent13054({ config }: HeavyProps13054) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13054) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13054 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13054: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13054.displayName = 'HeavyComponent13054';
export default HeavyComponent13054;
