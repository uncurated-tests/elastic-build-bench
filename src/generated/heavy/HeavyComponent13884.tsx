'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13884<T> = T extends (infer U)[]
  ? DeepReadonlyArray13884<U>
  : T extends object
  ? DeepReadonlyObject13884<T>
  : T;

interface DeepReadonlyArray13884<T> extends ReadonlyArray<DeepReadonly13884<T>> {}

type DeepReadonlyObject13884<T> = {
  readonly [P in keyof T]: DeepReadonly13884<T[P]>;
};

type UnionToIntersection13884<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13884<T> = UnionToIntersection13884<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13884<T extends unknown[], V> = [...T, V];

type TuplifyUnion13884<T, L = LastOf13884<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13884<TuplifyUnion13884<Exclude<T, L>>, L>;

type DeepPartial13884<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13884<T[P]> }
  : T;

type Paths13884<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13884<K, Paths13884<T[K], Prev13884[D]>> : never }[keyof T]
  : never;

type Prev13884 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13884<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13884 {
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

type ConfigPaths13884 = Paths13884<NestedConfig13884>;

interface HeavyProps13884 {
  config: DeepPartial13884<NestedConfig13884>;
  path?: ConfigPaths13884;
}

const HeavyComponent13884 = memo(function HeavyComponent13884({ config }: HeavyProps13884) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13884) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13884 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13884: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13884.displayName = 'HeavyComponent13884';
export default HeavyComponent13884;
