'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13876<T> = T extends (infer U)[]
  ? DeepReadonlyArray13876<U>
  : T extends object
  ? DeepReadonlyObject13876<T>
  : T;

interface DeepReadonlyArray13876<T> extends ReadonlyArray<DeepReadonly13876<T>> {}

type DeepReadonlyObject13876<T> = {
  readonly [P in keyof T]: DeepReadonly13876<T[P]>;
};

type UnionToIntersection13876<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13876<T> = UnionToIntersection13876<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13876<T extends unknown[], V> = [...T, V];

type TuplifyUnion13876<T, L = LastOf13876<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13876<TuplifyUnion13876<Exclude<T, L>>, L>;

type DeepPartial13876<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13876<T[P]> }
  : T;

type Paths13876<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13876<K, Paths13876<T[K], Prev13876[D]>> : never }[keyof T]
  : never;

type Prev13876 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13876<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13876 {
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

type ConfigPaths13876 = Paths13876<NestedConfig13876>;

interface HeavyProps13876 {
  config: DeepPartial13876<NestedConfig13876>;
  path?: ConfigPaths13876;
}

const HeavyComponent13876 = memo(function HeavyComponent13876({ config }: HeavyProps13876) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13876) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13876 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13876: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13876.displayName = 'HeavyComponent13876';
export default HeavyComponent13876;
