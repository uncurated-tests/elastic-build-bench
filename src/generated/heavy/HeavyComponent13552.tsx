'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13552<T> = T extends (infer U)[]
  ? DeepReadonlyArray13552<U>
  : T extends object
  ? DeepReadonlyObject13552<T>
  : T;

interface DeepReadonlyArray13552<T> extends ReadonlyArray<DeepReadonly13552<T>> {}

type DeepReadonlyObject13552<T> = {
  readonly [P in keyof T]: DeepReadonly13552<T[P]>;
};

type UnionToIntersection13552<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13552<T> = UnionToIntersection13552<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13552<T extends unknown[], V> = [...T, V];

type TuplifyUnion13552<T, L = LastOf13552<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13552<TuplifyUnion13552<Exclude<T, L>>, L>;

type DeepPartial13552<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13552<T[P]> }
  : T;

type Paths13552<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13552<K, Paths13552<T[K], Prev13552[D]>> : never }[keyof T]
  : never;

type Prev13552 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13552<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13552 {
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

type ConfigPaths13552 = Paths13552<NestedConfig13552>;

interface HeavyProps13552 {
  config: DeepPartial13552<NestedConfig13552>;
  path?: ConfigPaths13552;
}

const HeavyComponent13552 = memo(function HeavyComponent13552({ config }: HeavyProps13552) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13552) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13552 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13552: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13552.displayName = 'HeavyComponent13552';
export default HeavyComponent13552;
