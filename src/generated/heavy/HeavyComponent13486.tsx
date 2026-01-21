'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13486<T> = T extends (infer U)[]
  ? DeepReadonlyArray13486<U>
  : T extends object
  ? DeepReadonlyObject13486<T>
  : T;

interface DeepReadonlyArray13486<T> extends ReadonlyArray<DeepReadonly13486<T>> {}

type DeepReadonlyObject13486<T> = {
  readonly [P in keyof T]: DeepReadonly13486<T[P]>;
};

type UnionToIntersection13486<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13486<T> = UnionToIntersection13486<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13486<T extends unknown[], V> = [...T, V];

type TuplifyUnion13486<T, L = LastOf13486<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13486<TuplifyUnion13486<Exclude<T, L>>, L>;

type DeepPartial13486<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13486<T[P]> }
  : T;

type Paths13486<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13486<K, Paths13486<T[K], Prev13486[D]>> : never }[keyof T]
  : never;

type Prev13486 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13486<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13486 {
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

type ConfigPaths13486 = Paths13486<NestedConfig13486>;

interface HeavyProps13486 {
  config: DeepPartial13486<NestedConfig13486>;
  path?: ConfigPaths13486;
}

const HeavyComponent13486 = memo(function HeavyComponent13486({ config }: HeavyProps13486) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13486) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13486 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13486: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13486.displayName = 'HeavyComponent13486';
export default HeavyComponent13486;
