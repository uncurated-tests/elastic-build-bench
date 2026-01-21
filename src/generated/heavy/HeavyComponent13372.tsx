'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13372<T> = T extends (infer U)[]
  ? DeepReadonlyArray13372<U>
  : T extends object
  ? DeepReadonlyObject13372<T>
  : T;

interface DeepReadonlyArray13372<T> extends ReadonlyArray<DeepReadonly13372<T>> {}

type DeepReadonlyObject13372<T> = {
  readonly [P in keyof T]: DeepReadonly13372<T[P]>;
};

type UnionToIntersection13372<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13372<T> = UnionToIntersection13372<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13372<T extends unknown[], V> = [...T, V];

type TuplifyUnion13372<T, L = LastOf13372<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13372<TuplifyUnion13372<Exclude<T, L>>, L>;

type DeepPartial13372<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13372<T[P]> }
  : T;

type Paths13372<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13372<K, Paths13372<T[K], Prev13372[D]>> : never }[keyof T]
  : never;

type Prev13372 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13372<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13372 {
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

type ConfigPaths13372 = Paths13372<NestedConfig13372>;

interface HeavyProps13372 {
  config: DeepPartial13372<NestedConfig13372>;
  path?: ConfigPaths13372;
}

const HeavyComponent13372 = memo(function HeavyComponent13372({ config }: HeavyProps13372) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13372) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13372 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13372: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13372.displayName = 'HeavyComponent13372';
export default HeavyComponent13372;
