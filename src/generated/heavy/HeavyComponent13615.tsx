'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13615<T> = T extends (infer U)[]
  ? DeepReadonlyArray13615<U>
  : T extends object
  ? DeepReadonlyObject13615<T>
  : T;

interface DeepReadonlyArray13615<T> extends ReadonlyArray<DeepReadonly13615<T>> {}

type DeepReadonlyObject13615<T> = {
  readonly [P in keyof T]: DeepReadonly13615<T[P]>;
};

type UnionToIntersection13615<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13615<T> = UnionToIntersection13615<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13615<T extends unknown[], V> = [...T, V];

type TuplifyUnion13615<T, L = LastOf13615<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13615<TuplifyUnion13615<Exclude<T, L>>, L>;

type DeepPartial13615<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13615<T[P]> }
  : T;

type Paths13615<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13615<K, Paths13615<T[K], Prev13615[D]>> : never }[keyof T]
  : never;

type Prev13615 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13615<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13615 {
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

type ConfigPaths13615 = Paths13615<NestedConfig13615>;

interface HeavyProps13615 {
  config: DeepPartial13615<NestedConfig13615>;
  path?: ConfigPaths13615;
}

const HeavyComponent13615 = memo(function HeavyComponent13615({ config }: HeavyProps13615) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13615) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13615 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13615: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13615.displayName = 'HeavyComponent13615';
export default HeavyComponent13615;
