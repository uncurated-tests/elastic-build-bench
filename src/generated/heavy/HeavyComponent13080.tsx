'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13080<T> = T extends (infer U)[]
  ? DeepReadonlyArray13080<U>
  : T extends object
  ? DeepReadonlyObject13080<T>
  : T;

interface DeepReadonlyArray13080<T> extends ReadonlyArray<DeepReadonly13080<T>> {}

type DeepReadonlyObject13080<T> = {
  readonly [P in keyof T]: DeepReadonly13080<T[P]>;
};

type UnionToIntersection13080<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13080<T> = UnionToIntersection13080<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13080<T extends unknown[], V> = [...T, V];

type TuplifyUnion13080<T, L = LastOf13080<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13080<TuplifyUnion13080<Exclude<T, L>>, L>;

type DeepPartial13080<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13080<T[P]> }
  : T;

type Paths13080<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13080<K, Paths13080<T[K], Prev13080[D]>> : never }[keyof T]
  : never;

type Prev13080 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13080<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13080 {
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

type ConfigPaths13080 = Paths13080<NestedConfig13080>;

interface HeavyProps13080 {
  config: DeepPartial13080<NestedConfig13080>;
  path?: ConfigPaths13080;
}

const HeavyComponent13080 = memo(function HeavyComponent13080({ config }: HeavyProps13080) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13080) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13080 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13080: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13080.displayName = 'HeavyComponent13080';
export default HeavyComponent13080;
