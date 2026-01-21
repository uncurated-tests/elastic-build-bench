'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13575<T> = T extends (infer U)[]
  ? DeepReadonlyArray13575<U>
  : T extends object
  ? DeepReadonlyObject13575<T>
  : T;

interface DeepReadonlyArray13575<T> extends ReadonlyArray<DeepReadonly13575<T>> {}

type DeepReadonlyObject13575<T> = {
  readonly [P in keyof T]: DeepReadonly13575<T[P]>;
};

type UnionToIntersection13575<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13575<T> = UnionToIntersection13575<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13575<T extends unknown[], V> = [...T, V];

type TuplifyUnion13575<T, L = LastOf13575<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13575<TuplifyUnion13575<Exclude<T, L>>, L>;

type DeepPartial13575<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13575<T[P]> }
  : T;

type Paths13575<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13575<K, Paths13575<T[K], Prev13575[D]>> : never }[keyof T]
  : never;

type Prev13575 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13575<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13575 {
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

type ConfigPaths13575 = Paths13575<NestedConfig13575>;

interface HeavyProps13575 {
  config: DeepPartial13575<NestedConfig13575>;
  path?: ConfigPaths13575;
}

const HeavyComponent13575 = memo(function HeavyComponent13575({ config }: HeavyProps13575) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13575) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13575 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13575: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13575.displayName = 'HeavyComponent13575';
export default HeavyComponent13575;
