'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13529<T> = T extends (infer U)[]
  ? DeepReadonlyArray13529<U>
  : T extends object
  ? DeepReadonlyObject13529<T>
  : T;

interface DeepReadonlyArray13529<T> extends ReadonlyArray<DeepReadonly13529<T>> {}

type DeepReadonlyObject13529<T> = {
  readonly [P in keyof T]: DeepReadonly13529<T[P]>;
};

type UnionToIntersection13529<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13529<T> = UnionToIntersection13529<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13529<T extends unknown[], V> = [...T, V];

type TuplifyUnion13529<T, L = LastOf13529<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13529<TuplifyUnion13529<Exclude<T, L>>, L>;

type DeepPartial13529<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13529<T[P]> }
  : T;

type Paths13529<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13529<K, Paths13529<T[K], Prev13529[D]>> : never }[keyof T]
  : never;

type Prev13529 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13529<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13529 {
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

type ConfigPaths13529 = Paths13529<NestedConfig13529>;

interface HeavyProps13529 {
  config: DeepPartial13529<NestedConfig13529>;
  path?: ConfigPaths13529;
}

const HeavyComponent13529 = memo(function HeavyComponent13529({ config }: HeavyProps13529) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13529) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13529 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13529: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13529.displayName = 'HeavyComponent13529';
export default HeavyComponent13529;
