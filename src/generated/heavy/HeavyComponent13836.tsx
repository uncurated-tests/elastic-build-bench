'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13836<T> = T extends (infer U)[]
  ? DeepReadonlyArray13836<U>
  : T extends object
  ? DeepReadonlyObject13836<T>
  : T;

interface DeepReadonlyArray13836<T> extends ReadonlyArray<DeepReadonly13836<T>> {}

type DeepReadonlyObject13836<T> = {
  readonly [P in keyof T]: DeepReadonly13836<T[P]>;
};

type UnionToIntersection13836<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13836<T> = UnionToIntersection13836<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13836<T extends unknown[], V> = [...T, V];

type TuplifyUnion13836<T, L = LastOf13836<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13836<TuplifyUnion13836<Exclude<T, L>>, L>;

type DeepPartial13836<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13836<T[P]> }
  : T;

type Paths13836<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13836<K, Paths13836<T[K], Prev13836[D]>> : never }[keyof T]
  : never;

type Prev13836 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13836<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13836 {
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

type ConfigPaths13836 = Paths13836<NestedConfig13836>;

interface HeavyProps13836 {
  config: DeepPartial13836<NestedConfig13836>;
  path?: ConfigPaths13836;
}

const HeavyComponent13836 = memo(function HeavyComponent13836({ config }: HeavyProps13836) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13836) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13836 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13836: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13836.displayName = 'HeavyComponent13836';
export default HeavyComponent13836;
