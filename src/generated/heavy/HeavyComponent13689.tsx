'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13689<T> = T extends (infer U)[]
  ? DeepReadonlyArray13689<U>
  : T extends object
  ? DeepReadonlyObject13689<T>
  : T;

interface DeepReadonlyArray13689<T> extends ReadonlyArray<DeepReadonly13689<T>> {}

type DeepReadonlyObject13689<T> = {
  readonly [P in keyof T]: DeepReadonly13689<T[P]>;
};

type UnionToIntersection13689<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13689<T> = UnionToIntersection13689<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13689<T extends unknown[], V> = [...T, V];

type TuplifyUnion13689<T, L = LastOf13689<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13689<TuplifyUnion13689<Exclude<T, L>>, L>;

type DeepPartial13689<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13689<T[P]> }
  : T;

type Paths13689<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13689<K, Paths13689<T[K], Prev13689[D]>> : never }[keyof T]
  : never;

type Prev13689 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13689<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13689 {
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

type ConfigPaths13689 = Paths13689<NestedConfig13689>;

interface HeavyProps13689 {
  config: DeepPartial13689<NestedConfig13689>;
  path?: ConfigPaths13689;
}

const HeavyComponent13689 = memo(function HeavyComponent13689({ config }: HeavyProps13689) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13689) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13689 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13689: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13689.displayName = 'HeavyComponent13689';
export default HeavyComponent13689;
