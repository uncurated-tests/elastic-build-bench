'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13352<T> = T extends (infer U)[]
  ? DeepReadonlyArray13352<U>
  : T extends object
  ? DeepReadonlyObject13352<T>
  : T;

interface DeepReadonlyArray13352<T> extends ReadonlyArray<DeepReadonly13352<T>> {}

type DeepReadonlyObject13352<T> = {
  readonly [P in keyof T]: DeepReadonly13352<T[P]>;
};

type UnionToIntersection13352<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13352<T> = UnionToIntersection13352<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13352<T extends unknown[], V> = [...T, V];

type TuplifyUnion13352<T, L = LastOf13352<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13352<TuplifyUnion13352<Exclude<T, L>>, L>;

type DeepPartial13352<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13352<T[P]> }
  : T;

type Paths13352<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13352<K, Paths13352<T[K], Prev13352[D]>> : never }[keyof T]
  : never;

type Prev13352 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13352<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13352 {
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

type ConfigPaths13352 = Paths13352<NestedConfig13352>;

interface HeavyProps13352 {
  config: DeepPartial13352<NestedConfig13352>;
  path?: ConfigPaths13352;
}

const HeavyComponent13352 = memo(function HeavyComponent13352({ config }: HeavyProps13352) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13352) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13352 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13352: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13352.displayName = 'HeavyComponent13352';
export default HeavyComponent13352;
