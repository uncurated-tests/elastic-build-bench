'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13753<T> = T extends (infer U)[]
  ? DeepReadonlyArray13753<U>
  : T extends object
  ? DeepReadonlyObject13753<T>
  : T;

interface DeepReadonlyArray13753<T> extends ReadonlyArray<DeepReadonly13753<T>> {}

type DeepReadonlyObject13753<T> = {
  readonly [P in keyof T]: DeepReadonly13753<T[P]>;
};

type UnionToIntersection13753<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13753<T> = UnionToIntersection13753<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13753<T extends unknown[], V> = [...T, V];

type TuplifyUnion13753<T, L = LastOf13753<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13753<TuplifyUnion13753<Exclude<T, L>>, L>;

type DeepPartial13753<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13753<T[P]> }
  : T;

type Paths13753<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13753<K, Paths13753<T[K], Prev13753[D]>> : never }[keyof T]
  : never;

type Prev13753 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13753<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13753 {
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

type ConfigPaths13753 = Paths13753<NestedConfig13753>;

interface HeavyProps13753 {
  config: DeepPartial13753<NestedConfig13753>;
  path?: ConfigPaths13753;
}

const HeavyComponent13753 = memo(function HeavyComponent13753({ config }: HeavyProps13753) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13753) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13753 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13753: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13753.displayName = 'HeavyComponent13753';
export default HeavyComponent13753;
