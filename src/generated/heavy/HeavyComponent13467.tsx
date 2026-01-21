'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13467<T> = T extends (infer U)[]
  ? DeepReadonlyArray13467<U>
  : T extends object
  ? DeepReadonlyObject13467<T>
  : T;

interface DeepReadonlyArray13467<T> extends ReadonlyArray<DeepReadonly13467<T>> {}

type DeepReadonlyObject13467<T> = {
  readonly [P in keyof T]: DeepReadonly13467<T[P]>;
};

type UnionToIntersection13467<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13467<T> = UnionToIntersection13467<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13467<T extends unknown[], V> = [...T, V];

type TuplifyUnion13467<T, L = LastOf13467<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13467<TuplifyUnion13467<Exclude<T, L>>, L>;

type DeepPartial13467<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13467<T[P]> }
  : T;

type Paths13467<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13467<K, Paths13467<T[K], Prev13467[D]>> : never }[keyof T]
  : never;

type Prev13467 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13467<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13467 {
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

type ConfigPaths13467 = Paths13467<NestedConfig13467>;

interface HeavyProps13467 {
  config: DeepPartial13467<NestedConfig13467>;
  path?: ConfigPaths13467;
}

const HeavyComponent13467 = memo(function HeavyComponent13467({ config }: HeavyProps13467) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13467) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13467 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13467: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13467.displayName = 'HeavyComponent13467';
export default HeavyComponent13467;
