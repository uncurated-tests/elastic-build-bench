'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13816<T> = T extends (infer U)[]
  ? DeepReadonlyArray13816<U>
  : T extends object
  ? DeepReadonlyObject13816<T>
  : T;

interface DeepReadonlyArray13816<T> extends ReadonlyArray<DeepReadonly13816<T>> {}

type DeepReadonlyObject13816<T> = {
  readonly [P in keyof T]: DeepReadonly13816<T[P]>;
};

type UnionToIntersection13816<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13816<T> = UnionToIntersection13816<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13816<T extends unknown[], V> = [...T, V];

type TuplifyUnion13816<T, L = LastOf13816<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13816<TuplifyUnion13816<Exclude<T, L>>, L>;

type DeepPartial13816<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13816<T[P]> }
  : T;

type Paths13816<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13816<K, Paths13816<T[K], Prev13816[D]>> : never }[keyof T]
  : never;

type Prev13816 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13816<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13816 {
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

type ConfigPaths13816 = Paths13816<NestedConfig13816>;

interface HeavyProps13816 {
  config: DeepPartial13816<NestedConfig13816>;
  path?: ConfigPaths13816;
}

const HeavyComponent13816 = memo(function HeavyComponent13816({ config }: HeavyProps13816) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13816) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13816 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13816: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13816.displayName = 'HeavyComponent13816';
export default HeavyComponent13816;
