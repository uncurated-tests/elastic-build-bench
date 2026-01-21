'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13909<T> = T extends (infer U)[]
  ? DeepReadonlyArray13909<U>
  : T extends object
  ? DeepReadonlyObject13909<T>
  : T;

interface DeepReadonlyArray13909<T> extends ReadonlyArray<DeepReadonly13909<T>> {}

type DeepReadonlyObject13909<T> = {
  readonly [P in keyof T]: DeepReadonly13909<T[P]>;
};

type UnionToIntersection13909<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13909<T> = UnionToIntersection13909<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13909<T extends unknown[], V> = [...T, V];

type TuplifyUnion13909<T, L = LastOf13909<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13909<TuplifyUnion13909<Exclude<T, L>>, L>;

type DeepPartial13909<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13909<T[P]> }
  : T;

type Paths13909<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13909<K, Paths13909<T[K], Prev13909[D]>> : never }[keyof T]
  : never;

type Prev13909 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13909<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13909 {
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

type ConfigPaths13909 = Paths13909<NestedConfig13909>;

interface HeavyProps13909 {
  config: DeepPartial13909<NestedConfig13909>;
  path?: ConfigPaths13909;
}

const HeavyComponent13909 = memo(function HeavyComponent13909({ config }: HeavyProps13909) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13909) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13909 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13909: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13909.displayName = 'HeavyComponent13909';
export default HeavyComponent13909;
