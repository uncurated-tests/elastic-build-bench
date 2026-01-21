'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13112<T> = T extends (infer U)[]
  ? DeepReadonlyArray13112<U>
  : T extends object
  ? DeepReadonlyObject13112<T>
  : T;

interface DeepReadonlyArray13112<T> extends ReadonlyArray<DeepReadonly13112<T>> {}

type DeepReadonlyObject13112<T> = {
  readonly [P in keyof T]: DeepReadonly13112<T[P]>;
};

type UnionToIntersection13112<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13112<T> = UnionToIntersection13112<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13112<T extends unknown[], V> = [...T, V];

type TuplifyUnion13112<T, L = LastOf13112<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13112<TuplifyUnion13112<Exclude<T, L>>, L>;

type DeepPartial13112<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13112<T[P]> }
  : T;

type Paths13112<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13112<K, Paths13112<T[K], Prev13112[D]>> : never }[keyof T]
  : never;

type Prev13112 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13112<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13112 {
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

type ConfigPaths13112 = Paths13112<NestedConfig13112>;

interface HeavyProps13112 {
  config: DeepPartial13112<NestedConfig13112>;
  path?: ConfigPaths13112;
}

const HeavyComponent13112 = memo(function HeavyComponent13112({ config }: HeavyProps13112) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13112) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13112 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13112: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13112.displayName = 'HeavyComponent13112';
export default HeavyComponent13112;
