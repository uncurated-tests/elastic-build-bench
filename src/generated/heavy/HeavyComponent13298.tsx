'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13298<T> = T extends (infer U)[]
  ? DeepReadonlyArray13298<U>
  : T extends object
  ? DeepReadonlyObject13298<T>
  : T;

interface DeepReadonlyArray13298<T> extends ReadonlyArray<DeepReadonly13298<T>> {}

type DeepReadonlyObject13298<T> = {
  readonly [P in keyof T]: DeepReadonly13298<T[P]>;
};

type UnionToIntersection13298<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13298<T> = UnionToIntersection13298<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13298<T extends unknown[], V> = [...T, V];

type TuplifyUnion13298<T, L = LastOf13298<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13298<TuplifyUnion13298<Exclude<T, L>>, L>;

type DeepPartial13298<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13298<T[P]> }
  : T;

type Paths13298<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13298<K, Paths13298<T[K], Prev13298[D]>> : never }[keyof T]
  : never;

type Prev13298 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13298<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13298 {
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

type ConfigPaths13298 = Paths13298<NestedConfig13298>;

interface HeavyProps13298 {
  config: DeepPartial13298<NestedConfig13298>;
  path?: ConfigPaths13298;
}

const HeavyComponent13298 = memo(function HeavyComponent13298({ config }: HeavyProps13298) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13298) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13298 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13298: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13298.displayName = 'HeavyComponent13298';
export default HeavyComponent13298;
